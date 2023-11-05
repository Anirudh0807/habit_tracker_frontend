import React from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const CalendarProgress = (props) => {
  const { Name, Days, DaysDone, icon } = props;

  let dayslen = Days.length;
  let daysdonelen = DaysDone.length;

  // Define an array to represent the days of the week
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Box>
      <Stack direction={"row"} alignItems="center" mt={5}>
        <Card
          w={40}
          h={12}
          mr={10}
          justify="center"
          bg="#2d3748"
        >
          <Flex align="center" direction={"row"}>
            <Image
              borderRadius="full"
              boxSize="30px" // Adjust the size of the image content
              bg="white"
              src={icon}
              ml={5}
              alignItems={"center"}
              justifyItems={"center"}
            />

            <CardBody>
              <Text color={"white"} fontWeight={"bold"}>
                {Name}
              </Text>
            </CardBody>
          </Flex>
        </Card>

        <Grid templateColumns="repeat(7, 1fr)" gap={10} minW={400}>
          {daysOfWeek.map((day, index) => (
            <GridItem
              key={index}
              bg={
                DaysDone.includes(day) && Days.includes(day)
                  ? "#2e75de"
                  : Days.includes(day)
                  ? "#2d3748"
                  : "transparent"
              }
              h="25px"
              w="25px"
              borderRadius={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></GridItem>
          ))}
        </Grid>

        <Text color={"white"} ml={10} fontWeight={"bold"}>
          {daysdonelen}/{dayslen}
        </Text>
      </Stack>
    </Box>
  );
};

export default CalendarProgress;
