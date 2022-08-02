import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { RiErrorWarningFill, RiInformationFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

// const handleColor = (val) => {
//   switch (val) {
//     case "warning":
//       return "#fff8e6";
//     case "danger":
//       return "#fff5f5";
//     case "info":
//       return "#ebf3fc";
//     default:
//       return "#e6ffea";
//   }
// };

const Alert = ({ children, warningType, action }) => {
  const [colors, setColors] = useState({ background: "", color: "" });
  const loading = useRef(true);

  const handleColor = (val) => {
    switch (val) {
      case "warning":
        return { color: "#ffc022", background: "#fff8e6" };
      case "danger":
        return { color: "#ff5555", background: "#fff5f5" };
      case "info":
        return { color: "#3486e7", background: "#ebf3fc" };
      default:
        return { color: "#48d862", background: "#e6ffea" };
    }
  };

  useEffect(() => {
    const newColors = handleColor(warningType);
    setColors(newColors);
  }, []);

  useEffect(() => {
    console.log("girdi");
    const loadingBar = document.querySelector(".loading-bar");
    const bar = document.querySelector(".bar");
    const width = loadingBar.getBoundingClientRect().width;
    const pxPerFrame = width / 400;
    let count = 0;
    let calcWidth = 0;

    const loop = setInterval(() => {
      if (count <= 400 && loading.current) {
        calcWidth += pxPerFrame;
        bar.style.width = `${calcWidth}px`;
        count += 1;
      }
      if (count === 400) {
        action();
        clearInterval(loop);
      }
    }, 10);
  }, []);

  const handleIcon = (val) => {
    switch (val) {
      case "warning":
        return (
          <RiErrorWarningFill style={{ color: colors.color, fontSize: 30 }} />
        );
      case "danger":
        return (
          <RiErrorWarningFill style={{ color: colors.color, fontSize: 30 }} />
        );
      case "info":
        return (
          <RiInformationFill style={{ color: colors.color, fontSize: 30 }} />
        );
      default:
        return (
          <RiErrorWarningFill style={{ color: colors.color, fontSize: 30 }} />
        );
    }
  };

  return (
    <motion.div
      key="alert"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -150, opacity: 0 }}
    >
      <WarningAlert
        className="alert"
        color={colors.color}
        background={colors.background}
        onMouseOver={() => {
          loading.current = false;
        }}
        onMouseOut={() => {
          loading.current = true;
        }}
      >
        {handleIcon(warningType)}
        {children}
        <div className="loading-bar">
          <span className="bar"></span>
        </div>
      </WarningAlert>
    </motion.div>
  );
};

const WarningAlert = styled.section`
  min-width: 400px;
  max-width: 100%;
  height: 70px;
  border: 1px solid ${(props) => props.theme.inputBorder};
  position: fixed;
  bottom: calc(100vh - 140px);
  left: 50%;
  transform: translateX(-50%);
  place-items: left;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  border-radius: 10px;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.bg1};
  color: ${(props) => props.theme.textColorLight};
  font-size: 14px;
  overflow: hidden;
  z-index: 9999;

  svg {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
  }

  .loading-bar {
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
    pointer-events: none;

    .bar {
      display: block;
      height: 100%;
      width: 0;
      background-color: ${(props) => props.color};
    }
  }
`;

export default Alert;
