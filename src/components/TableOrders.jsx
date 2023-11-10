// OrderTable.js
import React from "react";

const OrderTable = ({
  orders,
  handleUpdateOrder,
  handleDeleteOrder,
  formatDate,
}) => {
  return (
    <div>
      {orders.length > 0 ? (
        <>
          <table className="order-table">
            <thead>
              <tr>
                <th>Descripcion</th>
                <th>Fecha alta</th>
                <th>Fecha Baja</th>
                <th>Usuario</th>
                <th>Estatus</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.description}</td>
                  <td>{formatDate(order.created_at)}</td>
                  <td>{formatDate(order.down_at)}</td>
                  <td>{order.user}</td>
                  <td>{order.status}</td>
                  <td>
                    <button
                      className="order-button"
                      disabled={order.status === "Completa"}
                      onClick={() => handleUpdateOrder(order._id)}
                    >
                      Completar
                    </button>
                    <button
                      className="order-button"
                      onClick={() => handleDeleteOrder(order._id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="no-orders-message">
          No hay órdenes disponibles, considere agregar en la vista Ordenes.
        </p>
      )}
    </div>
  );
};

export default OrderTable;
