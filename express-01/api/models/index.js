import Sequelize from "sequelize";
import getUserModel from "./user";
import getMessageModel from "./message";
import getExperienceModel from "./experience";
import getTarefaModel from "./tarefa";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});

const models = {
  User: getUserModel(sequelize, Sequelize),
  Message: getMessageModel(sequelize, Sequelize),
  Experience: getExperienceModel(sequelize, Sequelize),
  Tarefa: getTarefaModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;