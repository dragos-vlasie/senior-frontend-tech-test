import { GetFfernFriendResponse, UpdateFfernFriendsRequest } from '@/types/types';

export const fetchFfernFriend = async (friendId: string): Promise<GetFfernFriendResponse> => {
  const response = await fetch(`/api/ffern-friends/${friendId}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};

export const updateFfernFriend = async (id: string, data: UpdateFfernFriendsRequest) => {
  const response = await fetch(`/api/ffern-friends/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to update friend data");
  }

  return response.json();
};
