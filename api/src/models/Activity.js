import { DataTypes } from "sequelize";

export default (sequelize) =>
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      difficulty: { type: DataTypes.INTEGER, allowNull: false },
      duration: { type: DataTypes.INTEGER },
      season: {
        type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
