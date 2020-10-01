const baseURL = 'https://api-adote-pets.herokuapp.com';

export const getPetsByCategory = async (category) => {
  try {
    const response = await fetch(`${baseURL}/pets?type=${category}`);

    return response.json();
  } catch (err) {
    console.log(err)
  }
}
