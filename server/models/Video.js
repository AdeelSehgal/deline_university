export default (sequelize, Datatypes) => {
    const Video = sequelize.define("videos", {
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 40],
                    msg: "Minimum length of title is 3 and maximum is 40"
                },
                notEmpty: { msg: 'title is required' },
                notNull: { msg: 'title cannot be null' },
            },
        },
        link: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'title is required' },
                notNull: { msg: 'title cannot be null' },
                isUrl: { msg: 'link must be url' }
            },
        },
    },
        {
            underscored: true,
        }
    );

    // Video.associate = function (models) {
    //     Video.belongsTo(models.courses, { onDelete: 'CASCADE' })
    // };

    return Video;
};
