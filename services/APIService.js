import axios from 'axios';

class APIService {
  
  async getContestDetails(id) {
    try {
      const response = await axios.get(`api/contest/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching contest details: ${error}`);
      return null;
    }
  }
  
}

export default new APIService();