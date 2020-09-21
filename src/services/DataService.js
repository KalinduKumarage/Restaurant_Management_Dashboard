import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/retrieveItems");
  }

  get(itemName) {
    return http.get(`/retrieveItems/${itemName}`);
  }

  create(data) {
    return http.post("/addItems", data);
  }

  update(id, data) {
    return http.put(`/updateItems/${id}`, data);
  }

  delete(id) {
    return http.delete(`/deleteItem/${id}`);
  }

  deleteAll() {
    return http.delete(`/retrieveItems`);
  }

  addEmployeeChef(data) {
    return http.post("/addEmployee/chef", data)
  }

  addEmployeeInvManager(data) {
    return http.post("/addEmployee/InventoryManager", data)
  }

  addEmployeeRestManager(data) {
    return http.post("/addEmployee/RestaurantManager", data)
  }

  addEmployeeCashier(data) {
    return http.post("/addEmployee/cashier", data)
  }

}

export default new DataService();