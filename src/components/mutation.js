import { useMutation, useQueryClient } from "@tanstack/react-query";

const addUser = async (newUserData) => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  });

  if (!response.ok) {
    throw new Error("Failed to add user");
  }

  return response.json();
};

export const useAddUser = () => {
  const queryClient = useQueryClient(); 

  return useMutation(addUser, {
    onSuccess: (data) => {
      console.log("User added successfully:", data);
      queryClient.invalidateQueries(["users"]); 
    },
    onError: (error) => {
      console.error("Error adding user:", error);
    },
  });
};