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
    let headers = new Headers();

    const response = await fetch(`${baseURL}/pets`, {
      method: 'POST',
      body: JSON.stringify(pet),
      headers: headers,
    });

    console.log(response.json())
    return response.json();
  } catch (err) {
    console.log(err)
  }
}
