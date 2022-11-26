import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { navItems } from "../constants";

export default function NavBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Ethan Ge
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="#contact-me" sx={{ color: "#fff", pl: "40px" }}>
              Contact me
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
