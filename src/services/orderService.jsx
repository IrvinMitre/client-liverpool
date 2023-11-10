import axios from "axios";

const url = "http://localhost:8002/v0/";

const OrderService = {
  async updateOrder(id) {
    const favoriteResponse = await axios.post(`${url}orders/update`, {
      id,
    });
    return favoriteResponse.data;
  },

  async deleteOrder(id) {
    const favoriteResponse = await axios.post(`${url}orders/delete`, {
      id,
    });
    return favoriteResponse.data;
  },

  async createOrders(file) {
    const formData = new FormData();
    formData.append("file", file);
    await axios.post(`${url}orders`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async listOrders(limit, offset) {
    const params = {
      limit,
      offset,
    };

    const orders = await axios.get(`${url}orders`, {
      params,
    });
    return orders.data;
  }
};

export default OrderService;
