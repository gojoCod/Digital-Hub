import "./productType.css";
import { TextField } from "@mui/material";
function ProductType() {
  return (
    <div className="pt">
      <p>Product Type</p>
      <TextField
        label=""
        variant="outlined"
        value="Default Ads Everywhere Campaign"
        type="text"
        size="small"
        className="ptTextField"
      />
    </div>
  );
}

export default ProductType;
