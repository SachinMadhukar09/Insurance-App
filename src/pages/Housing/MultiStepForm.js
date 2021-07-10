import React from "react";
import StepZilla from "react-stepzilla";
import AdditonalDetails from "./Forms/AdditonalDetails";
import Documents from "./Forms/Documents";
import OtherDetails from "./Forms/OtherDetails";
import PremiumDetails from "./Forms/PremiumDetails";
import QuickQuote from "./Forms/QuickQuote";

const MultiStepForm = () => {
  const [classname, setNewClass] = React.useState("newnextbtn1");
  const [btntext, setButtonText] = React.useState("next");

  const addDynamic = (step) => {
    if (step == 1) {
      setButtonText("Calculate Premium");
    } else if (step == 2) {
      setNewClass("newnextbtn1");
      setButtonText("next");
    } else if (step == 3) {
      setNewClass("newnextbtn1");
      setButtonText("next");
    }
  };

  const steps = [
    { name: "Quick Quote", component: <QuickQuote /> },
    { name: "Additional Details", component: <AdditonalDetails /> },
    { name: "Premium Details", component: <PremiumDetails /> },
    { name: "Other Details", component: <OtherDetails /> },
    { name: "Documents", component: <Documents /> },
  ];
  return (
    <div>
      <StepZilla
        showSteps={true}
        showNavigation={true}
        steps={steps}
        nextButtonCls={classname}
        onStepChange={(step) => addDynamic(step)}
        nextButtonText={btntext}
      />
    </div>
  );
};

export default MultiStepForm;
