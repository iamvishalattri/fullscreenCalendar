import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  padding: ${(props) =>
    props.deviceSize.isHD
      ? "0px 22px 8px 22px"
      : props.deviceSize.isFHD
      ? "0px 33px 12px 33px"
      : "0px 44px 16px 44px"};
  .weekdayContainer .MuiGridListTile-tile {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    .weekdayName {
      width: ${(props) =>
        props.deviceSize.isHD
          ? "89px"
          : props.deviceSize.isFHD
          ? "133.5px"
          : "178px"};
      height: ${(props) =>
        props.deviceSize.isHD
          ? "18px"
          : props.deviceSize.isFHD
          ? "27px"
          : "36px"};
      font-family: Poppins;
      font-size: ${(props) =>
        props.deviceSize.isHD
          ? "14px"
          : props.deviceSize.isFHD
          ? "21px"
          : "28px"};
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29;
      letter-spacing: 0.6px;
      color: #999999;
      user-select: none;
    }
  }
  .MuiGridListTile-tile:hover {
    .dayNumber {
      color: #0f6ebe;
    }
  }
  .dayNumber {
    width: ${(props) =>
      props.deviceSize.isHD
        ? "25px"
        : props.deviceSize.isFHD
        ? "37.5px"
        : "50px"};
    height: ${(props) =>
      props.deviceSize.isHD
        ? "28px"
        : props.deviceSize.isFHD
        ? "42px"
        : "56px"};
    margin: ${(props) =>
      props.deviceSize.isHD
        ? "20px 0 0 20px"
        : props.deviceSize.isFHD
        ? "30px 0 0 30px"
        : "40px 0 0 40px"};
    font-family: Poppins;
    font-size: ${(props) =>
      props.deviceSize.isHD
        ? "24px"
        : props.deviceSize.isFHD
        ? "36px"
        : "48px"};
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #e6e6e6;
    user-select: none;
    &--disabledText {
      color: #999999;
    }
  }
  .dayEvent {
    height: ${(props) =>
      props.deviceSize.isHD
        ? "15px"
        : props.deviceSize.isFHD
        ? "22.5px"
        : "30px"};
    margin: ${(props) =>
      props.deviceSize.isHD
        ? "16px 0 0 16px"
        : props.deviceSize.isFHD
        ? "24px 0 0 24px"
        : "32px 0 0 32px"};
    font-family: Poppins;
    font-size: ${(props) =>
      props.deviceSize.isHD
        ? "10px"
        : props.deviceSize.isFHD
        ? "15px"
        : "20px"};
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: #666666;
    user-select: none;
  }
`;
