import { User } from "../models/users.js";

export async function seed() {
  try {
    // 1. Crear usarios de prueba
    await User.findOrCreate({
      where: {
        name: "Juan Sal",
      },
      defaults: {
        name: "Juan Sal",
        birth: new Date("2001-05-12"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    });

    await User.findOrCreate({
      where: {
        name: "Claudia Quesadilla",
      },
      defaults: {
        name: "Claudia Quesadilla",
        birth: new Date("2003-09-10"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    });

    await User.findOrCreate({
      where: {
        name: "Camila Milanesa",
      },
      defaults: {
        name: "Camila Milanesa",
        birth: new Date("1995-03-02"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    });

    await User.findOrCreate({
      where: {
        name: "Carlos Drake",
      },
      defaults: {
        name: "Carlos Drake",
        birth: new Date("2002-02-11"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    });

    console.log("Seed creado exitosamente.");
  } catch (error) {
    console.error("Error en seed:", error);
  }
}
