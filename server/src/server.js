const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

const XmlService = require('./services/xml')
const DataService = require('./services/data')

const UPDATE_TIME = 1000 * 60 * 5;

const Server = () => {
  const app = express();
  const xml = XmlService();
  const data = DataService();

  const onStart = async () => {
    console.log('### SERVER START ###')
    dotenv.config();

    app.use(express.json())
    app.use(cors())
    app.use(onGetRoutes())

    xml.init();

    await onUpdate();

    app.listen(process.env.PORT || 3333);
  }

  const onUpdate = async () => {
    console.log('### SERVER UPDATING ###')
    const xmlData = await xml.getXml();
    if (xmlData && xmlData.length > 0) {
      data.set(xmlData);
    }
    setTimeout(onUpdate, UPDATE_TIME);
  }

  const onGetRoutes = () => {
    const router = express.Router();
  
    router.get("/", (req, res) => {
      res.send('hello word');
    })

    router.get('/all', (req, res) => {
      const values = data.get();
      res.send(values);
    })

    return router;
  }

  onStart();
}

Server();