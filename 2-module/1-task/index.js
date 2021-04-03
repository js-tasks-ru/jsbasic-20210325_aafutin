function sumSalary(salaries) {
  let salariesSum = 0;
  for (const [key, salary] of Object.entries(salaries)) {
    if (!isFinite(salary)) {
      continue;
    }
    salariesSum += salary;
  }
  return salariesSum;
}
