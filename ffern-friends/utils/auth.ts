// utils/auth.ts

const username = "ffern-tech-test";
const password = "iloveauthentication";

// Function to create Basic Authentication headers
export const createAuthHeaders = () => {
  const token = Buffer.from(`${username}:${password}`).toString("base64");
  return {
    Authorization: `Basic ${token}`,
  };
};
