import React from "react";
import StepZilla from "react-stepzilla";
import PremiumDetails from "../Investment/Forms/PremiumDetails";
import AdditonalDetails from "./Forms/AdditonalDetails";
import Documents from "./Forms/Documents";
import OtherDetails from "./Forms/OtherDetails";
import QuickQuote from "./Forms/QuickQuote";

const MultiStepForm = () => {
  const steps = [
    { name: "Quick Quote", component: <QuickQuote /> },
    { name: "Additional Details", component: <AdditonalDetails /> },
    { name: "Premium Details", component: <PremiumDetails /> },
    { name: "Other Details", component: <OtherDetails /> },
    { name: "Documents", component: <Documents /> },
  ];
  return (
    <div>
      <StepZilla showSteps={true} showNavigation={true} steps={steps} />
    </div>
  );
};

export default MultiStepForm;
