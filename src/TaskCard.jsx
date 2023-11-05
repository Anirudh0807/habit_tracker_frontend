import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Circle,
  Grid,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TaskCard = (props) => {
  const { Name, icon } = props;

  return (
    <Box mt={3}>
      <Card bg="#2d3748">
        <Grid templateColumns="auto 1fr auto" alignItems="center">
          
            <Image
              borderRadius="full"
              boxSize="50px" // Adjust the size of the image content
              bg="white"
              src={icon}
              alt="Dan Abramov"
              ml={5}
            />
          <CardBody>
            <Text
              color="white"
              textAlign="center"
              fontWeight="bold"
              fontSize="xl"
            >
              {Name}
            </Text>
          </CardBody>
          <Checkbox bg="white" rounded="md" mr={10} />
        </Grid>
      </Card>
    </Box>
  );
};

export default TaskCard;
