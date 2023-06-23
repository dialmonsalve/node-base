import express, { Application } from 'express';
import cors from 'cors';
import router from '../routes/users';

class Server {

  private app: Application;
  private port: string | undefined;
  private usersPath: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users' ;

    //Middleware
    this.middleware();


    //App Routs
    this.routes()
  }

  middleware() {

    // Cors
    this.app.use(cors());

    // Read and Parse the body
    this.app.use(express.json())

    this.app.use(express.static('src/public'));
  }

  routes() {

    this.app.use(this.usersPath, router)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Running in port', this.port);

    })
  }

}


export default Server