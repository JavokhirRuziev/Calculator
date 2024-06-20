import React, { useState } from "react";
import Container from "@mui/material/Container";
import Base from "../../components/TextFields/Base";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { calcButtonsArr } from "./components/data";

const Calculator = () => {
  const [calcValue, setCalcValue] = useState<string>();
  const [calcValueSecondary, setCalcValueSecondary] = useState<string>();
  const [operator, setOperator] = useState<string | null>();

  const handleClick = (e: string | number) => {
    if (typeof e === "number" || e === ".") {
      if (e === ".") {
        if (operator) {
          if (calcValueSecondary?.includes(".")) {
            return;
          }
        } else {
          if (calcValue?.includes(".")) {
            return;
          }
        }
      }
      if (operator) {
        setCalcValueSecondary((prev) => (prev ? String(prev + e) : String(e)));
      } else {
        setCalcValue((prev) => (prev ? String(prev + e) : String(e)));
      }
    }

    if (typeof e === "string") {
      if (e === "+" || e === "-" || e === "/" || e === "x") {
        if (operator && calcValue && calcValueSecondary) {
          let newResult;
          if (operator === "+") {
            newResult = Number(calcValue) + Number(calcValueSecondary);
          } else if (operator === "-") {
            newResult = Number(calcValue) - Number(calcValueSecondary);
          } else if (operator === "x") {
            newResult = Number(calcValue) * Number(calcValueSecondary);
          } else if (operator === "/") {
            newResult = Number(calcValue) / Number(calcValueSecondary);
          }
          setCalcValue(String(newResult));
          setCalcValueSecondary("");
        }
        setOperator(e);
      }

      if (e === "=") {
        if (calcValue && calcValueSecondary) {
          let newResult;
          if (operator === "+") {
            newResult = Number(calcValue) + Number(calcValueSecondary);
          } else if (operator === "-") {
            newResult = Number(calcValue) - Number(calcValueSecondary);
          } else if (operator === "x") {
            newResult = Number(calcValue) * Number(calcValueSecondary);
          } else if (operator === "/") {
            newResult = Number(calcValue) / Number(calcValueSecondary);
          }
          setCalcValue(String(newResult));
          setCalcValueSecondary("");
          setOperator(null);
        }
      }

      if (e === "AC") {
        setCalcValue("");
        setCalcValueSecondary("");
        setOperator(null);
      }
    }

    // if (!!calcValue || !!calcValueSecondary) {
    //   if (
    //     (calcValue !== undefined && calcValue.length > 16) ||
    //     (calcValueSecondary !== undefined && calcValueSecondary.length > 16)
    //   ) {
    //     alert("Too long! sorry :( ");
    //     setCalcValue("");
    //     setCalcValueSecondary("");
    //     setOperator(null);
    //   }
    // }
  };

  return (
    <Container sx={{ maxWidth: "320px !important" }}>
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Base
          {...{ value: !!calcValueSecondary ? calcValueSecondary : calcValue }}
        />
        <Grid container>
          {calcButtonsArr.map((el) => (
            <Grid
              item
              component={"div"}
              xl={el.name === "0" ? 6 : 3}
              lg={el.name === "0" ? 6 : 3}
              md={el.name === "0" ? 6 : 3}
              sm={el.name === "0" ? 6 : 3}
              key={el?.name}
            >
              <Button
                variant="contained"
                fullWidth
                color={el?.name === operator ? "warning" : el?.color}
                sx={{ color: "white" }}
                onClick={() => handleClick(el?.value)}
              >
                {el.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Calculator;
