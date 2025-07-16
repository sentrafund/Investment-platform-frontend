import InvestmentPlanCard from "./InvestmentCard";
import InvestmentForm from "./InvestmentForm";

function DepositTab() {
  return (
    <div className="px-4 py-6 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-start md:items-center gap-6">
      <div className="w-full md:w-1/2 max-w-[90%] md:max-w-md lg:max-w-lg">
        <InvestmentPlanCard />
      </div>
      <div className="w-full md:w-1/2 max-w-[90%] md:max-w-md lg:max-w-lg">
        <InvestmentForm />
      </div>
    </div>
  );
}

export default DepositTab;
