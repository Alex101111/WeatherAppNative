// screens/CitiesScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Weather from '../WeatherApp/components/Weather';

const WEATHER_API_KEY = '';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const CitiesScreen = () => {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weathers, setWeathers] = useState({});

  const addCity = async () => {
    if (city && !cities.includes(city)) {
      setCities([...cities, city]);
      fetchWeather(city);
    }
  };

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${WEATHER_API_URL}?q=${city}&units=metric&appid=${WEATHER_API_KEY}`);
      const data = await response.json();
      setWeathers((prev) => ({ ...prev, [city]: data }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Add City" onPress={addCity} />
      {cities.map((city) => (
        <View key={city} style={styles.weatherContainer}>
          {weathers[city] && <Weather weather={weathers[city]} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  weatherContainer: {
    marginTop: 20,
    width: '100%',
  },
});

export default CitiesScreen;
