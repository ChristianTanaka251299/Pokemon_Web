const { sequelize } = require("../../models");
require("dotenv").config();

module.exports = {
    getUserFriend: async (req, res) => {
        const id = req.params.id;
    
        try {
            const result = await sequelize.query(
                `SELECT x.*, y.*
                 FROM friends x
                 LEFT JOIN users y ON x.friend_id = y.id
                 WHERE x.user_id = :userId AND x.deletedAt IS NULL`,
                {
                    replacements: { userId: id },
                    type: sequelize.QueryTypes.SELECT
                }
            );
            
            res.status(200).send({
                message: "Success get friend",
                result
            });
        } catch (error) {
            res.status(400).send({
                message: "There's an error",
                error
            });
        }
    },
};
