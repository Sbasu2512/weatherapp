/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    weather_api: process.env.WEATHER_API,
    geocoding_api: process.env.GEOCODING_API
  }
}

module.exports = nextConfig
