import React, { useEffect, useState } from "react";
import Searchbar from "../Pages/Searchbar/Searchbar";
import styles from "./../UI/Content.module.css";
import Employee from "./Employee.jsx";
import EmployeeDetail from "../UI/Employee/EmployeeDetail.jsx";
import AddEmployee from "../UI/Employee/AddEmployee.jsx";

const Content = () => {
  const [details, setDetails] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [addEmployee, setAddEmployee] = useState(false);

  useEffect(function () {
    async function getEmployyeDetails() {
      const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";

      const res = await fetch(`/api/v1.0/Employees?apiToken=${apiToken}`, {
        headers: {
          apiToken: apiToken,
        },
      });
      const data = await res.json();
      setDetails(data);
    }

    getEmployyeDetails();
  }, []);

  function handleSeeMore(empNo) {
    setSelectedEmployeeId(empNo);
  }

  function handleBackToList() {
    setSelectedEmployeeId(null);
  }

  function handleAddEmployee() {
    setAddEmployee((add) => !add);
  }

  return (
    <div>
      <div>
        <div className={styles["main-bar"]}>
          <Searchbar />
          <button onClick={handleAddEmployee} className={styles["btn"]}>
            Add a new Employee
          </button>
          {addEmployee && <AddEmployee onClick={handleAddEmployee} />}
        </div>

        {selectedEmployeeId ? (
          <EmployeeDetail
            empId={selectedEmployeeId}
            onBack={handleBackToList}
          />
        ) : (
          <div className={styles["main-container"]}>
            <div className={styles["main-content"]}>
              {details.map((detail) => (
                <Employee
                  key={detail.empNo}
                  detail={detail}
                  onSeeMore={handleSeeMore}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
