import React, { useState } from "react";
import FormFile from "../../components/FormFile";

const OrderUpload = () => {
  const handleUploadSuccess = (message) => {
    alert(message);
  };

  const handleUploadError = (errorMessage) => {
    alert(errorMessage);
  };

  return (
    <div>
      <FormFile onSuccess={handleUploadSuccess} onError={handleUploadError} />
    </div>
  );
};

export default OrderUpload;
