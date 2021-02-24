import React from "react";
import { Base, Wrapper } from "./styles";
import Paper from "@material-ui/core/Paper";
const monthName = [
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

const HeaderLayout = ({
  handleTodayButton,
  handlePrevMonth,
  handleNextMonth,
  selectedMonth,
  selectedYear,
  isHD,
  isFHD
}) => {
  return (
    <Wrapper deviceSize={{ isHD,isFHD }}>
      <Base deviceSize={{ isHD,isFHD }}>
        <Paper className="dateContainer" onClick={handleTodayButton}>
          <img
            src="img/icon-next-date.svg"
            className="dateContainer--iconcalender"
            alt="icon-calender"
          />
          <span className="dateContainer--text">Today</span>
        </Paper>
        <Paper className="monthContainer">
          <img
            src="img/icon-dropdown.svg"
            className="monthContainer--iconback"
            alt="icon-back"
            onClick={handlePrevMonth}
          />
          <span className="monthContainer--text">
            {monthName[selectedMonth]} {selectedYear}
          </span>
          <img
            src="img/icon-dropdown.svg"
            className="monthContainer--iconnext"
            alt="icon-next"
            onClick={handleNextMonth}
          />
        </Paper>
      </Base>
    </Wrapper>
  );
};

export default HeaderLayout;
