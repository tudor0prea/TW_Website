const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const fs = require("fs");



const application = express();
    application.use(morgan("tiny"));
    application.use(bodyParser.json());
    application.use(cors());

    application.post("/auto", (req, res) => 
    {
        const L = readJSONFile();
    
        req.body.id = uuid.v4.apply();
        L.push(req.body);
        writeJSONFile(L);
  
        res.status(200).send(req.body);
    }
    
    );
 
  // start
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);