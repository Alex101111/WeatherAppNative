// components/Weather.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Weather = ({ weather }) => (
  <View style={styles.weatherContainer}>
    <Text style={styles.cityName}>{weather.name}</Text>
    <Text style={styles.temperature}>{weather.main.temp} °C</Text>
    <Text style={styles.description}>{weather.weather[0].description}</Text>
    <Image
      style={styles.weatherIcon}
      source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
    />
  </View>
);

const styles = StyleSheet.create({
  weatherContainer: {
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 20,
  },
  description: {
    fontSize: 16,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
});

export default Weather;
