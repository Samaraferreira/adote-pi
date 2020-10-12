import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-adote-pets.herokuapp.com',
});

export const getPetsByCategory = async (category) => {
  try {
    console.log(category)
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
