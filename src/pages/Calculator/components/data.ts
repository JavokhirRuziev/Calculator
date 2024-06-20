type CalcButton = {
  name: string;
  value: string | number;
  color: "primary" | "secondary" | "info" | "warning";
};

export const calcButtonsArr: CalcButton[] = [
  {
    name: "AC",
    value: "AC",
    color: "primary",
  },
  {
    name: "+/-",
    value: "+/-",
    color: "primary",
  },
  { name: "%", value: "%", color: "primary" },
  {
    name: "/",
    value: "/",
    color: "secondary",
  },
  {
    name: "7",
    value: 7,
    color: "info",
  },
  {
    name: "8",
    value: 8,
    color: "info",
  },
  {
    name: "9",
    value: 9,
    color: "info",
  },
  {
    name: "x",
    value: "x",
    color: "secondary",
  },
  {
    name: "4",
    value: 4,
    color: "info",
  },
  {
    name: "5",
    value: 5,
    color: "info",
  },
  {
    name: "6",
    value: 6,
    color: "info",
  },
  {
    name: "-",
    value: "-",
    color: "secondary",
  },
  {
    name: "1",
    value: 1,
    color: "info",
  },
  {
    name: "2",
    value: 2,
    color: "info",
  },
  {
    name: "3",
    value: 3,
    color: "info",
  },
  {
    name: "+",
    value: "+",
    color: "secondary",
  },
  {
    name: "0",
    value: 0,
    color: "info",
  },
  {
    name: ".",
    value: ".",
    color: "info",
  },
  {
    name: "=",
    value: "=",
    color: "secondary",
  },
];
