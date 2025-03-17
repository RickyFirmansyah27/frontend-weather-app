import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { get } from 'lodash';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useGetForecast } from '../../services/weather-service';

const WeatherLineForecast = ({ latitude, longitude }) => {

  const { data: forecastList, isLoading } = useGetForecast({ latitude, longitude});
  const response = get(forecastList, 'data.data', []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!response.length) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        Tidak ada data prakiraan cuaca tersedia
      </div>
    );
  }

  return (
    <div className="glass-card p-6 overflow-hidden relative group">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={response} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid horizontal={true} vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="time"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666' }} 
              dy={30}
            />
            <YAxis 
              domain={[Math.min(...response.map(d => d.temp)) - 2, Math.max(...response.map(d => d.temp)) + 2]} 
              orientation="left"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}°`}
              stroke="#f97316"
              tick={{ fill: '#f97316' }}
              width={40}
            />
            <Line 
              type="monotone" 
              dataKey="temp" 
              stroke="#f97316" 
              strokeWidth={3} 
              dot={false} 
              activeDot={{ r: 6, fill: '#f97316' }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer table */}
      <div className="border-t border-gray-100 pt-2">
        {/* Header row - Hours */}
        <div className="grid grid-cols-10 text-center text-gray-700 text-sm">
          {response.map((point, index) => (
            <div key={`time-${index}`} className="py-1">
              {point.time}
            </div>
          ))}
        </div>
        
        {/* Precipitation row */}
        <div className="grid grid-cols-10 text-center text-teal-500 text-sm">
          {response.map((point, index) => (
            <div key={`prec1-${index}`} className="py-0.5">
              {Math.round(point.precipitation1)}%
            </div>
          ))}
        </div>
        
        {/* Description row */}
        <div className="grid grid-cols-10 text-center text-gray-500 text-sm">
          {response.map((point, index) => (
            <div key={`desc1-${index}`} className="py-0.5">
              {point.description1}
            </div>
          ))}
        </div>
  
        {/* Wind speed row */}
        <div className="grid grid-cols-10 text-center text-gray-500 text-sm">
          {response.map((point, index) => (
            <div key={`wind1-${index}`} className="py-0.5">
              {point.windSpeed1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherLineForecast;
