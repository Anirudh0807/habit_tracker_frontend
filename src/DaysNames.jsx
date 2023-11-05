import { Card, CardBody, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import React from "react";

const DaysNames = (props) => {
  const {color} = props;
  const daysForTop = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <Stack direction={"row"} alignItems="center" mt={2} maxWidth={1000}>
      <Card
        w={40}
        h={12}
        mr={10}
        alignItems="center"
        justify="center"
        bg="#1a202c"
        boxShadow={"none"}
      >
        <CardBody>
          <Text color={"#1a202c"} fontWeight={"bold"}>
            Anirudh
          </Text>
        </CardBody>
      </Card>

      <Grid templateColumns="repeat(7, 1fr)" gap={10}>

        {daysForTop.map((day, index) => (
          <GridItem
            key={index}
            h="25px"
            w="25px"
            borderRadius={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text color={color}>{day}</Text>
          </GridItem>
        ))}
      </Grid>

      <Text color={"#1a202c"} ml={10}>
        1/7
      </Text>
    </Stack>
  );
};

export default DaysNames;
