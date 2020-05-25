import * as services from './service';

export async function healthCheck(req, res, next) {
  try {
    const response = await services.healthCheck();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}