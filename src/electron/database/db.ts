import { Sequelize } from "sequelize";
import path from "path";
import { app } from "electron";

const route: string = path.join(
  app.getAppPath(),
  "/dist-database/database.sqlite"
);

// Diagrama de conexión para sqlite. Se puede modificar para usar otra DB.
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: route,
});
