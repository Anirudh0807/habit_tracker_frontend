import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Divider,
  Flex,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Activity from "./Activity";
import CalendarProgress from "./CalendarProgress";
import DaysNames from "./DaysNames";
import { ReactComponent as GridIcon } from "./grid.svg";
import { ReactComponent as ProgressIcon } from "./progress.svg";
import Cycle from "./emojis/Cycle.svg";
import Gym from "./emojis/Gym.svg";
import Book from "./emojis/Book.svg";
import Alcohol from "./emojis/Beer.svg";

const HistoryProgressBar = () => {
  const [sat, setSat] = useState("");
  const [sun, setSun] = useState("");
  const [showCalendar, setShowCalendar] = useState(true);

  useEffect(() => {
    getLastSundayAndNextSaturday();
  }, []);
  function getLastSundayAndNextSaturday() {
    // Get the current date
    const currentDate = new Date();

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const currentDayOfWeek = currentDate.getDay();

    // Calculate the date of the last Sunday by subtracting the current day of the week
    const lastSunday = new Date(currentDate);
    lastSunday.setDate(currentDate.getDate() - currentDayOfWeek);

    // Calculate the date of the next Saturday by adding the remaining days until Saturday
    const daysUntilSaturday = 6 - currentDayOfWeek;
    const nextSaturday = new Date(currentDate);
    nextSaturday.setDate(currentDate.getDate() + daysUntilSaturday);

    // Function to get the short month name
    function getShortMonthName(date) {
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
      return monthNames[date.getMonth()];
    }

    // Format the dates with short month names and only the date
    const lastSundayString = `${getShortMonthName(
      lastSunday
    )} ${lastSunday.getDate()}`;
    const nextSaturdayString = `${getShortMonthName(
      nextSaturday
    )} ${nextSaturday.getDate()}`;

    console.log(lastSundayString);
    console.log(nextSaturdayString);

    setSun(lastSundayString);
    setSat(nextSaturdayString);
  }

  function updateDate(dateString, operation) {
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

    // Split the input date string into month and day
    const [monthStr, dayStr] = dateString.split(" ");
    const month = monthNames.indexOf(monthStr);
    const day = parseInt(dayStr);

    // Create a Date object for the input date
    const inputDate = new Date(new Date().getFullYear(), month, day);

    // Subtract 7 days from the input date
    if (operation == "-") {
      inputDate.setDate(inputDate.getDate() - 7);
    } else {
      inputDate.setDate(inputDate.getDate() + 7);
    }

    // Get the month and day of the new date
    const newMonth = inputDate.getMonth();
    const newDay = inputDate.getDate();

    // Format the result as "Mon D"
    const result = `${monthNames[newMonth]} ${newDay}`;
    console.log(result);
    return result;
  }

  const reduceDates = () => {
    setSat(updateDate(sat, "-"));
    setSun(updateDate(sun, "-"));
  };

  const increaseDates = () => {
    setSat(updateDate(sat, "+"));
    setSun(updateDate(sun, "+"));
  };

  const handleCalendar = () => {
    setShowCalendar(true);
  };

  const handleProgress = () => {
    setShowCalendar(false);
  };

  return (
    <Box mt={10}>
      <Flex justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Text color="white" fontSize="2xl" fontWeight="bold">
            {sun} - {sat}
          </Text>
          <Circle
            size="30px"
            bg="#1a202c"
            color="white"
            border="1px"
            borderColor="white"
            onClick={reduceDates}
            cursor="pointer"
          >
            <ArrowBackIcon boxSize={4} />
          </Circle>
          <Circle
            size="30px"
            bg="#1a202c"
            color="white"
            border="1px"
            borderColor="white"
            onClick={increaseDates}
            cursor="pointer"
          >
            <ArrowForwardIcon boxSize={4} />
          </Circle>
        </Stack>
        <Stack direction="row" spacing={2}>
          <IconButton
            aria-label="Search database"
            onClick={handleCalendar}
            icon={<GridIcon />}
            bg={showCalendar ? "#2b6cb0" : "#1a202c"}
            colorScheme="blue"
            color="white"
            w={16}
            h={10}
            borderRadius="3xl"
          />
          <IconButton
            aria-label="Search database"
            onClick={handleProgress}
            icon={<ProgressIcon />}
            bg={showCalendar ? "#1a202c" : "#2b6cb0"}
            color="white"
            colorScheme="blue"
            w={16}
            h={10}
            borderRadius="3xl"
          />
        </Stack>
      </Flex>
      <Divider mt={4} />

      <Box>
        {showCalendar ? (
          <>
            <DaysNames color={"white"} />
            <CalendarProgress
              Name="Cycling"
              Days={["Monday", "Tuesday", "Wednesday"]}
              DaysDone={["Monday", "Tuesday"]} icon={Cycle}
            />
            <CalendarProgress
              Name="Gym"
              Days={["Monday", "Wednesday", "Friday"]}
              DaysDone={["Monday", "Wednesday"]}
              icon={Gym}
            />
            <CalendarProgress
              Name="Book"
              Days={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
              DaysDone={["Monday", "Tuesday"]}
              icon={Book}
            />
            <CalendarProgress
              Name="Alcohol"
              Days={[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ]}
              DaysDone={["Monday", "Tuesday", "Wednesday"]}
              icon={Alcohol}
            />
          </>
        ) : (
          <Box>
            <DaysNames color={"#1a202c"} />
            <Activity progress={66} Name={"Cycling"} icon={Cycle}/>
            <Activity progress={66} Name={"Gym"} icon={Gym}/>
            <Activity progress={40} Name={"Book"} icon={Book}/>
            <Activity progress={42} Name={"Alcohol"} icon={Alcohol}/>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HistoryProgressBar;
