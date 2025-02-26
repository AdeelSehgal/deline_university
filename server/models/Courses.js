export default (sequelize, Datatypes) => {
    const Courses = sequelize.define("Courses", {
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

    Courses.associate = function (models) {
        Courses.hasMany(models.Videos, { foreignKey: { allowNull: false } }, { onDelete: 'CASCADE' })
    };

    return Courses;
};
