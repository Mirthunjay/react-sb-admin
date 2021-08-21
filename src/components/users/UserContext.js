import React, { useState } from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([
    {
      username: "Mirthun",
      position: "Full Stack Developer",
      office: "Microsoft",
      age: "19",
      startdate: "2021/10/05",
      salary: "$100,800",
    },
    {
      username: "Nandha Kumar",
      position: "BackEnd Developer",
      office: "Google",
      age: "22",
      startdate: "2021/09/08",
      salary: "$200,750",
    },
    {
      username: "Suriyaraj",
      position: "Front-End Developer",
      office: "Amazon",
      age: "20",
      startdate: "2021/06/21",
      salary: "$114,000",
    },
  ]);
  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};
