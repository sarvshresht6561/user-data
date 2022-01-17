module.exports = (sequelize, dataTypes) => {
  const users = sequelize.define(
    "data",
    {
      content: dataTypes.STRING,
    },
    {
      timestamps: true,
      underscored: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return users;
};
