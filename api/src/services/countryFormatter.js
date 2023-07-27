export const countryFormatter = (countries) => {
  const countriesFormat = countries.data.map((country) => ({
    id: country.cca3,
    name: country.name.common,
    image: country.flags.png,
    continent: country.continents[0],
    capital: country.capital ? country.capital[0] : "No tiene",
    subregion: country.subregion,
    area: country.area,
    population: country.population,
  }));

  return countriesFormat;
};
