import userDb from '../../users/userDb';
import postDb from '../../posts/postDb';

export class Validator {
  static async validateUserId(req, res, next) {
    try {
      const { id } = req.params;
      if(id) {
        const user = await userDb.getById(id);
  
        if(user && user.name) {
          req.user = user;
          next();
        } else {
          res.status(400).json({
            message: 'invalid user id'
          });
        }
        return;
      }
      next();
    } catch(error) {
      res.status(500).json({
        error: 'Request could not be completed at this time, try again'
      });
    }
  }

  static async validatePostId(req, res, next) {
    try {
      const { id } = req.params;
      if(id) {
        const post = await postDb.getById(id);
  
        if(post && post.text) {
          req.post = post;
          next();
        } else {
          res.status(400).json({
            message: 'invalid post id'
          });
        }
        return;
      }
      next();
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
    if(!req.body.text || req.body.text.trim() === '') {
      return res.status(400).json({
        message: 'missing required text field'
      });
    }
    next();
  }

}
