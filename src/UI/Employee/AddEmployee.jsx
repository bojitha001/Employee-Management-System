import React, { useState } from "react";
import styles from "../../UI/Employee/AddEmployee.module.css";

const AddEmployee = ({ onClick }) => {
  async function addEmployeDetails(employeData) {
    const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";

    try {
      const res = await fetch(`/api/v1.0/Employees?apiToken=${apiToken}`, {
        method: "POST",
        headers: {
          apiToken: apiToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employeData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Failed to add employee:", errorData);
        alert("Failed to add employee. Please check console for details.");
      } else {
        alert("Employee added successfully!");
        // Optionally clear form or trigger other UI updates here
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      alert("Network error or server not reachable.");
    }
  }

  const [formData, setFormData] = useState({
    empNo: "",
    empName: "",
    empAddressLine1: "",
    empAddressLine2: "",
    empAddressLine3: "",
    departmentCode: "",
    dateOfJoin: "",
    dateOfBirth: "",
    basicSalary: "",
    isActive: false,
  });

  function handleAddSubmit(event) {
    event.preventDefault();
    addEmployeDetails(formData);
  }

  return (
    <div className={styles["main-contnent"]}>
      <div className={styles["input-forms"]}>
        <form className={styles["input-forms"]} onSubmit={handleAddSubmit}>
          <input
            placeholder="empNo"
            className={styles["input"]}
            type="text"
            value={formData.empNo}
            onChange={(e) =>
              setFormData({ ...formData, empNo: e.target.value })
            }
            required
          />
          <input
            placeholder="empName"
            className={styles["input"]}
            type="text"
            value={formData.empName}
            onChange={(e) =>
              setFormData({ ...formData, empName: e.target.value })
            }
            required
          />
          <input
            placeholder="empAddressLine1"
            className={styles["input"]}
            type="text"
            value={formData.empAddressLine1}
            onChange={(e) =>
              setFormData({ ...formData, empAddressLine1: e.target.value })
            }
          />
          <input
            placeholder="empAddressLine2"
            className={styles["input"]}
            type="text"
            value={formData.empAddressLine2}
            onChange={(e) =>
              setFormData({ ...formData, empAddressLine2: e.target.value })
            }
          />
          <input
            placeholder="empAddressLine3"
            className={styles["input"]}
            type="text"
            value={formData.empAddressLine3}
            onChange={(e) =>
              setFormData({ ...formData, empAddressLine3: e.target.value })
            }
          />
          <input
            placeholder="departmentCode"
            className={styles["input"]}
            type="text"
            value={formData.departmentCode}
            onChange={(e) =>
              setFormData({ ...formData, departmentCode: e.target.value })
            }
            required
          />
          <input
            placeholder="dateOfJoin"
            className={styles["input"]}
            type="date"
            value={formData.dateOfJoin}
            onChange={(e) =>
              setFormData({ ...formData, dateOfJoin: e.target.value })
            }
            required
          />
          <input
            placeholder="dateOfBirth"
            className={styles["input"]}
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) =>
              setFormData({ ...formData, dateOfBirth: e.target.value })
            }
            required
          />
          <input
            placeholder="basicSalary"
            className={styles["input"]}
            type="number"
            value={formData.basicSalary}
            onChange={(e) =>
              setFormData({ ...formData, basicSalary: e.target.value })
            }
            required
          />
          <label className={styles["checkbox-label"]}>
            <input
              type="checkbox"
              checked={formData.isActive}
              onChange={(e) =>
                setFormData({ ...formData, isActive: e.target.checked })
              }
            />
            Active
          </label>

          <button type="submit" className={styles["btn"]}>
            Add Employee
          </button>
          <button type="button" onClick={onClick} className={styles["btn"]}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
