import { TextField } from "@mui/material";
import { useState } from "react";
import "./desiredBudget.css";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { YSIF, YSIFRow } from "../lib/data";
import dayjs from "dayjs";

function DesiredBudget() {
  //   const [startDate, setStartDate] = React.useState<Dayjs | null>(
  //     dayjs("5-12-2023")
  //   );
  const [YSIFData, setYSIFData] = useState(YSIF);
  const handleYSIFChange = <Key extends keyof YSIFRow>(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowIndex: number,
    columnIndex: number,
    obj: Key
  ) => {
    const newYSIFData = [...YSIFData];
    // console.log(
    //   "newYSIFData[rowIndex]",
    //   Object.entries(newYSIFData[rowIndex])[0][1].
    // );
    newYSIFData[rowIndex][obj][columnIndex] = e.target.value;
    console.log("new ysif data", newYSIFData);
    setYSIFData(newYSIFData);
  };

  const handleTotal = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowIndex: number,
    obj: string
  ) => {
    const newYSIFData = [...YSIFData];
    newYSIFData[rowIndex][obj] = e.target.value;
    setYSIFData(newYSIFData);
  };

  const handleDesired = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    rowIndex: number,
    obj: string
  ) => {
    const newYSIFData = [...YSIFData];
    newYSIFData[rowIndex][obj] = e.target.value;
    setYSIFData(newYSIFData);
  };
  return (
    <div>
      <div className="desiredBudget">
        <div className="container-1">
          <p>Desired Budget</p>
          <TextField
            label={YSIFData[7]["desiredBudget"]}
            variant="outlined"
            value={YSIFData[7]["desiredBudget"]}
            onChange={(e) => handleDesired(e, 7, "desiredBudget")}
            type="number"
            className="desiredInput"
            size="small"
          />
        </div>
        <div className="container-2">
          <div className="container-3">
            <p>Start Date</p>
            <div className="container-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {YSIFData[0]?.startDate?.map((obj, ind) => (
                  <DatePicker
                    label={`${obj.format("DD/MM/YYYY")}`}
                    value={obj}
                    onChange={(newValue) => {
                      const newYSIFData = [...YSIFData];
                      if (newYSIFData[0] && newYSIFData[0]["startDate"]) {
                        newYSIFData[0]["startDate"][ind] = newValue ?? dayjs();
                      }
                      setYSIFData(newYSIFData);
                    }}
                    slotProps={{ textField: { size: "small" } }}
                    format="MM-DD-YYYY"
                  />
                ))}
              </LocalizationProvider>
            </div>
          </div>
          <div className="container-3">
            <p>End Date</p>
            <div className="div container-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {YSIFData[1]?.["endDate"]?.map(() => (
                  <DatePicker
                    disabled
                    slotProps={{ textField: { size: "small" } }}
                  />
                ))}
              </LocalizationProvider>
            </div>
          </div>
          <div className="container-3-1">
            <p>Inventory Source</p>
            <div className="div container-4-1">
              {YSIFData[2]?.["inventorySource"]?.map((obj, ind) => (
                <TextField
                  id="outlined-basic"
                  label={obj}
                  size="small"
                  variant="outlined"
                  onChange={(e) =>
                    handleYSIFChange(e, 2, ind, "inventorySource")
                  }
                />
              ))}
            </div>
          </div>
          <div className="container-3-2">
            <p>Impressions</p>
            <div className="container-4-2">
              {YSIFData[3]?.["impressions"]?.map((obj, ind) => (
                <TextField
                  id="outlined-basic"
                  label={obj}
                  size="small"
                  type="number"
                  variant="outlined"
                  onChange={(e) => handleYSIFChange(e, 3, ind, "impressions")}
                />
              ))}
            </div>
          </div>
          <div className="container-3-2">
            <p>{`CPM(Gross)`}</p>
            <div className="div container-4-2">
              {YSIFData[4]["CPM"]?.map((obj, ind) => (
                <TextField
                  label=""
                  variant="outlined"
                  value={obj}
                  type="number"
                  size="small"
                  onChange={(e) => handleYSIFChange(e, 4, ind, "CPM")}
                />
              ))}
            </div>
          </div>
          <div className="container-3-2">
            <p>{`Cost(Gross)`}</p>
            <div className="div container-4-2">
              {YSIFData[5]["cost"]?.map((obj, ind) => (
                <TextField
                  label=""
                  variant="outlined"
                  value={obj}
                  type="number"
                  size="small"
                  onChange={(e) => handleYSIFChange(e, 5, ind, "cost")}
                />
              ))}
            </div>
          </div>
          <div className="container-3-2">
            <p>Exclusions</p>
            <div className="div container-4-2">
              {YSIFData[6]["exclusions"]?.map((obj, ind) => (
                <TextField
                  label={obj}
                  variant="outlined"
                  placeholder={obj}
                  size="small"
                  onChange={(e) => handleYSIFChange(e, 6, ind, "exclusions")}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container-5">
          <div className="container-5-1">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Yield Exclude Override"
              />
            </FormGroup>
          </div>

          <div className="container-5-2">
            <p>Totals</p>
          </div>
          <div className="container-5-3">
            <TextField
              label={YSIFData[8]["impressionTotal"]}
              variant="outlined"
              value={YSIFData[8]["impressionTotal"]}
              onChange={(e) => handleTotal(e, 8, "impressionTotal")}
              type="number"
              size="small"
              className="whiteback"
            />
            <TextField
              label={YSIFData[9]["CPMTotal"]}
              variant="outlined"
              value={YSIFData[9]["CPMTotal"]}
              onChange={(e) => handleTotal(e, 9, "CPMTotal")}
              type="number"
              size="small"
              className="whiteback"
            />
            <TextField
              label={YSIFData[10]["costTotal"]}
              variant="outlined"
              value={YSIFData[10]["costTotal"]}
              onChange={(e) => handleTotal(e, 10, "costTotal")}
              type="number"
              size="small"
              className="whiteback"
            />
            <div className="hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesiredBudget;
