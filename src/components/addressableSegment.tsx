import { TextField } from "@mui/material";
import ProductType from "./productType";
import AddressableInterests from "./addressableInterests";
import "./addressableSegment.css";
import BackToOrder from "./backToOrder";
import infoIcon from "../imgs/infoIcon.svg";

function AddressableSegment() {
  return (
    <div className="addressableSegment">
      <BackToOrder />
      <ProductType />
      <AddressableInterests />
      <div className="audienceProfile">
        <p className="audProfile">
          Audience Profile
          <span>
            <img src={infoIcon} alt="info" title="Dumm Text" />
          </span>
        </p>
        <TextField
          label=""
          variant="outlined"
          placeholder="Text.."
          value=""
          type="text"
          size="small"
          className="audTypeTF"
        />
      </div>
    </div>
  );
}

export default AddressableSegment;
