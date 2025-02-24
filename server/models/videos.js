export default (sequelize, Datatypes) => {
    const videos = sequelize.define("videos", {
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

    return videos;
};
