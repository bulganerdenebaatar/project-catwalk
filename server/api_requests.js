const axios = require('axios');
const config = require('../config.js');

module.exports = {
  getInfo: (req, res) => {
    // console.log(req.url);
    const options = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${req.url}`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
      },
    };
    axios(options)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  postInfo: (req, res) => {
    // console.log(req.url);
    // console.log(req.body);
    const options = {
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${req.url}`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
        'content-type': 'application/json',
      },
      data: req.body,
    };
    axios(options)
      .then((result) => {
        res.send(result.statusCode);
      })
      .catch((err) => {
        res.send(err);
      });
  },

  updateInfo: (req, res) => {
    const options = {
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp${req.url}`,
      headers: {
        'User-Agent': 'request',
        Authorization: `${config.TOKEN}`,
      },
      data: req.body,
    };
    axios(options)
      .then((result) => {
        res.send(result.statusCode);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
