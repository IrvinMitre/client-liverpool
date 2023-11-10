import React, { useState, useEffect } from "react";
import OrderService from "../../services/orderService";

const Home = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const limit = 7;

  useEffect(() => {
    fetchData(offset);
  }, [offset]);

  const fetchData = async (offset) => {
    try {
      const result = await OrderService.listOrders(limit, offset);
      setOrders(result.orders);
      setCount(result.count);
    } catch (error) {
      alert("Error opteniendo la información");
    }
  };

  const handlePagination = (newOffset, pageCount) => {
    setPage(page + pageCount);
    fetchData(newOffset);
    setOffset(newOffset);
  };

  const handleUpdateOrder = async (id) => {
    try {
      await OrderService.updateOrder(id);
      fetchData(offset);
      setPage(1);
      setOffset(0);
    } catch (error) {
      alert("Error actualizando la información");
    }
  };

  const handleDeleteOrder = async (id) => {
    try {
      await OrderService.deleteOrder(id);
      fetchData(offset);
      setPage(1);
      setOffset(0);
    } catch (error) {
      alert("Error Eliminando orden");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
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
                  disabled={order.status === "completed"}
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
      <div className="paginator">
        <button
          className="paginatorButton"
          onClick={() => handlePagination(offset - limit, -1)}
          disabled={offset == 0}
        >
          Anterior
        </button>
        <span className="currentPage"> Page {page} </span>
        <button
          className="paginatorButton"
          onClick={() => handlePagination(offset + limit, 1)}
          disabled={orders.length < offset || count === limit}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
