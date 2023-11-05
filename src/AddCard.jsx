import {
  Box,
  Button,
  Center,
  Checkbox,
  CloseButton,
  FormControl,
  FormLabel,
  Grid,
  Image,
  Input,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Pick from "./emojis/Pick.svg";

const AddCard = ({ onClose }) => {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleCheckboxChange = (day) => {
    setDays((prevDays) => {
      if (prevDays.includes(day)) {
        // If the day is already selected, remove it from the array
        return prevDays.filter((d) => d !== day);
      } else {
        // If the day is not selected, add it to the array
        return [...prevDays, day];
      }
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    console.log(days);
  };

  return (
    <Box bg={"#1a202c"} borderRadius="md" pr={100} pl={100} pt={10} pb={10}>
      <div>
        <CloseButton // Close button added here
          position="absolute"
          right="10px"
          top="10px"
          onClick={onClose}
          color={"white"}
        />

        <Text color={"white"} fontSize={"3xl"} textAlign="center" m={4}>
          New Habit
        </Text>

        <Text color={"white"} m={4}>
          Pick Emoji*
        </Text>

        <Center>
          <Image
            borderRadius="full"
            boxSize="50px" // Adjust the size of the image content
            bg="white"
            src={Pick}
            ml={5}
            alignItems={"center"}
            justifyItems={"center"}
          />
        </Center>

        <div>
          <Text color={"white"} ml={4}>
            Habit Name*
          </Text>

          <Input
            type="String"
            placeholder="Enter the Name"
            value={name}
            onChange={handleNameChange}
            color={"white"}
            m={4}
          />

          <Text fontSize={"lg"} color={"white"} ml={4}>
            Days per week
          </Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={4} m={4}>
            {daysOfWeek.map((day, index) => (
              <label key={index} className="inline-flex items-center">
                <Checkbox
                  colorScheme="teal"
                  size="lg"
                  isChecked={days.includes(day)}
                  onChange={() => handleCheckboxChange(day)}
                >
                  <Text color={"white"}>{day}</Text>
                </Checkbox>
              </label>
            ))}
          </Grid>

          <Text color={"white"} mt={4}>
            Habit Type
          </Text>

          <FormControl display="flex" alignItems="center">
            <Text color={"white"} m={2}>
              Do
            </Text>
            <Switch id="email-alerts" />
            <Text color={"white"} m={2}>
              Dont
            </Text>
          </FormControl>

          <Box textAlign="center">
            <Button
              color="#2b6cb0"
              colorScheme="#1a202c"
              border="1px"
              borderColor="#2b6cb0"
              onClick={onClose}
              m={2}
            >
              Cancel
            </Button>

            <Button colorScheme="blue" m={3} onClick={handleClick}>
              Save
            </Button>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default AddCard;
