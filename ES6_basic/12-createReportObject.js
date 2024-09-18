export default function createReportObject(employeesList) {

  let object = {

  allEmployees: { ...employeesList },
  getNumberOfDepartments(allEmployees) {
    return Object.keys(allEmployees).length;
  }
  }

  return object

}
