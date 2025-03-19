import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fetch from "./components/fetch";
import UserForm from "./components/post";
import Update from "./components/update";
import Coaches from "./components/Coaches";
import Bookings from "./components/Bookings";
import Home from "./components/home";



// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
   
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
         <Route path='/fetchapp' element={<Home/>}/>
         <Route path='/users' element={<Fetch/>}/>
         <Route path='/addUser' element={<UserForm/>}/>
         <Route path="/updateUser/:id" element={<Update/>} />
         <Route path="/coaches" element={<Coaches/>} />
         <Route path="/booking" element={<Bookings/>} />
        </Routes>
        
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;