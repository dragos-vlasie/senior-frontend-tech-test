// pages/ffern-friend.tsx

import { useQuery } from "@tanstack/react-query";
import { fetchFfernFriend } from "@/utils/api";
import { GetFfernFriendResponse } from "@/types/types";
import Layout from "@/components/Layout";

const FfernFriendPage = () => {
  const { data, error, isLoading } = useQuery<GetFfernFriendResponse, Error>({
    queryKey: ['ffernFriend', 'siobhan-1234'],  
    queryFn: () => fetchFfernFriend('siobhan-1234'), 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log("🚀🚀🚀🚀🚀🚀 ~ data:", data)
  return (
    <Layout>
      <div className="text-center mt-48">
        <h1>{data?.firstName} {data?.lastName}</h1>
        <p>{data?.addressLineOne}</p>
      </div>
    </Layout>
  );
};

export default FfernFriendPage;
