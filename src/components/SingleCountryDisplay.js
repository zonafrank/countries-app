function SingleCountryDisplay({ countryToDisplay }) {
  return (
    <div>
      <h2>{countryToDisplay.name.official}</h2>
      <div class="coat-of-arms">
        <img src={countryToDisplay.coatOfArms.png} alt="" />
      </div>
      <p>Capital: {countryToDisplay.capital}</p>
      <p>Area: {countryToDisplay.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(countryToDisplay.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <div class="flag-image">
        <img src={countryToDisplay.flags.png} alt="country flag" />
      </div>
    </div>
  );
}

export default SingleCountryDisplay;
