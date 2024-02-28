const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongooose.config');
app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));
const AllMyManagerRoutes = require('./routes/manager.routes');
AllMyManagerRoutes(app);
app.listen(8000, () => {
  console.log("Listening at Port 8000")
})
           

