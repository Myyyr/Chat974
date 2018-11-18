'use strict'

let express = require('express')
let app = express()
let bodyParser = require('body-parser')

var x = "cotation du CAC40";

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


const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://themyr.iiens.net/'
}, (err, res, body) => {

    if (err) return console.error(err);

    var $ = cheerio.load(body);
    x = $('.informationlvmh').attr('title');

});

    response = {
      fulfillmentText: x,
    }
  }

  else if (intentName === 'Michelin') {


const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://themyr.iiens.net/'
}, (err, res, body) => {

    if (err) return console.error(err);

    var $ = cheerio.load(body);
    x = $('.informationmichelin').attr('title');

});

    response = {
      fulfillmentText: x,
    }
  }

  else if (intentName === 'Safran') {


const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://themyr.iiens.net/'
}, (err, res, body) => {

    if (err) return console.error(err);

    var $ = cheerio.load(body);
    x = $('.informationsafran').attr('title');

});

    response = {
      fulfillmentText: x,
    }
  }

  else if (intentName === 'Total') {


const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://themyr.iiens.net/'
}, (err, res, body) => {

    if (err) return console.error(err);

    var $ = cheerio.load(body);
    x = $('.informationtotal').attr('title');

});

    response = {
      fulfillmentText: x,
    }
  }

  else if (intentName === 'Air Liquide') {


const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://themyr.iiens.net/'
}, (err, res, body) => {

    if (err) return console.error(err);

    var $ = cheerio.load(body);
    x = $('.informationairliquide').attr('title');

});

    response = {
      fulfillmentText: x,
    }
  }

  else if (intentName === 'Napoli') {


const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://themyr.iiens.net/pageperso.html'
}, (err, res, body) => {

    if (err) return console.error(err);

    document.getElementById('js-subscribe-open').click();
    // document.getElementById("mailnewsletter").value = "julien.napoli@neuf.fr";
    // document.getElementById("js-email-input").value = "bastien.baude@free.fr";
    // document.getElementById("js-subscribe-submit").submit();
    document.getElementById("mailnewsletter").value = "bastien.baude@free.fr";
    document.getElementById("newsletter").submit();

});

    response = {
      fulfillmentText: "Chef, j'ai envoyé la Newsletter à Napoli !",
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
