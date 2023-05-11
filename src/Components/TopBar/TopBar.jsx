import React from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { TopBarWrapper } from "./TopBar.style";

const TopBar = ({ chatRoomName }) => {
  return (
    <TopBarWrapper>
      <Box className="left-container">
        <Typography className="title">{chatRoomName}</Typography>
      </Box>
      <Box className="right-container">
        <Tooltip title="Leave">
          <Button sx={{ color: "#FFFFFF" }}>
            <ExitToAppIcon />
          </Button>
        </Tooltip>
      </Box>
    </TopBarWrapper>
  );
};

export default TopBar;
