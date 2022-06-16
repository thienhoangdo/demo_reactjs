import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongodb, { MongoClient } from 'mongodb';

const app = express();



let url = 'mongodb://localhost:27017/';

var mongo = new MongoClient(url, { useNewUrlParser : true});

mongo.connect(function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      console.log('Connection established to', url);
  
      // do some work here with the database.
  
      //Close connection
      db.close();
    }
  });

app.use(bodyParser.json());
app.use(cors());
var port = 5000
app.use(express.static("publlic"));

app.set("views", "./view");
app.set("view engine","ejs");

app.get("/", function(req, res){
    
    res.render('trangchu');
});

app.post("/", function(req, res){
    console.log(req.body);
    
});

app.listen(port, function () {
    console.log("tesst gi do");
});