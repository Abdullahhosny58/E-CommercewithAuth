import axios from "axios";

export const postSignUp = async (data) => {
  try {
    const response = await axios.post(`/api/register`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response?.data;
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error;
  }
};
