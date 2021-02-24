import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const BodyLayout = ({ isHD, isFHD, selectedMonth, selectedYear }) => {
  let dayObj = [];
  let currentYear = new Date(
    `${selectedMonth + 1}/1/${selectedYear}`
  ).getFullYear();
  let currentMonth = new Date(
    `${selectedMonth + 1}/1/${selectedYear}`
  ).getMonth();
  let currentMonthDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  let currentMonthStartDayIndex = new Date(
    `${currentMonth + 1}/1/${currentYear}`
  ).getDay();

  let previousYear, previousMonth, previousMonthDays;

  if (currentMonth === 1) {
    previousYear = currentYear - 1;
    previousMonth = 11;
    previousMonthDays = new Date(previousYear, previousMonth + 1, 0).getDate();
  } else {
    previousYear = currentYear;
    previousMonth = currentMonth - 1;
    previousMonthDays = new Date(previousYear, previousMonth + 1, 0).getDate();
  }

  let nextYear, nextMonth;

  if (currentMonth === 11) {
    nextYear = currentYear + 1;
    nextMonth = 0;
  } else {
    nextYear = currentYear;
    nextMonth = currentMonth + 1;
  }

  for (
    let i =
      previousMonthDays -
      ((currentMonthStartDayIndex ? currentMonthStartDayIndex : 7) - 1);
    i < previousMonthDays;
    i++
  ) {
    if (
      new Date(`${previousMonth + 1}/${i + 1}/${previousYear}`).getDay() ===
        0 ||
      new Date(`${previousMonth + 1}/${i + 1}/${previousYear}`).getDay() === 6
    ) {
      dayObj.push({
        dayNumber: `${i + 1}`,
        eventTitle: `Weekly Off`,
        disabled: true,
      });
    } else {
      dayObj.push({
        dayNumber: `${i + 1}`,
        eventTitle: ``,
        disabled: true,
      });
    }
  }
  for (let i = 0; i < currentMonthDays; i++) {
    if (
      new Date(`${currentMonth + 1}/${i + 1}/${currentYear}`).getDay() === 0 ||
      new Date(`${currentMonth + 1}/${i + 1}/${currentYear}`).getDay() === 6
    ) {
      dayObj.push({
        dayNumber: `${i + 1}`,
        eventTitle: `Weekly Off`,
        disabled: false,
      });
    } else {
      dayObj.push({
        dayNumber: `${i + 1}`,
        eventTitle: ``,
        disabled: false,
      });
    }
  }
  const gridLength = 42 - dayObj.length;
  for (let i = 0; i < gridLength; i++) {
    if (
      new Date(`${nextMonth + 1}/${i + 1}/${nextYear}`).getDay() === 0 ||
      new Date(`${nextMonth + 1}/${i + 1}/${nextYear}`).getDay() === 6
    ) {
      dayObj.push({
        dayNumber: `${i + 1}`,
        eventTitle: `Weekly Off`,
        disabled: true,
      });
    } else {
      dayObj.push({
        dayNumber: `${i + 1}`,
        eventTitle: ``,
        disabled: true,
      });
    }
  }
  return (
    <Wrapper deviceSize={{ isHD, isFHD }}>
      <GridList
        cellHeight={isHD ? 58 : isFHD ? 87 : 116}
        cols={7}
        className="weekdayContainer"
      >
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((dayName) => (
          <GridListTile key={uuidv4()} cols={1}>
            <span className="weekdayName">{dayName}</span>
          </GridListTile>
        ))}
      </GridList>
      <GridList cellHeight={isHD ? 96 : isFHD ? 144 : 192} cols={7}>
        {dayObj.map((day, index) => (
          <GridListTile
            key={uuidv4()}
            cols={1}
            style={{
              backgroundColor: index % 2 === 0 ? "#171717" : "#1c1c1c",
            }}
          >
            <div
              className={`dayNumber${
                day.disabled ? " dayNumber--disabledText" : ""
              }`}
            >
              {day.dayNumber}
            </div>
            <div className="dayEvent">{day.eventTitle}</div>
          </GridListTile>
        ))}
      </GridList>
    </Wrapper>
  );
};

export default BodyLayout;
