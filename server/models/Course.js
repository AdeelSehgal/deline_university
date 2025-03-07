export default (sequelize, Datatypes) => {
    const Course = sequelize.define("courses", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 20,
                min: 3,
            },
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 255,
                min: 3,
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
                max: 20,
                min: 3,
            },
        },
    },
    );

    Course.associate = function (models) {
        Course.hasMany(models.videos, { foreignKey: {name:"course_id", allowNull: false } }, { onDelete: 'CASCADE' })
    };

    return Course;
};
