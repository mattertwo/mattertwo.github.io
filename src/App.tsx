import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Router>
          <List>
            <ListItem disableGutters>
              <a
                href="https://twitter.com/mattertwo/"
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText primary="Twitter" />
              </a>
            </ListItem>
            <ListItem disableGutters>
              <a
                href="https://www.instagram.com/mattertwo/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </ListItem>
            <ListItem disableGutters>
              <a
                href="https://www.facebook.com/mattertwo/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </ListItem>
            <ListItem disableGutters>
              <a
                href="https://www.linkedin.com/company/mattertwo/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </ListItem>
            <ListItem disableGutters>
              <a
                href="https://github.com/mattertwo/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </ListItem>
          </List>
        </Router>
        <Typography variant="body1">
          © Mattertwo {new Date().getFullYear()}{" "}
          <a href="mailto:hello@mattertwo.com">hello@mattertwo.com</a>
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
