import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
const app = express();

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

app.listen(port);