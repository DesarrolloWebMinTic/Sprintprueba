import { useState, useEffect } from "react";
import useVentas from "../../hooks/useVenta";

import Navbar from "../../components/Navbar";
import FilaVenta from "./FilaVenta";

const ListaVentas = () => {
  const { ventas } = useVentas();
  const [verListaVenta, setVerListaVenta] = useState(false);

  useEffect(() => setVerListaVenta(true), []);

  return (
    <>
      <Navbar texto="Productos" ruta="" verCompras={verListaVenta} />
      <div className=" w-full h-5/6 ">
        <div className="w-full flex flex-col mt-24 overflow-hidden">
          <h1 className="font-bold text-3xl uppercase text-center w-full mx-auto">
            Lista de tus <span className="text-red-400">pedidos</span>
          </h1>
          <div className="p-4 mx-auto w-5/6 sm:px-9 sm:w-2/3 mt-8 shadow-md border-2 h-3/4 overflow-hidden">
            <div className="my-5 ">
              <table className="table-fixed mx-auto w-full">
                <thead>
                  <tr>
                    <th className="w-24">
                      <span className="text-red-400 uppercase text-xl">ID</span>
                    </th>
                    <th className="w-24">
                      <span className="text-red-400 uppercase text-xl">
                        Cliente
                      </span>
                    </th>
                    <th className="w-24">
                      <span className="text-red-400 uppercase text-xl">
                        Fecha del Pedido
                      </span>
                    </th>
                    <th className="w-24 m">
                      <span className="text-red-400 uppercase text-xl">
                        Estado
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <FilaVenta />
                  {ventas.length ? (
                    <>
                      {ventas.map((venta) => (
                        <FilaVenta key={venta._id} venta={venta} />
                      ))}
                    </>
                  ) : (
                    <p className="mt-10 shadow-lg w-full text-center p-5 uppercase font-bold text-2xl">
                      No hay Productos
                    </p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaVentas;
