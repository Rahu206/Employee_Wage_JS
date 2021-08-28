  /**
 * UC7
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
  let empDailyWageMap = new Map();
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
  //calculating the employee wage on total working hours
  let empWage = calculateDailyWage(totalEmpHrs);
  console.log("UC7- Total Days:  " +totalWorkingDays  +  "  Total Hours :  " + totalEmpHrs    +"  Employee wage is :  " + empWage );
    // UC 7A - Total wage by adding daily wage to total wage
    let totEmpWage = 0;
function sum(dailyWage)
   {
	      totEmpWage += dailyWage;
   }
    empDailyWageArr.forEach(sum);
    console.log("Total Days: " +totalWorkingDays +
				"\nTotal Hrs: "+ totalEmpHrs +
				"\nEmp Wage: "+ totEmpWage);

function totalWages(totalWage, dailyWage)
{
	return totalWage + dailyWage;
}
console.log("UC 7A- Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Emp wage earned daily
let dailyCntr = 0;
function mapDayWithWage(dailyWage)
{
	dailyCntr++;
	return "Day:" +dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC 7C - Daily wage for full time workers
function fulltimeWage(dailyWage)
{
return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC 7C  -  Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

// UC 7D - gives first time full time wage was earned
function findFullTimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("UC 7D  -  First time FullTime Wage was Earned on Day: "+
					mapDayWithWageArr.find(findFullTimeWage));

// UC 7E - check all element having full time wage
function isAllFulltimeWage(dailyWage)
{
	return dailyWage.includes("160");
}
console.log("UC 7E - Check all Element have Full Time Wage: "+
					mapDayWithWageArr.every(isAllFulltimeWage));

// UC 7F - if any part time emp wage
function isAnyPartTimeWage(dailyWage)
{
	return dailyWage.includes("80");
}
console.log("UC 7F - Check If Any part Time Wage: "+
					mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Number of days employee worked
function totalDaysWorked(numOfDays, dailyWage)
{
	if(dailyWage > 0) return numOfDays + 1;
	return numOfDays;
}
console.log("UC 7G -  Number of Days Emp Worked: "+
					empDailyWageArr.reduce(totalDaysWorked, 0));

 // UC 8 - calculated total employee wage using map
function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}
console.log("UC 8 -Emp Wage Map totalHrs: "+
Array.from(empDailyWageMap.values()).reduce(totalWages, 0));         