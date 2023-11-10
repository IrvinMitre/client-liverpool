// Home.js
import React, { useState, useEffect } from "react";
import OrderService from "../../services/orderService";
import TableOrders from "../../components/TableOrders";
import Paginator from "../../components/Paginator";

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
      alert("Error obteniendo la información");
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
      alert("Error eliminando orden");
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
      <TableOrders
        orders={orders}
        handleUpdateOrder={handleUpdateOrder}
        handleDeleteOrder={handleDeleteOrder}
        formatDate={formatDate}
      />
      <Paginator
        handlePagination={handlePagination}
        offset={offset}
        page={page}
        limit={limit}
        count={count}
      />
    </div>
  );
};

export default Home;
