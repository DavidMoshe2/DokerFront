import axios from "axios";

const getFakeUser = async () => {
  const url = "http://localhost:3000/api/v1/fakeUser";

  try {
    const { data } = await axios.get(`${url}`);
    if (!data) throw new Error("error in fetch data posts");
    return data
  } catch (error) {
    console.error(error);
  }
};

export default getFakeUser;
