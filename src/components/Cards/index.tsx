import Box from "@mui/material/Box";
import React from "react";
import { theme } from "../../assets/theme";
import Typography from "@mui/material/Typography";

interface ElProps {
  el: {
    bgColor: string;
    image: string;
    name: string;
  };
}

const Index: React.FC<ElProps> = ({ el }) => {
  return (
    <Box sx={wrapperStyles}>
      <Box sx={imageWrapperStyles(el.bgColor)}>
        <img src={el.image} alt="cardImage" />
      </Box>
      <Typography variant="body1" sx={{ p: "12px 18px 18px 18px" }}>
        {el.name}
      </Typography>
    </Box>
  );
};

export default Index;

const wrapperStyles = {
  boxShadow: theme.shadows[1],
  borderRadius: "18px",
  overflow: "hidden",
  width: "100%",
};

const imageWrapperStyles = (bgcolor: string) => ({
  height: 162,
  width: "100%",
  bgcolor: bgcolor,
  display: "flex",
  justifyContent: "center",
});
