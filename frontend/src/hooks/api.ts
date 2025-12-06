//stored shared API logic

export const API_URL = "https://agonus-backend-45256917921.us-west1.run.app";

export function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function getDefaultHeaders(): Record<string, string> {
  return {
    "ngrok-skip-browser-warning": "true",
  };
}

export function getAllHeaders(): Record<string, string> {
  return {
    ...getDefaultHeaders(),
    ...getAuthHeaders(),
  };
}
