import express from 'express';
import bodyParser from 'body-parser';
import {createConnection} from "typeorm";
import {AccountController} from './routes/AccountRoutes';
import {UserController} from './routes/UserRoutes';
import {SetupController} from './routes/SetupRoutes';
import {commonErrorHandler} from './services/CommonErrorHandler';
import helmet, {Helmet} from "helmet";
import cors from "cors";


createConnection().then(async connection => {

  const app = express();
  app.use(bodyParser.json());
  app.use(cors());
  const port = 3000;
  
  app.use(helmet());

  app.use('/api',AccountController);
  app.use('/api',UserController);
  app.use('/api', SetupController);
  app.get('*', (req, res) => {
    console.log("unhandled: ", req.url);
    res.status(404).send('no').end();
  } );

  
  app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

});

