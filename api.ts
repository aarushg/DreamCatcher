import axios from 'axios';

// Define the base URL of your API server
// Consider using environment variables for different environments (development, production)
const BASE_URL = 'http://localhost:5001';

// Define TypeScript interfaces for your request and response data
interface ResponseData {
  question: string;
  answer: string;
}

interface SaveDataRequest {
  itemId: string;
  title: string;
  responses: ResponseData[];
}

interface SaveDataResponse {
  message: string;
  // Add any other properties you expect in the response
}

// Define the function to save data to the server
export const saveData = async (itemId: string, title: string, responses: ResponseData[]): Promise<SaveDataResponse> => {
  try {
    const SAVE_DATA_ENDPOINT = `${BASE_URL}/api/save-data`;

    // Make a POST request to the server to save data
    const response = await axios.post<SaveDataResponse>(SAVE_DATA_ENDPOINT, {itemId, title, responses});

    // Check if the response indicates success (customize based on your server's response format)
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Failed to save data: Server responded with status ${response.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific error
      throw new Error(`Failed to save data: ${error.message}`);
    } else {
      // Handle other types of errors
      throw new Error('An unknown error occurred while saving data');
    }
  }
};


export const registerUser = async (username: string, email: string, password: string, confirmPassword: string): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/api/register`, { username, email, password, confirmPassword });
    return response.data; // Adjust based on your API's response structure
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Registration failed: ${error.response?.data?.message || error.message}`);
    } else {
      throw new Error('An unknown error occurred during registration');
    }
  }
};
