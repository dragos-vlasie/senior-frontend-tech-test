export type GetFfernFriendResponse = {
    id: string;
    firstName?: string;
    lastName?: string;
    addressLineOne?: string;
    addressLineTwo?: string;
    city?: string;
    postcode?: string;
    stateOrCounty?: string;
    country?: "US" | "NL" | "GB";
    subscribedAt?: number; // UNIX timestamp
    createdAt: number; // UNIX timestamp
    updatedAt?: number; // UNIX timestamp
  };
  

  export type UpdateFfernFriendsRequest = {
    firstName: string;
    lastName: string;
    addressLineOne: string;
    addressLineTwo?: string; // Optional field
    city: string;
    postcode: string;
    stateOrCounty: string;
    country: "US" | "NL" | "GB" | ""; 
  };

  
  export type UpdateFfernFriendsErrorResponse = {
    error: string; // A short error code or identifier
    message: string; // A detailed error message
  };
  