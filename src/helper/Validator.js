import userDb from '../../users/userDb';

export class Validator {
  static async validateUserId(req, res, next) {
    try {
      const { id } = req.params;
      
      if(!Number.isInteger(Number.parseInt(id, 10))) {
        return res.status(400).json({
          message: 'Malformed ID'
        });
      }
      const user = await userDb.getById(id);
      if(user.length === 1) {
        req.user = user[0];
        next();
      } else {
        res.status(400).json({
          message: 'invalid user id'
        });
      }
    } catch(error) {
      res.status(500).json({
        error: 'Request could not be completed at this time, try again'
      });
    }
  }

  static validateUser(req, res, next) {
    if(!req.body) {
      return res.status(400).json({
        message: 'missing user data'
      });
    }
    if(!req.body.name || req.body.name.trim() === '') {
      return res.status(400).json({
        message: 'missing required name field'
      });
    }
    next();
  }

  static validatePost(req, res, next) {
    if(!req.body) {
      return res.status(400).json({
        message: 'missing post data'
      });
    }
    if(!req.body.name || req.body.name.trim() === '') {
      return res.status(400).json({
        message: 'missing required text field'
      });
    }
    next();
  }

}
