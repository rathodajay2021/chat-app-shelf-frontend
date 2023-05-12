import React from "react";
import { CustomInputWrapper } from "./CustomInput.style";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Button } from "@mui/material";

const CustomInput = ({ message, setMessage, submitHandler, sendMessage }) => {
  return (
    <CustomInputWrapper>
      <textarea
        className="custom-input"
        placeholder="Message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyUp={submitHandler}
      />
      <Button
        sx={{ bgcolor: "#2F759B", padding: "6px 16px 6px 11px" }}
        className="send-btn"
        variant="contained"
        onClick={sendMessage}
        endIcon={<SendRoundedIcon />}
      ></Button>
    </CustomInputWrapper>
  );
};

export default CustomInput;
