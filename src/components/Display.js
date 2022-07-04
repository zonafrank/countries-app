import SingleCountryDisplay from "./SingleCountryDisplay";
import MultipleCountryDisplay from "./MultipleCountryDisplay";

function Display({ countryArray }) {
  if (countryArray.length === 0) {
    return <p>Enter the name of a country you wish to see.</p>;
  } else if (countryArray.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (countryArray.length === 1) {
    return <SingleCountryDisplay countryToDisplay={countryArray[0]} />;
  } else {
    return <MultipleCountryDisplay countriesToDisplay={countryArray} />;
  }
}

export default Display;
