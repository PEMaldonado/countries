import { Country } from "../db.js";
import { Op } from "sequelize";

const getAllCountries = async () => {
  const countries = await Country.findAll();
  return countries;
};

const getCountryById = async (id) => {
  const country = await Country.findByPk(id);
  return country;
};

const getCountryByName = async (name) => {
  const country = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}` } },
  });
  return country;
};

export { getAllCountries, getCountryById, getCountryByName };
