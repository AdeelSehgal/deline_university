export default (sequelize, Datatypes) => {
    const Video = sequelize.define("videos", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                max: 40,
                min: 3,
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
    },
    );

    // Video.associate = function (models) {
    //     Video.belongsTo(models.courses, { onDelete: 'CASCADE' })
    // };

    return Video;
};
