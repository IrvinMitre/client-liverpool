// OrderUpload.js
import React, { useState } from "react";
import OrderService from "../services/orderService";

const FormFile = ({ onSuccess, onError }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        await OrderService.createOrders(file);
        onSuccess("Ordenes cargadas exitosamente");
      } catch (error) {
        onError("Por favor, selecciona un archivo valido.");
      }
    } else {
      onError("Por favor, selecciona un archivo antes de enviar.");
    }
  };

  return (
    <div className="p-8">
      <h1 className="title-upload-file mb-4">Cargar Excel de Ordenes</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput" className="block mb-2">
          Selecciona un archivo CSV:
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button type="submit" className="submit-button bg-blue-500">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormFile;
