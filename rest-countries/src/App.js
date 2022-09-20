import './App.css';
import { useEffect, useState } from "react";


function App() {
    return ( <
        div className = "App" >
        <LoadCountries></LoadCountries>
        </div> 
    );
}

function LoadCountries(){
 
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))

  }, [])
  return(
    <div>
      <h3> {countries.length} </h3>
      {
        countries.map(country => <Country name = {country.name.common} official = {country.name.official} population = {country.population} spelling = {country.altSpellings}capital = {country.capital}>
          
        </Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div className='container'>
      <h2>Name: {props.name} </h2>
      <h3>Capital: {props.capital} </h3>
      <h4>Official name: {props.official} </h4>
      <p>Population: {props.population} </p>
      <p>Old Spellings: {props.spelling} </p>

    </div>
  )

}
export default App;