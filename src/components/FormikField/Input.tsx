import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Base from "../TextFields/Base";

export interface FormikFieldProps {
  placeholder: string;
  type: string;
  label: string;
  field: {
    name: string;
    value: any;
  };
  form: {
    touched: any;
    errors: any;
    setFieldValue: (name: string, value: any) => void;
  };
  options?: any;
  mb: number;
}

const FormikField = ({
  placeholder,
  type,
  label,
  field,
  form: { touched, errors, setFieldValue },
  options,
}: FormikFieldProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (type === "phone") {
      value = value.replace(/[^0-9+]/g, "");
      if (value.startsWith("+")) {
        value = "+" + value.replace(/\+/g, "");
      } else {
        value = value.replace(/\+/g, "");
      }
    }
    setFieldValue(field.name, value);
  };
  return (
    <Box position={"relative"} mb={1.5} width={"100%"}>
      {label && (
        <Typography variant="h6" mb={1}>
          {label}
        </Typography>
      )}
      <Base
        {...{ type, placeholder }}
        value={field.value}
        onChange={handleChange}
      />
      {touched[field.name] && errors[field.name] && (
        <Typography sx={validationTextStyles} variant="subtitle2">
          {errors[field.name]}
        </Typography>
      )}
    </Box>
  );
};

export default FormikField;

const validationTextStyles = {
  position: "absolute",
  bottom: -22,
  color: "error.main",
  transition: "0.3s",
  fontSize: "12px !important",
};
