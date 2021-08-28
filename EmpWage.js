  /**
 * UC6
 * calculating the wage of an employee till
 * the condition of total working hrs or number of working days
 * @param {*} empCheck : checking employee is present is absent
 * @returns employee working hours
 */

  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS = 4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;
  const NUM_OF_WORKING_DAYS = 20;
  const MAX_HRS_IN_MONTH = 160;

  function getWorkingHours(empCheck) {
    switch (empCheck) {
      case IS_PART_TIME:
        return PART_TIME_HOURS;
      case IS_FULL_TIME:
        return FULL_TIME_HOURS;
      default:
        return 0;
    }
  }
  /**
 * calculating the daily wage and returns it
 * @param {*} empHrs : daily working hrs
 * @returns  daily wage of an employee
 */
function calculateDailyWage(empHrs){
  return empHrs*WAGE_PER_HOUR;
}
  let totalEmpHrs = 0;
  let totalWorkingDays= 0;
  // creating an array to store the daily wage of an employee
let empDailyWageArr = new Array();
  while (
    totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS
  ) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
  //pushing the daily wage to an array
   empDailyWageArr.push(calculateDailyWage(empHrs));
  }
  let empWage = calculateDailyWage(totalEmpHrs);
  console.log("Total Days:  " +totalWorkingDays  +  "  Total Hours :  " + totalEmpHrs    +"  Employee wage is :  " + empWage );