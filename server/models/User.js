export default (sequelize, Datatypes) => {
    const User = sequelize.define("users", {
        user_name: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 40],
                    msg: "Minimum length of user_name is 3 and maximum is 40"
                },
                notEmpty: { msg: 'user_name is required' },
                notNull: { msg: 'user_name cannot be null' },
            },
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    args: true,
                    msg: "email should be in this formate dumy@gmail.com"
                },
                len: {
                    args: [3, 40],
                    msg: "Minimum length of email is 3 and maximum is 40"
                },
                notEmpty: { msg: 'email is required' },
                notNull: { msg: 'email cannot be null' },
            },
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [8, 255],
                    msg: "Minimum length of password is 8 and maximum is 25"
                },
                notEmpty: { msg: 'password is required' },
                notNull: { msg: 'password cannot be null' },
            },
        },
        userType: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 30],
                    msg: "Minimum length of userType is 3 and maximum is 30"
                },
                notEmpty: { msg: 'userType is required' },
                notNull: { msg: 'userType cannot be null' },
            },
        },
    },
        {
            underscored: true,
        }
    );

    return User;
};
