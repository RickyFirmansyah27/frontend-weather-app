import { useState } from 'react';
import { get, maxBy } from 'lodash';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { KotaIndonesia, kotaCoordinates } from '.././../services/city-type';  // Import enum kota
import WeatherCard from './WeatherCard';
import { useGetCurrentWeatherByParam, useGetListWeather } from '@/services/weather-service';
import { 
  CloudRain,
  Loader2,
  Thermometer
} from 'lucide-react';
import WeatherTable from './WeatherTable';

const WeatherDashboard = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [activeTab, setActiveTab] = useState("saved");
  const [formData, setFormData] = useState({
    city: '',
    include: '',
  });

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 30);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const startDateString = formatDate(startDate);
  const endDateString = formatDate(today);

  const query = {
    include: 'daily',
    longitude: '106.8456',
    latitude: '-6.2088',
    startDate: startDateString,
    endDate: endDateString
  };

  const { data: historyWeatherList, isLoading, refetch: refetchList } = useGetListWeather(query);
  const history = get(historyWeatherList, 'data.data', []);

  const [params, setParams] = useState(null);
  const { data: historyWeatherCurrent } = useGetCurrentWeatherByParam(params, isSearch); // Fetch current weather based on params
  const current = get(historyWeatherCurrent, 'data.data', null); // Safely access the current weather data

  const hottestCity = maxBy(history, (item) => parseFloat(item.temperature));
  
  // Menentukan kota dengan curah hujan tertinggi
  const highestRainfallCity = maxBy(history, (item) => parseFloat(item.precipitation));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(true);
    const selectedCity = kotaCoordinates[formData.city];

    if (selectedCity) {
      // Set params first
      setParams({
        include: formData.include,  // Corrected the include value
        longitude: selectedCity?.longitude,
        latitude: selectedCity?.latitude,
      });
    }
  };

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === "list") {
      // Refetch data when switching to the list tab
      refetchList();
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <Tabs defaultValue="saved" className="w-full" value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="saved">Check Weather</TabsTrigger>
          <TabsTrigger value="list">Check List</TabsTrigger>
          <TabsTrigger value="categories">Category</TabsTrigger>
        </TabsList>

        {/* Form Input User */}
        <TabsContent value="saved" className="space-y-6 animate-fade-in">
          <div className="glass-card p-6 overflow-hidden relative group">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* City Dropdown */}
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="input p-2 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="" disabled>Select a city</option> {/* Placeholder option */}
                    {Object.values(KotaIndonesia).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Include Input */}
                <div className="flex flex-col">
                  <label htmlFor="include" className="text-sm font-medium text-gray-700">Include</label>
                  <Input
                    id="include"
                    type="text"
                    name="include"  // Fixed the name to match the state key
                    value={formData.include}
                    onChange={handleChange}
                    placeholder='Enter "daily" or "hourly"'
                    className="p-2 rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full py-3 bg-indigo-600 text-white hover:bg-indigo-700 rounded-md">
                Get Weather
              </Button>
            </form>
          </div>

          {/* Display Current Weather if Available */}
          {current && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Current Weather for {formData.city}</h2>
              </div>
              <WeatherCard weather={current[0]} /> {/* Display the current weather card */}
            </div>
          )}

        </TabsContent>

        {/* Weather Data Table */}
        <TabsContent value="list" className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Weather History</h2>
            <Button
              onClick={() => refetchList()}
              className="flex items-center gap-2"
              variant="outline"
            >
              <Loader2 className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <WeatherTable weatherData={history} />
          )}
        </TabsContent>

        <TabsContent value="categories" className="space-y-8 animate-fade-in">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              {/* High Rainfall City */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CloudRain className="h-5 w-5 text-weather-rainy" />
                  <h2 className="text-xl font-semibold">Highest Rainfall City</h2>
                </div>
                {highestRainfallCity && (
                  <WeatherCard weather={highestRainfallCity} />
                )}
              </div>

              {/* Hottest City */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-weather-sunny" />
                  <h2 className="text-xl font-semibold">Hottest City</h2>
                </div>
                {hottestCity && (
                  <WeatherCard weather={hottestCity} />
                )}
              </div>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WeatherDashboard;