import React from "react";
import Calendar from "../Calendar";
import CurrentTasks from "../CurrentTasks";
import { Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  if (token === null) {
    navigate("/login");
  }

  return (
    <Flex
      h="100vh"
      bg="#1a202c"
      justifyContent="center"
      alignItems="center"
      gap={60}
    >
      <Calendar />
      <CurrentTasks />
    </Flex>
  );
};

export default HomePage;
