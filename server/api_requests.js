const axios = require('axios');
const config = require('../config.js');

module.exports = {
  getAllProducts: (req, res) => {
    const options = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products',
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
      },
    };
    axios(options)
      .then((result) => {
        console.log(result.data);
        res.send(result.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
