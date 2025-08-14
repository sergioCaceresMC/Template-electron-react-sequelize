import { User } from "../models/users.js";
import { Op } from "sequelize";

//1 obtener user por id
export async function get_user(id: string) {
  return await User.findByPk(id);
}

//2 obtener todos los users
export async function get_users() {
  return await User.findAll();
}

//3 obtener todos los users entre dos fechas
export async function get_user_by_birth(from: Date, to: Date) {
  return User.findAll({
    where: {
      birth: {
        [Op.gt]: from,
        [Op.lt]: to,
      },
    },
    order: [["birth", "ASC"]],
  });
}

//4 Crear user
export async function create_user(data: any) {
  return await User.create(data);
}

//5 Borrar user
export async function delete_user_by_id(id: string) {
  return await User.destroy({
    where: {
      id: id,
    },
  });
}

//6 Actualizar user
export async function update_user_by_id(id: string, data: any) {
  let user = await User.findByPk(id);
  if (!user) return null;
  return await user.update(data);
}
