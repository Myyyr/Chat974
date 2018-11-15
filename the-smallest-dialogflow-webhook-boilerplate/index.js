'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')

// These two following lines ensures that every incomming request is parsed to json automatically
app.use(bodyParser.urlencoded({ extended: 'true' }))
app.use(bodyParser.json())
// Allowing access to resources from anywhere
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.post('/', (req, res) => {
  let response = {};
  const intentName = req.body.queryResult.intent.displayName;

  if (intentName === 'hello') {
    response = {
      fulfillmentText: "Hello",
    }
  }

  else if (intentName === 'LVMH') {

const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: `http://themyr.iiens.net/`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    console.log($);
    console.log($('.informationlvmh', html).text());
    let x = $('.informationlvmh', html).text();
  })
  .catch((err) => {
    console.log(err);
});

    response = {
      fulfillmentText: x,
    }
  }

  res.json(response);
})

app.get('/health', (req, res) => {
  res.send('chatbot')
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port)
console.log('info', `server listening on port ${port}`)
