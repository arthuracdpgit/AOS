const experience = (sequelize, DataTypes) => {
  const Experience = sequelize.define('experience', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  });

  Experience.associate = (models) => {
    Experience.belongsTo(models.User);
  };

  return Experience;
};

export default experience;