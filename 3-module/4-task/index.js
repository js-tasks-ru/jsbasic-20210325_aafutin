function showSalary(users, age) {
  let salaries = '';
  users.forEach(user => {
    if (user.age > age) {
      return;
    }
    if (salaries) {
      salaries += '\n';
    }
    salaries += `${user.name}, ${user.balance}`;
  });
  return salaries;
}
