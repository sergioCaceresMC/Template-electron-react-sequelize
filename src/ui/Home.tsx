import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  description: string;
  birth: Date;
};

export function Home() {
  const [data, setData] = useState<[User]>([
    {
      id: "",
      name: "",
      birth: new Date(),
      description: "",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //@ts-ignore
        const dfetch = await window.electron.obtenerUsuario();
        console.log(dfetch);
        setData(dfetch);
      } catch (error) {
        console.error("Error al obtener datos de usuarios:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center max-w-2xl mx-auto">
        <h1>Electron template</h1>

        <h2 className="mt-10 text-2xl">Usuarios</h2>

        <p className="mb-10">
          Este es un ejemplo de captura de datos desde electron.
        </p>

        <table className="w-full p-10 text-left whitespace-nowrap bg-gray-800">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4">Nombre</th>
              <th className="p-4">Fecha de nacimiento</th>
              <th className="p-4">Descripción</th>
            </tr>
          </thead>
          <tbody className="text-left">
            {data.map((user) => (
              <tr key={user.id}>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.birth.toDateString()}</td>
                <td className="p-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-sm">
                  {user.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a href="https://github.com/sergioCaceresMC/Template-electron-react-sequelize.git">
        <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Ir a repositorio...
        </button>
      </a>
    </>
  );
}
