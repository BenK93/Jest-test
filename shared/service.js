const axios = require("axios");

const _axios = axios.create({
  baseURL: "https://61658061cb73ea001764208a.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

let validLease = {
  address: "1345 Keeling Alley",
  unit: "232",
  tenants: [
    {
      fullname: "ben Carter",
      email: "Gudrun.Wehner@hotmail.com",
      phoneNumber: 544970183,
    },
  ],
};

module.exports = { _axios, validLease };
