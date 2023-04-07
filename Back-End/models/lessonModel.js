import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Cours from "./coursModel.js";

const { DataTypes } = Sequelize;
const Lesson = db.define('lesson', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    duration: {
      type: DataTypes.FLOAT 
    },
    description: {
      type: DataTypes.STRING(500)
    },
    title: {
      type: DataTypes.STRING(100)
    },
    percent: {
      type: DataTypes.DOUBLE
    },
    filename: {
      type: DataTypes.STRING(500)
    },
    theme: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    freezeTableName: true
  });
  
Lesson.belongsTo(Cours, { foreignKey: 'theme' });  
export default Lesson;