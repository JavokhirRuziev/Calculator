import TextField from "@mui/material/TextField";

const Base = ({
  sx,
  value,
  onChange,
  type,
  placeholder,
}: {
  sx?: any;
  value?: any;
  onChange?: any;
  type?: string;
  placeholder?: string;
}) => {
  const fontSize = value?.length > 16 ? 10 : value?.length > 8 ? 22 : 45;

  console.log(value?.length);

  return (
    <TextField
      fullWidth
      {...{ value, onChange, type, placeholder }}
      sx={{
        "& .MuiOutlinedInput-root": {
          fontSize,
          fontFamily: `"NunitoRegular", sans-serif`,
          fontWeight: "300 !important",
          borderRadius: "0px",
          color: "common.white",
          bgcolor: "primary.main",
          opacity: 0.9,
          height: 85,
          zIndex: -1,
          "&:hover": {
            bgcolor: "primary.main",
            border: "none",
            fieldset: {
              border: "none",
            },
          },
          fieldset: {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
            zIndex: 2,
          },
          "&.Mui-focused": {
            bgcolor: "primary.main",
          },
        },
        "& .MuiOutlinedInput-input": {
          height: "auto",
          p: "10px 20px",
          borderRadius: "4px",
          textAlign: "right",
          "&::placeholder": {
            color: "grey.400",
            opacity: 1,
          },
        },
        ...sx,
      }}
    />
  );
};

export default Base;
