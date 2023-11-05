import React from "react";
import { Stack, Card, CardBody, Text, Flex, Image } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress"; // Make sure to import Progress from Chakra UI

const Activity = (props) => {
  const { progress, Name, icon } = props;

  return (
    <Stack direction={"row"} alignItems="center" mt={5} maxWidth={1000}>
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
      <Stack>
        <Progress
          value={progress}
          size="md"
          borderRadius="1rem"
          minW={408}
          mr={10}
        />{" "}
        {/* Set minW to match the width of CalendarProgress */}
      </Stack>
      <Text color="white" fontWeight={"bold"}>
        {progress}%
      </Text>
    </Stack>
  );
};

export default Activity;
