import React, { useState } from "react";
import { Box, Button, Progress, Stack, Text } from "@chakra-ui/react";
import AddCard from "./AddCard";
import HistoryProgressBar from "./HistoryProgressBar";
import Activity from "./Activity";
import CalendarProgress from "./CalendarProgress";
import DaysNames from "./DaysNames";

const Calendar = () => {
  const progress = 80;
  const [showAddCard, setShowAddCard] = useState(false);

  const handleClick = () => {
    setShowAddCard(true);
  };

  const handleClose = () => {
    setShowAddCard(false);
  };

  return (
    <Box minW="40%">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text color={"white"} fontSize="3xl" as="b">
          Good Afternoon, Anirudh
        </Text>
        <Button
          colorScheme="blue"
          onClick={handleClick}
          alignContent="flex-end"
        >
          + Habit
        </Button>
      </Stack>

      <Progress value={progress} size="md" borderRadius="1rem" mt={12} />
      <Text color={"white"}>{progress}% achieved</Text>

      {showAddCard && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 11,
              }}
            >
              <AddCard onClose={handleClose} />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
              onClick={handleClose}
            />
          </div>
        </>
      )}

      <HistoryProgressBar />
    </Box>
  );
};

export default Calendar;
