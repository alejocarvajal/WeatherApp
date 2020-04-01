import React from 'react';
import LocationList from './components/LocationList';
import logo from './logo.svg';
import './App.css';

const cities = [
  "Buenos Aires",
  "Washington",
  "Bogota",
  "Ciudad de mexico",
  "Madrid",
  "Lima",
];

function App() {
  return (
      <div className="App">
        Weather App (Aplicacion del clima)
        Weather App (Aplicacion del clima)
        <LocationList cities={cities} />
      </div>
  );
}

export default App;