export default (sequelize, Datatypes) => {
    const Videos = sequelize.define("Videos", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        link: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    });

    Videos.associate = function (models) {
        Videos.belongsTo(models.Courses, { onDelete: 'CASCADE' })
    };

    return Videos;
};
