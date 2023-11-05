import { Box, Circle, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import TaskCard from "./TaskCard";
import cycle from "./emojis/Cycle.svg";
import gym from "./emojis/Gym.svg";
import book from "./emojis/Book.svg";
import alcohol from "./emojis/Beer.svg";

const CurrentTasks = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    updateFormattedDate(currentDate);
  }, [currentDate]);

  const getFormattedDate = (date) => {
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const suffix =
      day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";

    return `${day}${suffix} ${month} ${year}, ${dayOfWeek}`;
  };

  const updateFormattedDate = (date) => {
    const formattedDate = getFormattedDate(date);
    setFormattedDate(formattedDate);
  };

  const increaseDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const decreaseDate = () => {
    const previousDate = new Date(currentDate);
    previousDate.setDate(previousDate.getDate() - 1);
    setCurrentDate(previousDate);
  };

  return (
    <Box minWidth={350}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text color={"white"} fontSize="2xl">
          {formattedDate}
        </Text>
        <Stack direction="row">
          <Circle
            size="30px"
            bg={"#1a202c"}
            color="white"
            border="1px"
            borderColor="white"
            onClick={decreaseDate}
          >
            <ArrowBackIcon boxSize={4} />
          </Circle>
          <Circle
            size="30px"
            bg={"#1a202c"}
            color="white"
            border="1px"
            borderColor="white"
            onClick={increaseDate}
          >
            <ArrowForwardIcon boxSize={4} />
          </Circle>
        </Stack>
      </Flex>
      <Divider />

      <TaskCard Name={"Cycling"} icon={cycle} />
      <TaskCard Name={"Gym"} icon={gym} />
      <TaskCard Name={"Book"} icon={book} />
      <TaskCard Name={"Alcohol"} icon={alcohol} />
    </Box>
  );
};

export default CurrentTasks;
