import { errorMessage } from 'iyasunday';
import { ERROR } from '../utils/constant';
import config from '../config/index';
import Tree from '../modules/tree/routes';

export default app => {
  //const apiVersion = '/api/' + config.API_VERSION;
  app.use(Tree);

  app.use((err, req, res, next) => {
    if (err) {
      let message;
      if (err.errors && err.errors[0].messages[0]) {
        message = err.errors[0].messages[0];
      } else if (err.message) {
        message = err.message;
      } else if (typeof err === 'string') {
        message = err;
      } else {
        message = 'Something went wrong';
      }
      res.status(400).json(errorMessage(message, ERROR.VALIDATION_ERROR));
    } else {
      res.status(404).json({ message: 'Requested route not found' });
    }
  });
};