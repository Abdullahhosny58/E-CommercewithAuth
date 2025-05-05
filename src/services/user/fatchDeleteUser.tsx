import axios from "axios";

export const deleteUser = async (id: number): Promise<void> => {
    const url = `https://fakestoreapi.com/users/${id}`;
    try {
      await axios.delete(url);
      console.log(`User ${id} deleted`);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Failed to delete user");
    }
  };
  