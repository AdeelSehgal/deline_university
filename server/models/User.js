export default (sequelize, Datatypes) => {
    const User = sequelize.define("users", {
        user_name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 40,
                min: 3,
            },
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
                max: 40,
                min: 3,
            },
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 25,
                min: 8,
            },
        },
        userType: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 30,
                min: 3,
            },
        },
    },
    );

    return User;
};
