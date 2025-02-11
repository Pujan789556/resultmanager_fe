import { Api } from './base';

export const getStudents = async () => {
  try {
    const response = await Api.get(`/api/students`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addStudent = async (studentData) => {
  try {
    const response = await Api.post(`/api/students`, studentData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
