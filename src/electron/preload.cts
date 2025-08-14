import { ipcRenderer } from "electron";

const electron = require("electron");

// Exponer funciones al renderer
electron.contextBridge.exposeInMainWorld("electron", {
  //Usuario
  obtenerUsuario: async () => await ipcRenderer.invoke("obtenerusuarios"),

  actualizarUsuario: async (id: string, data: any) =>
    await ipcRenderer.invoke("actualizarusuario", { id, data }),
});
