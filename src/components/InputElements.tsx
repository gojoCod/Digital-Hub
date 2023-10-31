import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { TextField } from "@mui/material";
import "./inputElement.css";
function InputElements() {
  const [startDate, setStartDate] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  return (
    <div className="ctr-1">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={`${startDate}`}
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker disabled />
      </LocalizationProvider>

      <TextField
        id="outlined-basic"
        label="Freewheel-O&O/Affiliate/Direct"
        variant="outlined"
      />

      <TextField
        id="outlined-basic"
        label="Freewheel-O&O/Affiliate/Direct"
        variant="outlined"
      />

      <TextField label="" variant="outlined" value="0" type="number" />
      <TextField label="" variant="outlined" value="0" type="number" />
      <TextField label="" variant="outlined" value="0" type="number" />
    </div>
  );
}

export default InputElements;
