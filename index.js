const express = require("express");
const app = express();
const router = require('./src/router/router');
const bodyParser = require("body-parser");
const cors = require("cors");
const contextPath = '/Rent-Api';
app.use(cors());  
app.use(contextPath, router);
const PORT =  process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});