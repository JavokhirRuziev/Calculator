import Box from "@mui/material/Box";
import React, { useState } from "react";
import { theme } from "../../assets/theme";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface Tag {
  name: string;
  id: string;
}

const SideBar: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get("name") ?? "Все темы";
  const id = searchParams.get("id") ?? "1";
  const push = useNavigate();
  const [active, setActive] = useState<Tag | null>({ name, id });

  const handleFilter = (el: Tag) => {
    setActive(el);
    push(`/?name=${el?.name}&id=${el?.id}`);
  };

  return (
    <Box sx={sideBarWrapperStyles}>
      {tagsArr?.map((el) => (
        <Box
          key={el.id}
          sx={buttonWrapperStyles(el, active)}
          onClick={() => el && handleFilter(el)}
        >
          <Typography
            variant="body1"
            color={el?.id === active?.id ? "common.white" : "common.black"}
          >
            {el?.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SideBar;

const tagsArr: Tag[] = [
  { name: "Все темы", id: "1" },
  { name: "Логика и мышление", id: "2" },
  { name: "Загадки", id: "3" },
  { name: "Головоломки", id: "4" },
  { name: "Страны и столицы", id: "5" },
  { name: "Окружающий мир", id: "6" },
];

const sideBarWrapperStyles = {
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: "18px",
  display: "flex",
  flexDirection: "column",
  maxWidth: 264,
  p: 1.5,
  position: "sticky",
  top: 24,
};

const buttonWrapperStyles = (el: Tag, active: Tag | null) => ({
  bgcolor: el?.id === active?.id ? "primary.main" : "common.white",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  p: 1.5,
  cursor: "pointer",
});
