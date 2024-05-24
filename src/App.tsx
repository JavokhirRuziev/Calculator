import React, { useEffect, useState } from "react";
import SideBar from "./components/Layout/SideBar";
import Container from "@mui/material/Container";
import Card from "./components/Cards/index";
import Box from "@mui/material/Box";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useSearchParams } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_ROOT || "";

interface Subject {
  bgColor: string;
  image: string;
  name: string;
  id: string;
  tags: string[];
}

function App() {
  const [searchParams] = useSearchParams();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [filteredSubjects, setFilteredSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Subject[]> = await axios.get(baseUrl);
        setSubjects(response.data);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.log(axiosError.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterName = searchParams.get("name") ?? "";

    const filtered = subjects.filter((subject) => {
      if (filterName === "Все темы") {
        return true;
      }
      return subject.tags.some((tag) => tag.includes(filterName));
    });
    setFilteredSubjects(filtered);
  }, [subjects, searchParams]);

  return (
    <Container sx={wrapperStyles}>
      <Box>
        <SideBar />
      </Box>
      <Box sx={cardWrapperStyles}>
        {filteredSubjects?.map((el) => (
          <Card key={el.id} {...{ el }} />
        ))}
      </Box>
    </Container>
  );
}

export default App;

const cardWrapperStyles = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  columnGap: "24px",
  rowGap: "24px",
};

const wrapperStyles = {
  display: "grid",
  columnGap: "24px",
  gridTemplateColumns: "264px 1fr",
};
