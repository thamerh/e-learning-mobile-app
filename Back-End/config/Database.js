import {Sequelize} from "sequelize";

const db = new Sequelize('pfe','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;