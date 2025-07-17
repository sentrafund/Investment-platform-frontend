import InvestmentPlanCard from "./InvestmentCard";
import InvestmentForm from "./InvestmentForm";

function DepositTab() {
  return (
    <div className="rounded-lg shadow-md flex justify-center items-center flex-wrap">
      <InvestmentPlanCard />
      <InvestmentForm />
    </div>
  );
}

export default DepositTab;
