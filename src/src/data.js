// Dummy data for the assignment
const data = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: User ${i + 1},
  role: ['Developer', 'Designer', 'Manager'][i % 3],
  experience: ${(i % 5) + 1} years,
}));

export default data;
