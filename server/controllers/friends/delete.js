const { friends } = require("../../models");
require("dotenv").config();

module.exports = {
    removeFriend: async(req,res) =>{
        const userId = req.params.id
        const friendId = req.params.friend
        try {
            const result = await friends.destroy({
                where:{
                    user_id: userId,
                    friend_id:friendId
                }
            })
            res.status(200).send({
                message:"success remove friend",
                result
            })
        } catch (error) {
            res.status(400).send(error)
        }
    }
};