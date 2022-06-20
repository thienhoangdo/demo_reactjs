import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongodb, { MongoClient } from 'mongodb';
import mongoose from 'mongoose';


const app = express();



let url = 'mongodb://localhost:27017/admin';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(url);
}

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const customer = new Schema({
  author: ObjectId,
  name: String,
  age: String,
},{
  collection: "customer"
},{ versionKey: false });

const MyModel = mongoose.model('customer', customer);



app.use(bodyParser.json());
app.use(cors());
var port = 5000
app.use(express.static("publlic"));

app.set("views", "./view");
app.set("view engine","ejs");

app.get("/", function(req, res){
    MyModel.find({}).then(function(data){
      console.log('data',data);
      res.json(data);
    })
    .catch(function(err){
      console.log('loi',err);
    })
});

app.post("/create", function(req, res){
  console.log(req.body)
  MyModel.create({
    name : req.body.name,
    age : req.body.age
  }).then(function(req){
    console.log('data',req.body);
  
  })
  .catch(function(err){
    console.log('loi',err);
  })
});

app.post("/delete", function(req, res){
  console.log(req.body._id);
  let id = req.body._id;
  MyModel.deleteOne({
    _id : id
  }).then(function(req){
    console.log('data',req.body);
  
  })
  .catch(function(err){
    console.log('loi',err);
  })
});


// app.post("/update", function(req, res){
//   console.log(req.body._id);
//   let id = req.body._id;
//   MyModel.deleteOne({
//     _id : id
//   }).then(function(req){
//     console.log('data',req.body);
   
//   })
//   .catch(function(err){
//     console.log('loi',err);
//   })
// });

app.listen(port, function () {
    console.log("tesst");
});