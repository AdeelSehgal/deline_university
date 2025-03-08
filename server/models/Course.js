export default (sequelize, Datatypes) => {
    const Course = sequelize.define("courses", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 20],
                    msg: "Minimum length of user_name is 3 and maximum is 20"
                },
                notEmpty: { msg: 'title is required' },
                notNull: { msg: 'title cannot be null' },
            },
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "Minimum length of description is 3 and maximum is 25"
                },
                notEmpty: { msg: 'description is required' },
                notNull: { msg: 'description cannot be null' },
            },
        },
        image: {
            type: Datatypes.TEXT('long'),
            allowNull: false,
            validate: {
                notEmpty: { msg: 'image url is required' },
                notNull: { msg: 'image url cannot be null' },
            },
        },
        type: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 20],
                    msg: "Minimum length of type is 3 and type is 20"
                },
                notEmpty: { msg: 'type is required' },
                notNull: { msg: 'type cannot be null' },
            },
        },
    },
        {
            underscored: true,
        }
    );

    Course.associate = function (models) {
        Course.hasMany(models.videos, { foreignKey: {name:'course_id', allowNull: false } }, { onDelete: 'CASCADE' })
    };

    return Course;
};
