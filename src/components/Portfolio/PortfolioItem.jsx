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

const PortfolioItem = ({ project }) => {
  const { title, imageUrl, techStacks, description, website, sourceCode } =
    project;

  return (
    <Card elevation={3} sx={{ maxWidth: 350, borderRadius: "15px", mb: 2 }}>
      <Link href={website} target="_blank" underline="hover">
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mt: 1, fontWeight: "bold", color: "primary.main" }}
        >
          {title}
        </Typography>
      </Link>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ mb: 1 }}
      />
      <div className="flex flex-wrap justify-center">
        {techStacks.map((item) => (
          <Chip
            key={item}
            size="small"
            label={item}
            color="primary"
            variant="outlined"
            sx={{ m: 0.2 }}
          />
        ))}
      </div>
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
          sx={{ textTransform: "none" }}
        >
          Website
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(sourceCode, "_blank")}
          sx={{ textTransform: "none" }}
        >
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default PortfolioItem;
