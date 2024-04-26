import React from "react";
import { Box, IconButton } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Avatar from '@mui/material/Avatar';

const TopBar: React.FC = () => {
  return (
    <div className={`bg-gray-100`}>
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        p={2}
        borderBottom="1px solid #e0e0e0"
      >
        <Box display="flex" gap={1}>
          <IconButton onClick={() => console.log("Notifications")}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => console.log("Profile")}>
            <Avatar />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default TopBar;
