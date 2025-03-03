export default (sequelize, Datatypes) => {
    const Course = sequelize.define("course", {
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

    Course.associate = function (models) {
        Course.hasMany(models.video, { foreignKey: { allowNull: false } }, { onDelete: 'CASCADE' })
    };

    return Course;
};
