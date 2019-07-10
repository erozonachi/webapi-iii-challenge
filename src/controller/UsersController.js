import UserModel from '../../users/userDb';
import PostModel from '../../posts/postDb';

export class UsersController {
  static async insertUser(req, res) {
    try {
      const { name } = req.body;
      const user = await UserModel.insert({ name });

      res.status(201).json(user);
    } catch(error) {
      res.status(500).json({
        error: 'user could not be save at this time'
      });
    }
  }

  static async insertUserPost(req, res) {
    try {
      const { text } = req.body;
      const post = await PostModel.insert({ text, user_id: req.user.id });

      res.status(201).json(post);
    } catch(error) {
      res.status(500).json({
        error: 'post could not be save at this time'
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const { name } = req.body;
      await UserModel.update(req.user.id, { name });
      const user = await UserModel.getById(req.user.id);

      res.status(200).json(user);
    } catch(error) {
      res.status(500).json({
        error: 'user could not be modify at this time'
      });
    }
  }

  static async removeUser(req, res) {
    try {
      await UserModel.remove(req.user.id);

      res.status(200).json({
        message: 'Successful removal of user'
      });
    } catch(error) {
      res.status(500).json({
        error: 'user could not be remove at this time'
      });
    }
  }

  static async getUsers(req, res) {
    try {
      const users = await UserModel.get();

      res.status(200).json(users);
    } catch(error) {
      res.status(500).json({
        error: 'users could not be fetch at this time'
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserModel.getById(req.user.id);

      res.status(200).json(user);
    } catch(error) {
      res.status(500).json({
        error: 'user with the specified ID, could not be fetch at this time'
      });
    }
  }

  static async getUserPosts(req, res) {
    try {
      const posts = await UserModel.getUserPosts(req.user.id);

      res.status(200).json(posts);
    } catch(error) {
      res.status(500).json({
        error: 'posts for the user with specified ID, could not be fetch at this time'
      });
    }
  }
}
