import React, { useState } from "react";
import useWindowSize from "../../utils/resizeCheckHook";
import { GlobalLayoutContainer } from "./styles";
import BodyLayout from "../BodyLayout";
import HeaderLayout from "../HeaderLayout";

const GlobalLayout = () => {
  const [width] = useWindowSize();
  const isHD = width >= 1280 && width < 1920;
  const isFHD = width >= 1920 && width < 2560;
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const handleTodayButton = () => {
    setSelectedMonth(new Date().getMonth());
    setSelectedYear(new Date().getFullYear());
  };
  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
      setSelectedYear(selectedYear);
    }
  };
  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
      setSelectedYear(selectedYear);
    }
  };
  return (
    <>
      <GlobalLayoutContainer>
        <HeaderLayout
          handleTodayButton={handleTodayButton}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          isHD={isHD}
          isFHD={isFHD}
        />
        <BodyLayout
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          isHD={isHD}
          isFHD={isFHD}
        />
      </GlobalLayoutContainer>
    </>
  );
};

export default GlobalLayout;
