import { Api } from './base';

export const signUp = async (userData) => {
  try {
    const response = await Api.post(`auth/signup`, userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    alert(response.data.message); // Success message
    return response.data;
  } catch (error) {
    alert(error.response?.data?.message || 'Signup Failed!'); // Show API error message
  }
};

export const login = async (loginData) => {
  try {
    const response = await Api.post(`auth/login`, loginData, {
      headers: { 'Content-Type': 'application/json' },
    });
    alert(response.data.message); // Success message
    return response.data;
  } catch (error) {
    alert(error.response?.data?.message || 'Login Failed!'); // Show API error message
  }
};
