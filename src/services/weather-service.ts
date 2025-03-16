import { useQuery } from "@tanstack/react-query";
import { apiGet } from "./axios-client";


const DEFAULT_QUERY_OPTIONS = {
  retry: 1,
  refetchOnWindowFocus: false,
};

const basePath = "/api/hono/weather";

export const useGetCurrentWeather = (query = {}) => {
  return useQuery({
    ...DEFAULT_QUERY_OPTIONS,
    queryKey: ["current_weather", query],
    queryFn: async () => {
      return await apiGet(`${basePath}`, query);
    },
  });
};


export const useGetCurrentWeatherByParam = (query = {}, enabled = false) => {
  return useQuery({
    ...DEFAULT_QUERY_OPTIONS,
    queryKey: ['current_weather_param', query],
    queryFn: () => apiGet(`${basePath}/check`, query),
    enabled,
  });
};

export const useGetHistoryWeather = (query = {}) => {
  return useQuery({
    ...DEFAULT_QUERY_OPTIONS,
    queryKey: ["history_weather", query],
    queryFn: async () => {
      return await apiGet(`${basePath}/history`, query);
    },
  });
};

export const useGetListWeather = (query = {}) => {
  return useQuery({
    ...DEFAULT_QUERY_OPTIONS,
    queryKey: ["list_weather", query],
    queryFn: async () => {
      return await apiGet(`${basePath}/list`, query);
    },
  });
};