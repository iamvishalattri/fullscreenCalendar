import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  padding: ${(props) =>
    props.deviceSize.isHD
      ? "16px 10px 0px 10px"
      : props.deviceSize.isFHD
      ? "24px 15px 0px 15px"
      : "32px 20px 0px 20px"};
`;

export const Base = styled.div`
  width: 100%;
  height: ${(props) =>
    props.deviceSize.isHD ? "38px" : props.deviceSize.isFHD ? "57px" : "76px"};
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 100px;
  display: flex;
  align-items: center;
  .dateContainer {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: ${(props) =>
      props.deviceSize.isHD
        ? "38px"
        : props.deviceSize.isFHD
        ? "57px"
        : "76px"};
    width: 10%;
    border-radius: 100px 0 0 100px;
    background-color: #0f6ebe;
    cursor: pointer;
    user-select: none;
    &--iconcalender {
      width: ${(props) =>
        props.deviceSize.isHD
          ? "12px"
          : props.deviceSize.isFHD
          ? "18px"
          : "24px"};
      height: ${(props) =>
        props.deviceSize.isHD
          ? "12px"
          : props.deviceSize.isFHD
          ? "18px"
          : "24px"};
      margin: ${(props) =>
        props.deviceSize.isHD
          ? "0 4px 0 0"
          : props.deviceSize.isFHD
          ? "0 6px 0 0"
          : "0 8px 0 0"};
      object-fit: contain;
      user-select: none;
    }
    &--text {
      width: ${(props) =>
        props.deviceSize.isHD
          ? "38px"
          : props.deviceSize.isFHD
          ? "57px"
          : "76px"};
      height: ${(props) =>
        props.deviceSize.isHD
          ? "14px"
          : props.deviceSize.isFHD
          ? "21px"
          : "28px"};
      margin: ${(props) =>
        props.deviceSize.isHD
          ? "0 0 0 4px"
          : props.deviceSize.isFHD
          ? "0 0 0 6px"
          : "0 0 0 8px"};
      font-family: Poppins;
      font-size: ${(props) =>
        props.deviceSize.isHD
          ? "12px"
          : props.deviceSize.isFHD
          ? "18px"
          : "24px"};
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.17;
      letter-spacing: normal;
      color: #e6e6e6;
      user-select: none;
    }
  }
  .monthContainer {
    display: flex;
    justify-content: center;
    text-align: center;
    height: ${(props) =>
      props.deviceSize.isHD
        ? "38px"
        : props.deviceSize.isFHD
        ? "57px"
        : "76px"};
    width: 10%;
    border-radius: 0;
    background-color: rgba(255, 255, 255, 0.01);
    user-select: none;
    &--iconback {
      width: ${(props) =>
        props.deviceSize.isHD
          ? "10px"
          : props.deviceSize.isFHD
          ? "15px"
          : "20px"};
      height: ${(props) =>
        props.deviceSize.isHD
          ? "10px"
          : props.deviceSize.isFHD
          ? "15px"
          : "20px"};
      margin: ${(props) =>
        props.deviceSize.isHD
          ? "15px 4px 13px 12px"
          : props.deviceSize.isFHD
          ? "22.5px 6px 19.5px 18px"
          : "30px 8px 26px 24px"};
      object-fit: contain;
      transform: rotate(180deg);
      user-select: none;
      cursor: pointer;
    }
    &--text {
      width: ${(props) =>
        props.deviceSize.isHD
          ? "70px"
          : props.deviceSize.isFHD
          ? "105px"
          : "140px"};
      height: ${(props) =>
        props.deviceSize.isHD
          ? "14px"
          : props.deviceSize.isFHD
          ? "21px"
          : "28px"};
      margin: ${(props) =>
        props.deviceSize.isHD
          ? "12px 4px"
          : props.deviceSize.isFHD
          ? "18px 6px"
          : "24px 8px"};
      font-family: Poppins;
      font-size: ${(props) =>
        props.deviceSize.isHD
          ? "12px"
          : props.deviceSize.isFHD
          ? "18px"
          : "24px"};
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.17;
      letter-spacing: normal;
      color: #999999;
      user-select: none;
    }
    &--iconnext {
      width: ${(props) =>
        props.deviceSize.isHD
          ? "10px"
          : props.deviceSize.isFHD
          ? "15px"
          : "20px"};
      height: ${(props) =>
        props.deviceSize.isHD
          ? "10px"
          : props.deviceSize.isFHD
          ? "15px"
          : "20px"};
      margin: ${(props) =>
        props.deviceSize.isHD
          ? "15px 10px 13px 4px"
          : props.deviceSize.isFHD
          ? "22.5px 15px 19.5px 6px"
          : "30px 20px 26px 8px"};
      object-fit: contain;
      transform: rotate(0deg);
      user-select: none;
      cursor: pointer;
    }
  }
`;
