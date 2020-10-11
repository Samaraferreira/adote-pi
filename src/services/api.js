const baseURL = 'https://api-adote-pets.herokuapp.com';

export const getPetsByCategory = async (category) => {
  try {
    const response = await fetch(`${baseURL}/pets?type=${category}`);

    return response.json();
  } catch (err) {
    console.log(err)
  }
}

export const createPet = async (pet) => {
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${baseURL}/pets`, {
      method: 'post',
      body: JSON.stringify(pet)
    });

    console.log(response.json())
    return response.json();
  } catch (err) {
    console.log(err)
  }
}
