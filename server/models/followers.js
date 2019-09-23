module.exports = (sequelize, Sequelize) => {
    return sequelize.define('followers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },

            follower: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'followers'
        });
};
