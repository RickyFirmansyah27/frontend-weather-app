import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning,
  CloudSun, 
  Thermometer,
  Wind,
  Droplets,
  Pin,
} from 'lucide-react';
import { WeatherList } from '@/services/weatherService';

interface WeatherCardProps {
  weather: WeatherList;
  onSave?: (weather: WeatherList) => void;
  onRemove?: (location: string) => void;
}

const WeatherCard = ({ weather }: WeatherCardProps) => {
  const getWeatherIcon = () => {
    const iconProps = { size: 40, strokeWidth: 1.5, className: 'mb-2' };
    
    const condition = weather.condition.toLowerCase();
    
    if (condition.includes('sunny') || condition.includes('clear')) {
      return <Sun {...iconProps} className="text-weather-sunny mb-2" />;
    } else if (condition.includes('rain')) {
      return <CloudRain {...iconProps} className="text-weather-rainy mb-2" />;
    } else if (condition.includes('cloud')) {
      return <Cloud {...iconProps} className="text-weather-cloudy mb-2" />;
    } else if (condition.includes('snow')) {
      return <CloudSnow {...iconProps} className="text-weather-snowy mb-2" />;
    } else if (condition.includes('thunder') || condition.includes('storm')) {
      return <CloudLightning {...iconProps} className="text-weather-stormy mb-2" />;
    } else if (condition.includes('partly')) {
      return <CloudSun {...iconProps} className="text-weather-sunny mb-2" />;
    } else {
      return <Thermometer {...iconProps} className="text-weather-sunny mb-2" />;
    }
  };

  return (
    <div className="glass-card p-6 overflow-hidden relative group">
      {/* Card content */}
      <div className="flex flex-col items-center text-center">
        {/* Weather icon */}
        <div className="mb-1">
          {getWeatherIcon()}
        </div>
        
        {/* Temperature */}
        <h3 className="text-3xl font-bold mb-1">
          {weather.temperature}
        </h3>
        
        {/* Condition */}
        <p className="text-muted-foreground mb-4">{weather.condition}</p>
        
        {/* Location */}
        <div className="flex items-center justify-center gap-1 mb-4">
          <Pin size={14} className="text-muted-foreground" />
          <span className="font-medium">{weather.location}, {weather.country}</span>
        </div>
        
        {/* Additional weather details */}
        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="flex flex-col items-center">
            <Wind size={16} className="text-muted-foreground mb-1" />
            <span className="text-sm font-medium">{weather.windspeed ||weather.windSpeed}</span>
            <span className="text-xs text-muted-foreground">Wind</span>
          </div>
          
          <div className="flex flex-col items-center">
            <Droplets size={16} className="text-muted-foreground mb-1" />
            <span className="text-sm font-medium">{weather.humidity}</span>
            <span className="text-xs text-muted-foreground">Humidity</span>
          </div>
          
          <div className="flex flex-col items-center">
            <CloudRain size={16} className="text-muted-foreground mb-1" />
            <span className="text-sm font-medium">{weather.precipitation}%</span>
            <span className="text-xs text-muted-foreground">Rain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
