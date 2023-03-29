import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://chetandasa2814:RcY5OtAUZgHcqozp@cluster0.qo33est.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true }) 
  .then (() => app.listen(PORT, console.log('server running on port: ${PORT}')))
  .catch ((error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);
