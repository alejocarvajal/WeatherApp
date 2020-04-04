import React from 'react';
import Paper  from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import {Grid, Col, Row} from 'react-flexbox-grid';
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
const handleSelectedLocation = city => {
    console.log("handleSelectionLocation");
};
function App() {

  return (
      <Grid>
          <Row>
              <AppBar position='sticky'>
                  <Toolbar>
                      <Typography variant='tittle' color='inherit'>
                          WeatherApp
                      </Typography>
                  </Toolbar>
              </AppBar>
          </Row>
          <Row>
              <Col xs={12} md={6}>
                  <LocationList cities={cities}
                                onSelectedLocation={handleSelectedLocation}/>
              </Col>
              <Col xs={12} md={6}>
                  <Paper elevation={4}>
                      <div className="details">
                      </div>
                  </Paper>
              </Col>
          </Row>
      </Grid>
  );
}

export default App;