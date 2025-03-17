import { useState } from 'react';
import { 
  BookmarkCheck, 
  Bookmark, 
  ArrowUpDown, 
  Search,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudSun,
  Thermometer
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WeatherData, WeatherHistory } from '@/services/weatherService';
import { toast } from 'sonner';

interface WeatherTableProps {
  weatherData: WeatherHistory[];
  onSave?: (weather: WeatherData) => void;
  onRemove?: (location: string) => void;
}

type SortKey = 'location' | 'temperature' | 'humidity' | 'windSpeed' | 'precipitation';
type SortOrder = 'asc' | 'desc';

const WeatherTable = ({ weatherData, onSave, onRemove }: WeatherTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('location');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  
  // Handle sorting
  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('asc');
    }
  };
  
  // Ensure weatherData is an array, fallback to empty array if not
  const safeWeatherData = Array.isArray(weatherData) ? weatherData : [];

  // Filter and sort the weather data
  const filteredAndSortedData = safeWeatherData
    .filter(weather => 
      weather.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      weather.condition.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];
      
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder === 'asc' 
          ? valueA.localeCompare(valueB) 
          : valueB.localeCompare(valueA);
      } else {
        const numA = Number(valueA);
        const numB = Number(valueB);
        return sortOrder === 'asc' ? numA - numB : numB - numA;
      }
    });
  
  // Get appropriate weather icon based on condition
  const getWeatherIcon = (condition: string) => {
    const iconProps = { size: 18, strokeWidth: 1.5 };
    
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
      return <Sun {...iconProps} className="text-weather-sunny" />;
    } else if (conditionLower.includes('rain')) {
      return <CloudRain {...iconProps} className="text-weather-rainy" />;
    } else if (conditionLower.includes('cloud')) {
      return <Cloud {...iconProps} className="text-weather-cloudy" />;
    } else if (conditionLower.includes('snow')) {
      return <CloudSnow {...iconProps} className="text-weather-snowy" />;
    } else if (conditionLower.includes('thunder') || conditionLower.includes('storm')) {
      return <CloudLightning {...iconProps} className="text-weather-stormy" />;
    } else if (conditionLower.includes('partly')) {
      return <CloudSun {...iconProps} className="text-weather-sunny" />;
    } else {
      return <Thermometer {...iconProps} className="text-weather-sunny" />;
    }
  };
  
  // Handle save/remove location
  const handleSaveToggle = (weather: WeatherData) => {
    if (weather.isSaved) {
      if (onRemove) {
        onRemove(weather.location);
        toast.success(`Removed ${weather.location} from saved locations`);
      }
    } else {
      if (onSave) {
        onSave(weather);
        toast.success(`Saved ${weather.location} to your locations`);
      }
    }
  };
  
  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by location, country, or condition..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 focus-ring"
        />
      </div>
      
      {/* Table */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">#</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 font-medium flex items-center"
                    onClick={() => handleSort('location')}
                  >
                    Location
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 font-medium flex items-center"
                    onClick={() => handleSort('temperature')}
                  >
                    Temp.
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 font-medium flex items-center"
                    onClick={() => handleSort('humidity')}
                  >
                    Humidity
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 font-medium flex items-center"
                    onClick={() => handleSort('windSpeed')}
                  >
                    Wind
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-0 font-medium flex items-center"
                    onClick={() => handleSort('precipitation')}
                  >
                    Precip.
                    <ArrowUpDown size={14} className="ml-1" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-6 text-muted-foreground">
                    No weather data found
                  </TableCell>
                </TableRow>
              ) : (
                filteredAndSortedData.map((weather, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {weather.location}
                    </TableCell>
                    <TableCell>{weather.time}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        {getWeatherIcon(weather.condition)}
                        <span>{weather.condition}</span>
                      </div>
                    </TableCell>
                    <TableCell>{weather.temperature}</TableCell>
                    <TableCell>{weather.humidity}</TableCell>
                    <TableCell>{weather.windSpeed}</TableCell>
                    <TableCell>{weather.precipitation}%</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default WeatherTable;
