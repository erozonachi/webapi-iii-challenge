import userDb from '../../users/userDb';

export class Validator {
  static async validateUserId(req, res, next) {
    try {
      const { id } = req.params;
      
      if(!Number.isInteger(Number.parseInt(id, 10))) {
        res.status(400).json({
          message: 'Malformed ID'
        });
        return;
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
}
