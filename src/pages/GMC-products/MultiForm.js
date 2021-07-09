import React from "react";
import StepZilla from "react-stepzilla";
import BasicDetails from "./Components/Basicdestails";
import Customizes from "./Components/customize";
import CompanyDetails from "./Components/Companydetails";
import GcmSummary from "./Components/Summary";

const MultiStepForm = () => {
  const [classname,setNewClass] = React.useState("next-btn");

  const steps = [
    { name: "Basic Details", component: <BasicDetails /> },
    { name: "Customize", component: <Customizes /> },
    { name: "Company Details", component: <CompanyDetails /> },
    { name: "Summary", component: <GcmSummary /> },
  ];

  const addDynamic = (step) => {
    if (step == 1 || step == 3){
      setNewClass("nextnewbtn")
    }else if(step == 2){
      setNewClass("nextnewbtn1")
    }else{
      setNewClass("next-btn")
    }   
  };
  return (
    <div className="multiforms">
      <StepZilla
        showSteps={true}
        showNavigation={true}
        nextButtonCls={classname}
        onStepChange={(step) => addDynamic(step)}
        steps={steps}
      />
    </div>
  );
};

export default MultiStepForm;
