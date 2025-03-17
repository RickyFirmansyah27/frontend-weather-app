
// Weather data types
export interface WeatherData {
  id: string;
  location: string;
  country: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  icon: string;
  timestamp: string;
  latitude?: number;
  longitude?: number;
  isSaved?: boolean;
}

export interface WeatherHistory {
  location: string,
  time: string,
  condition: string,
  temperature: string,
  humidity: string,
  windSpeed: string,
  precipitation: string
}

export interface WeatherList {
  location: string,
  time: string,
  condition: string,
  temperature: string,
  humidity: string,
  windspeed: string,
  precipitation: string
}



