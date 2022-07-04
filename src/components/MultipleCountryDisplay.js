function MultipleCountryDisplay({ countriesToDisplay }) {
  return (
    <div>
      {countriesToDisplay.map((c) => (
        <p key={c.cca3}>{c.name.common}</p>
      ))}
    </div>
  );
}

export default MultipleCountryDisplay;
