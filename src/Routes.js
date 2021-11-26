import React from 'react';
import {
  Routes,
  Route,
  Redirect
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';


function Routes({dogs}) {
    return (
        <Routes>
            <Route exact path="/" element={<DogList dogs={dogs} />} />
            <Route exact path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
            <Redirect to="/dogs" />
        </Routes>
    )
}

export default Routes;