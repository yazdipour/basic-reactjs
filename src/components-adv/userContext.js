import React from "react";

const UserContext = React.createContext("codevolution");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

// One Line
// User <UserContext.Provider/> in other classes
// export const UserContext = React.createContext("codevolution");
