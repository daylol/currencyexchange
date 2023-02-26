import axios from "axios";

const getCurrency = (currency) => {
  return axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?valcode=${currency}&json`);
}

export const getEur = async (cb) => {
  try {
    const { data } = await getCurrency('EUR');
    cb(data[0].rate.toFixed(2));
  } catch (error) {
    console.log(error);
  }
}

export const getUsd = async (cb) => {
  try {
    const { data } = await getCurrency('USD');
    cb(data[0].rate.toFixed(2));
  } catch (error) {
    console.log(error);
  }
}
