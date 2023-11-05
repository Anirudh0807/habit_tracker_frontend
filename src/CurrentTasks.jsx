import { Box, Circle, Divider, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TaskCard from "./TaskCard";
import cycle from "./emojis/Cycle.svg";
import gym from "./emojis/Gym.svg";
import book from "./emojis/Book.svg";
import alcohol from "./emojis/Beer.svg";

const CurrentTasks = () => {
  useEffect(() => {
    getDate();
  }, []);
  const [formattedDate, setFormattedDate] = useState("");

  const getDate = () => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = daysOfWeek[dayOfWeek];
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentMonth = monthNames[month];
    const year = currentDate.getFullYear();
    setFormattedDate(`${dayOfMonth} ${currentMonth} ${year}, ${currentDay}`);
  };

  return (
    <Box maxWidth={400}>
      <Stack spacing={2} direction="row">
        <Text color={"white"} fontSize="2xl" mr={10}>
          {formattedDate}
        </Text>

        <Circle
          size="30px"
          bg={"#1a202c"}
          color="white"
          border="1px"
          borderColor="white"
        >
          <ArrowBackIcon boxSize={4}/>
        </Circle>
        <Circle
          size="30px"
          bg={"#1a202c"}
          color="white"
          border="1px"
          borderColor="white"
        >
          <ArrowForwardIcon boxSize={4}/>
        </Circle>
      </Stack>
      <Divider />

      <TaskCard Name={"Cycling"} icon={cycle} />
      <TaskCard Name={"Gym"} icon={gym}/>
      <TaskCard Name={"Book"} icon={book}/>
      <TaskCard Name={"Alcohol"} icon={alcohol}/>
    </Box>
  );
};

export default CurrentTasks;
