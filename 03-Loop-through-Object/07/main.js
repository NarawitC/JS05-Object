const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } },
};

let employeeName = prompt('Enter your name');
if (employeeName in employees) {
  console.log(`Name: ${employeeName}, salary: ${employees[employeeName].salary}, address: ${employees[employeeName].address.district}, ${employees[employeeName].address.province}`);
} else {
  console.log('Not Found');
}
