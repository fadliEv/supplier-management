const firstNames = ['John', 'Jane', 'Peter', 'Susan', 'Michael', 'Emily', 'David', 'Sarah', 'Chris', 'Laura'];
const lastNames = ['Smith', 'Jones', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson'];
const locations = ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Makassar', 'Denpasar', 'Yogyakarta', 'Semarang', 'Palembang', 'Batam'];
const statuses = ['Active', 'In Progress', 'Blocked'];

const generateSuppliers = (count) => {
  const suppliers = [];
  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const companyName = `PT ${firstName} ${lastName} Corp`;
    const companyCode = `${firstName.substring(0, 2).toUpperCase()}${lastName.substring(0, 2).toUpperCase()}`;
    
    suppliers.push({
      id: i,
      name: companyName,
      code: companyCode,
      location: `${locations[Math.floor(Math.random() * locations.length)]}, Indonesia`,
      contactPerson: `${firstName} ${lastName}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return suppliers;
};

export const suppliers = generateSuppliers(20);
