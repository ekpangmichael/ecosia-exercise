import * as services from './service';

export async function getTree(req, res, next) {
  try {
    const response = await services.getTree();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
}
