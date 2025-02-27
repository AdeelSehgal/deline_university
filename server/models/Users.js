export default (sequelize, Datatypes) => {
    const Users = sequelize.define("Users", {
        userName: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        userType: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return Users;
};
