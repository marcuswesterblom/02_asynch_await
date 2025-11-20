import { getCountries } from './services/countryService'
import './style.css'
import { createHtml } from './utils/createHtml'

const init = async () => {
  const countries = await getCountries();
  createHtml(countries);
};

init();