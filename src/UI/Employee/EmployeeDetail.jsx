import React, { useEffect, useState } from "react";
import styles from "../../UI/Employee/EmployeeDetail.module.css";

const EmployeeDetails = ({ empId, onBack }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployeeById() {
      const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";

      const res = await fetch(`/api/v1.0/Employee/${empId}`, {
        headers: {
          apiToken: apiToken,
        },
      });
      const data = await res.json();
      setEmployee(data);
    }

    fetchEmployeeById();
  }, [empId]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );
    if (!confirmDelete) return;

    try {
      const apiToken = "?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf";
      const res = await fetch(`/api/v1.0/Employee/${empId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          apiToken: apiToken,
        },
      });

      if (res.ok) {
        alert("Employee deleted successfully.");
        onBack(); // Go back after deletion
      } else {
        const errorData = await res.json();
        console.error("Failed to delete:", errorData);
        alert("Failed to delete employee.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("An error occurred while deleting.");
    }
  };

  if (!employee) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button className={styles.editButton}>Edit Employee</button>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Delete Employee
        </button>
      </div>

      <div className={styles.header}>
        <div className={styles.profileImage}></div>
        <div className={styles.employeeName}>{employee.empName}</div>
      </div>

      <div className={styles.sectionTitle}>
        Personal Information{" "}
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </div>

      <div className={styles.detailsList}>
        <p>
          <strong>Emp No:</strong> {employee.empNo}
        </p>
        <p>
          <strong>Name:</strong> {employee.empName}
        </p>
        <p>
          <strong>Department:</strong> {employee.departmentCode}
        </p>
        <p>
          <strong>Date of Join:</strong> {employee.dateOfJoin}
        </p>
        <p>
          <strong>Date of Birth:</strong> {employee.dateOfBirth}
        </p>
        <p>
          <strong>Basic Salary:</strong> {employee.basicSalary}
        </p>
        <p>
          <strong>Activity:</strong> {employee.isActive}
        </p>
      </div>

      <button className={styles.exitButton} onClick={onBack}>
        Exit
      </button>
    </div>
  );
};

export default EmployeeDetails;
