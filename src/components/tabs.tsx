import * as React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import Geographies from "./geographies";
import YSIF from "./ysif";
import AddressableSegment from "./addressableSegment";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className="boxCampaign">
      <div className="campaign">
        <div className="heading">
          <h1 className="headingTypo">Campaign Details</h1>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation="horizontal"
          className="tabs"
        >
          <Tab
            label={`Network Section`}
            {...a11yProps(0)}
            className="tab"
            sx={{ textTransform: "none" }}
          />
          <Tab
            label="Geographies"
            {...a11yProps(1)}
            className="tab"
            sx={{ textTransform: "none" }}
          />
          <Tab
            label="YSIF"
            {...a11yProps(2)}
            className="tab"
            sx={{ textTransform: "none" }}
          />
          <Tab
            label="Addressable Segment"
            {...a11yProps(3)}
            className="tab"
            sx={{ textTransform: "none" }}
          />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        Network Section
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Geographies />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <YSIF />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <AddressableSegment />
      </CustomTabPanel>
    </Box>
  );
}
