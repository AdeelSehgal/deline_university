export default (sequelize, Datatypes) => {
    const courses = sequelize.define("courses", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        image: {
            type: Datatypes.TEXT('long'),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        type: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    return courses;
};
