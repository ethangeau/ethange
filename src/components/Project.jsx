import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Chip,
  Link,
} from "@mui/material";

export default function Project({ project }) {
  const { title, imageUrl, techStacks, description, website } = project;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link href="#">
        <Typography variant="body1" gutterBottom align="center">
          {title}
        </Typography>
      </Link>
      <CardMedia component="img" height="194" image={imageUrl} alt={title} />
      {techStacks.map((item) => (
        <Chip
          key={item}
          size="small"
          label={item}
          color="primary"
          variant="outlined"
          sx={{ mx: 1 }}
        />
      ))}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
}
