import { useEffect, useState } from 'react';
import { get, maxBy } from 'lodash';
import { 
  CloudRain, 
  Thermometer,
  Loader2
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetCurrentWeather, useGetHistoryWeather } from '@/services/weather-service';
import WeatherCard from './WeatherCard';
import WeatherTable from './WeatherTable';
import WeatherLineForecast from './WeatherForecast';

// setup location
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

interface Coordinates {
  longitude: number;
  latitude: number;
}

const WeatherDashboard = () => {
  const [error, setError] = useState(null);
  const [params, setParams] = useState({
    include: 'daily',
    longitude: '106.8456',
    latitude: '-6.2088',
    startDate: startDateString,
    endDate: endDateString
  });

  function getLocation(): Promise<Coordinates> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          });
        },
        (error) => reject(error)
      );
    });
  }

  useEffect(() => {
    async function setupLocation() {
      try {
        const { longitude, latitude } = await getLocation();
        setParams({
          include: 'daily',
          longitude: longitude.toString(),
          latitude: latitude.toString(),
          startDate: startDateString,
          endDate: endDateString
        });
      } catch (error) {
        console.error('Geolocation error:', error);
        setError(error);
      }
    }
    
    setupLocation();
  }, []);

  const { data: historyWeatherList, isLoading } = useGetHistoryWeather(params);
  const history = get(historyWeatherList, 'data.data', []);

  const { data: historyWeatherCurrent } = useGetCurrentWeather(params);
  const current = get(historyWeatherCurrent, 'data.data', []);

  // Menentukan kota dengan suhu tertinggi
  const hottestCity = maxBy(history, (item) => parseFloat(item.temperature));
  
  // Menentukan kota dengan curah hujan tertinggi
  const highestRainfallCity = maxBy(history, (item) => parseFloat(item.precipitation));

  return (
    <div className="space-y-8 animate-fade-in">
      <Tabs defaultValue="saved" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="saved">My Locations</TabsTrigger>
          <TabsTrigger value="table">History</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

         {/* Saved locations tab */} 
        <TabsContent value="saved" className="space-y-6 animate-fade-in">
           {/* High Rainfall City */}
          <div className="space-y-4">
            {current.map((item, index) => (
              <WeatherCard
                key={index}
                weather={current[index]}
              />
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">3-Hourly Weather Forecast</h2>
            </div>
            <WeatherLineForecast latitude={params.latitude} longitude={params.longitude}/>
          </div>
        </TabsContent>

        <TabsContent value="table" className="animate-fade-in">
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
