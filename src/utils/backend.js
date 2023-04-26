import axios from "axios";

const BASE_URL = "https://6446a60cee791e1e290561c6.mockapi.io";

export const getUsers = async (page) => {
  const response = await axios.get(`${BASE_URL}/users?page=${page}&limit=3`);
  return response.data;
};

export async function updateFollowers(userId, action) {
  const url = `${BASE_URL}/users/${userId}`;

  try {
    const response = await axios.get(url);
    const user = response.data;

    // Обновлення кількості підписників
    const updatedFollowers =
      action === "increment" ? user.folowers + 1 : user.folowers - 1;

    // Оновлення користувача на сервері
    const data = await axios.put(url, { ...user, folowers: updatedFollowers });
    return data.data;
  } catch (error) {
    console.error(error);
  }
}
