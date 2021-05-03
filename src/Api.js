import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "https://shrader.github.io/React-Bar-Menu/";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async addSnack(data) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, data);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addDrink(data) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, data);
    return result.data;
  }

}

export default SnackOrBoozeApi;
