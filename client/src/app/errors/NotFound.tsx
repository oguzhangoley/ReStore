import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant="h3">
        Opps -- Not Found
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to="/catalog">
        Go back to Shop
      </Button>
    </Container>
  );
}

export default NotFound;
