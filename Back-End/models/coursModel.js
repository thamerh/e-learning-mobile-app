import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Cours = db.define('cours', {
    theme: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    nbLessons: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.INTEGER
    }, 
    duration: {
      type: DataTypes.DOUBLE
    },
  }, {
    freezeTableName: true,
    timestamps: false
  });
export default Cours;