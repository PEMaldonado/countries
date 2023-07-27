import {
  getAllCountries,
  getCountryById,
  getCountryByName,
} from "../services/countriesService.js";

const getCountries = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const country = await getCountryByName(name);
      res.status(200).json(country);
    } else {
      const countries = await getAllCountries();
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountry = async (req, res) => {
  const { idCountry } = req.params;

  try {
    const country = await getCountryById(idCountry);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { getCountries, getCountry };
