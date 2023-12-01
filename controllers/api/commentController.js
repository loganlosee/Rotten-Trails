const { Comment } = require('../../models/comment');

const commentController = {
  createComment: async (req, res) => {
    try {
      // Assuming you have the trailId in the request body or parameters
      const { trailId, text } = req.body;

      // You might want to add some validation for trailId and text

      // Create the comment
      const comment = await Comment.create({
        trailId,
        text,
        // You can also associate comments with users if you have a user model
        // userId: req.user.id,
      });

      // Optionally, you can send back the created comment as a response
      res.status(201).json({ comment });
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).send('Internal Server Error');
    }
  },

  // You might have other comment-related methods here
  // ...

};

module.exports = commentController;
