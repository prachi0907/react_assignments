import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return <div>{/* Code here */}
   <Navbar/>
   <div>
   <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={<Users />}
          />
          <Route
            path="/users/:id"
            element={
              <PrivateRoute>
                <UsersPage />
              </PrivateRoute>
            }
          />
        </Routes>
   </div>
  </div>;
};

export default Home;
