import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Calendar from "./Calendar";
import CurrentTasks from "./CurrentTasks";
import AddCard from "./AddCard";

const App = () => {
  return (
    <ChakraProvider>
      <div className="h-screen bg-[#1a202c] flex justify-around items-center">
        <Calendar/>

        <CurrentTasks/>
      </div>
    </ChakraProvider>
  );
};

export default App;
