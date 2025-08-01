import axios from 'axios'

const API_URL = "http://localhost:6000/api/auth"

export const register = async (userData)=>{
    try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l’inscription :', error);
    throw error;
  }
}