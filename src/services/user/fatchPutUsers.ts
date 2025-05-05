import axios from "axios";

export interface UserUpdate {
  username?: string;
  email?: string;
}

export const UpdateUser = async (id: number, user: UserUpdate): Promise<void> => {
  const url = `https://fakestoreapi.com/users/${id}`;
  try {
    await axios.put(url, user);
    console.log(`User ${id} updated`);
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};
