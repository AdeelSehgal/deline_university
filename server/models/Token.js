export default (sequelize, Datatypes) => {
    const token = sequelize.define("tokens", {
        refreshToken: {
            type: Datatypes.STRING,
            allowNull: false,
        },
    },
        {
            underscored: true,
        }
    );

    return token;
};
