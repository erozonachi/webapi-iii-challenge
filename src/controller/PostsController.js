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
}
