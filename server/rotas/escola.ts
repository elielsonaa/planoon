import * as express from 'express';

import EscolaCtr from '../controllers/escola';
// import UserCtrl from '../controllers/user';
import Escola from '../models/escola';
// import User from './models/user';

export default function setRoutes(app) {

  const router = express.Router();

  const escolaCtrl = new EscolaCtr();
  // const userCtrl = new UserCtrl();

  // Cats
  router.route('/escola').get(escolaCtrl.getAll);
  router.route('/escola/count').get(escolaCtrl.count);
  router.route('/escola').post(escolaCtrl.insert);
  router.route('/escola/:id').get(escolaCtrl.get);
  router.route('/escola/:id').put(escolaCtrl.update);
  router.route('/escola/:id').delete(escolaCtrl.delete);

  // Users
  // router.route('/login').post(userCtrl.login);
  // router.route('/users').get(userCtrl.getAll);
  // router.route('/users/count').get(userCtrl.count);
  // router.route('/user').post(userCtrl.insert);
  // router.route('/user/:id').get(userCtrl.get);
  // router.route('/user/:id').put(userCtrl.update);
  // router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
