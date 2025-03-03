export default (sequelize, Datatypes) => {
    const Video = sequelize.define("video", {
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
                isUrl: true,
            },
        },
    });

    Video.associate = function (models) {
        Video.belongsTo(models.course, { onDelete: 'CASCADE' })
    };

    return Video;
};
