import type { NextApiRequest, NextApiResponse } from "next";
import { GetFfernFriendResponse, UpdateFfernFriendsRequest, UpdateFfernFriendsErrorResponse } from '@/types/types';

const BASE_URL = "https://ffern-custodian.vercel.app/api/ffern-friends/";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetFfernFriendResponse | UpdateFfernFriendsErrorResponse>
) {
  const { friendId } = req.query;

  if (req.method === "GET") {
    try {
      const response = await fetch(`${BASE_URL}${friendId}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('ffern-tech-test:iloveauthentication'),
        },
      });

      if (!response.ok) {
        return res.status(response.status).json({ error: 'Failed to fetch friend data', message: 'Unable to retrieve friend details' });
      }

      const data: GetFfernFriendResponse = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.log("🚀🚀🚀🚀🚀🚀 ~ error:", error);
      return res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong on the server' });
    }
  } else if (req.method === "POST") {
    const data: UpdateFfernFriendsRequest = req.body;

    try {
      const response = await fetch(`${BASE_URL}${friendId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("ffern-tech-test:iloveauthentication"),
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return res.status(response.status).json({ error: errorData.error || "Failed to update friend data", message: errorData.message || "Unable to update friend details" });
      }

      const updatedData = await response.json();
      return res.status(200).json(updatedData);
    } catch (error) {
      console.log("🚀🚀🚀🚀🚀🚀 ~ error:", error);
      return res.status(500).json({ error: 'Internal Server Error', message: 'Something went wrong on the server' });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed`, message: "Please use a valid HTTP method" });
  }
}
