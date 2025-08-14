import { User } from "./users.js";

export function make_relations() {
  // Ejemplo relaciones de usuarios n a n
  User.hasMany(User, {
    foreignKey: "parentUserId",
    as: "familiars",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  });

  User.belongsTo(User, {
    foreignKey: "parentUserId",
    as: "parentUser",
  });
}
