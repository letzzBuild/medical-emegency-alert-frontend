import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

function Appbar() {
  return (
    <div>
      <AppBar position="static" style={{backgroundColor:'#ef233c'}}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Medical Emergency Alert 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;
