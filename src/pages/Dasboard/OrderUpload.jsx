import React, { useState } from "react";
import OrderService from "../../services/orderService";

const OrderUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      await OrderService.createOrders(file);
    } else {
      alert("Por favor, selecciona un archivo antes de enviar.");
    }
  };

  return (
    <div className="p-8 rounded-xl">
      <h1 className="text-3xl mb-4">Cargar Excel de Órdenes</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput" className="block mb-2">
          Selecciona un archivo CSV:
        </label>
        <input
          type="file"
          id="fileInput"
          accept=".csv"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default OrderUpload;
