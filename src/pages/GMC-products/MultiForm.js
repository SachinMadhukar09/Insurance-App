import React from "react";
import StepZilla from "react-stepzilla";
import BasicDetails from "./Components/Basicdestails";
import Customizes from "./Components/customize";
import CompanyDetails from "./Components/Companydetails";
import GcmSummary from "./Components/Summary";

const MultiStepForm = (props) => {
  const [classname, setNewClass] = React.useState("next-btn");
  const [details, setDetails] = React.useState({});
  const [employee, setEmployee] = React.useState("");

  const setEmplDetails = (details) => {
    setDetails(details);
  };
  const setEmployees = (employees) => {
    setEmployee(employees);
  };

  const steps = [
    {
      name: "Basic Details",
      component: <BasicDetails setEmployees={setEmployees} />,
    },
    {
      name: "Customize",
      component: (
        <Customizes
          totalEmployees={employee}
          setdetails={setEmplDetails}
        />
      ),
    },
    { name: "Company Details", component: <CompanyDetails memberdetails={details}/> },
    { name: "Summary", component: <GcmSummary memberdetails={details}/> },
  ];

  const addDynamic = (step) => {
    if (step == 1 || step == 3) {
      setNewClass("nextnewbtn");
    } else if (step == 2) {
      setNewClass("nextnewbtn1");
    } else {
      setNewClass("next-btn");
    }
  };
  return (
    <div className="multiforms">
      <StepZilla
        showSteps={true}
        showNavigation={false}
        // nextButtonCls={classname}
        onStepChange={(step) => addDynamic(step)}
        steps={steps}
      />
    </div>
  );
};

export default MultiStepForm;
