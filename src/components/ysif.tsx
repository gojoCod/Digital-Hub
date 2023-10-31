import "./ysif.css";
import DesiredBudget from "./desiredBudget";
import BackToOrder from "./backToOrder";
import ProductType from "./productType";
export default function YSIF() {
  return (
    <div className="ysif">
      <BackToOrder />
      <div className="inptField">
        <ProductType />
        <DesiredBudget />
      </div>
    </div>
  );
}
