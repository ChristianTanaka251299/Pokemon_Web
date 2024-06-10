const { friends } = require("../../models");
require("dotenv").config();

module.exports = {
    addFriend: async (req, res) => {
        const id = req.params.id;
        const friendId = req.params.friendId;
    
        try {
          const [result, created] = await friends.findOrCreate({
            where: {
              user_id: id,
              friend_id: friendId
            },
            defaults: {
              user_id: id,
              friend_id: friendId
            }
          });
    
          if (!created) {
            return res.status(409).send({
              message: "Friendship already exists."
            });
          }
    
          res.status(201).send({
            message: "Friend added successfully.",
            result
          });
        } catch (error) {
          res.status(500).send({
            message: "An error occurred while adding friend.",
            error: error.message
          });
          console.log(error);
        }
      },

};
