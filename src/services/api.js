import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const getPetsByCategory = async (category) => {
  try {
    const response = await api.get(`pets?type=${category}`);

    return response.data;
  } catch (err) {
    console.log(err)
  }
}

export const createPet = async (pet) => {
  try {
    await api.post('pets', pet);

    return;
  } catch (err) {
    console.log(err)
  }
}
