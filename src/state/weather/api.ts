import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function fetchWeather(query: string) {
  const { data: response }: { data: Response } = await api.get(`/weather?q=${query}`);
  const { data, errors } = response;
  if (errors) {
    throw new Error('Unable to get weather data at this time');
  }
  return data;
};

type Response = {
  data: Weather;
  errors: Record<string, string>[];
}

export type Weather = {
  city: string;
  description: string;
  temperature: number;
  temperature_feels_like: number;
  wind_direction: string;
  wind_speed: number;
};
