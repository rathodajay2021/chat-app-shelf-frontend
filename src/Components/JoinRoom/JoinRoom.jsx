import React from "react";
import { JoinRoomWrapper } from "./JoinRoom.style";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const INIT_VALUE = {
  userName: "",
  chatRoomName: "",
};

const ValidationSchema = Yup.object({
  userName: Yup.string().required("User name is required"),
  chatRoomName: Yup.string().required("Chat room name is required"),
});

const JoinRoom = () => {
  const navigate = useNavigate();

  const submitHandler = (values) => {
    navigate(
      `/chat-room?userName=${values.userName}&chatRoomName=${values.chatRoomName}`
    );
  };

  return (
    <JoinRoomWrapper>
      <Box className="form-wrapper">
        <Typography className="title">join chat</Typography>
        <Formik
          initialValues={INIT_VALUE}
          validationSchema={ValidationSchema}
          onSubmit={submitHandler}
        >
          {({ values, touched, errors, handleChange, handleSubmit }) => (
            <>
              <Box className="field-wrapper">
                <TextField
                  value={values?.userName}
                  onChange={handleChange}
                  name="userName"
                  label="User Name"
                  variant="filled"
                  className="input-field"
                />
                <FormHelperText error>
                  {touched?.userName && errors?.userName}
                </FormHelperText>
              </Box>
              <Box className="field-wrapper">
                <TextField
                  value={values?.chatRoomName}
                  onChange={handleChange}
                  name="chatRoomName"
                  label="Chat Room Name"
                  variant="filled"
                  className="input-field"
                />
                <FormHelperText error>
                  {touched?.chatRoomName && errors?.chatRoomName}
                </FormHelperText>
              </Box>
              <Button
                onClick={handleSubmit}
                variant="contained"
                className="submit-btn"
                fullWidth
              >
                Join
              </Button>
            </>
          )}
        </Formik>
      </Box>
    </JoinRoomWrapper>
  );
};

export default JoinRoom;
