import axios from "axios";

const BASE_URL = "http://20.244.56.144/test";

// Register the company
export const registerCompany = async () => {
  const response = await axios.post(`${BASE_URL}/register`, {
    companyName: "goMart",
    ownerName: "Kushagra",
    rollNo: "220399",
    ownerEmail: "kushagra.gangwar.22cse@bmu.edu.in",
    accessCode: "PRoJlR",
  });
  return response.data;
};

// Get authorization token
export const getAuthToken = async (clientID, clientSecret) => {
  const response = await axios.post(`${BASE_URL}/auth`, {
    companyName: "goMart",
    clientID,
    clientSecret,
    ownerName: "Kushagra",
    ownerEmail: "kushagra.gangwar.22cse@bmu.edu.in",
    rollNo: "220399",
  });
  return response.data;
};

// Fetch users
export const fetchUsers = async (token) => {
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Fetch posts by user ID
export const fetchPostsByUser = async (userId, token) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Fetch comments by post ID
export const fetchCommentsByPost = async (postId, token) => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};