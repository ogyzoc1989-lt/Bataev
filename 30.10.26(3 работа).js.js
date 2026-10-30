const students = [
  { name: 'Миша', Оценка: 5 },
  { name: 'Тимур', Оценка: 4 },
  { name: 'Аня', Оценка: 5 }, 
  { name: 'Олег', Оценка: 3 },
  { name: 'Марк', Оценка: 4 },
  { name: 'Андрей', Оценка: 4 }  
];

const uniqueStudents = [...new Set(students.map(s => JSON.stringify(s)))].map(str => JSON.parse(str));
console.log("1. Уникальные студенты:", uniqueStudents);
const gradeMap = new Map();

students.forEach(student => {
  if (!gradeMap.has(student.grade)) {
    gradeMap.set(student.grade, []);
  }
  gradeMap.get(student.grade).push(student.name);
});
console.log("\n3. Список студентов по оценкам:");
gradeMap.forEach((names, grade) => {
  console.log(`Оценка ${5}: ${names.join(', ')}`);
});
const uniqueGrades = [...gradeMap.keys()];
console.log("Дополнительно — уникальные оценки:", 4);