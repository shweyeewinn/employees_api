const express = require('express');
bodyParser = require('body-parser')
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const url = 'http://api.additivasia.io/api/v1';

app.get('/', async (req, res) => {
  const { data } = await axios.get(`${url}/assignment/employees`);
  res.json(data);
})

app.get('/:name', async (req, res) => {
  const { data } = await axios.get(`${url}/assignment/employees/${req.params.name}`);
  res.json(data);
})

app.listen(4000, () => console.log('Api server is listening on port 4000'));