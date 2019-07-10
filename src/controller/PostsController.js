import PostModel from '../../posts/postDb';

export class PostsController {
  static async updatePost(req, res) {
    try {
      const { text } = req.body;
      await PostModel.update(req.post.id, { text });
      const post = await PostModel.getById(req.post.id);

      res.status(200).json(post);
    } catch(error) {
      res.status(500).json({
        error: 'post could not be modify at this time'
      });
    }
  }

  static async removePost(req, res) {
    try {
      await PostModel.remove(req.post.id);

      res.status(200).json({
        message: 'Successful removal of post'
      });
    } catch(error) {
      res.status(500).json({
        error: 'post could not be remove at this time'
      });
    }
  }

  static async getPosts(req, res) {
    try {
      const posts = await PostModel.get();

      res.status(200).json(posts);
    } catch(error) {
      res.status(500).json({
        error: 'posts could not be fetch at this time'
      });
    }
  }
}
