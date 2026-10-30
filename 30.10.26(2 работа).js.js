const phoneBook = new Map();
phoneBook.set('Шубарев', '+7-900-178-23-13');
phoneBook.set('Конохов', '+7-900-434-45-65');
phoneBook.set('Голубцов', '+7-999-457-08-69');
console.log("Номер Конохова:", phoneBook.get('Конохов'));

phoneBook.delete('Sidorov'); 

console.log("Итоговый размер справочника:", phoneBook.size);
console.log("Есть ли Конохов в справочнике:", phoneBook.has('Конохов')); // false
const employeeNames = [...phoneBook.keys()];
console.log("Массив всех сотрудников:", employeeNames);
console.log("Все записи в справочнике:");
phoneBook.forEach(function(phone, name) {
  console.log(`${name}: ${phone}`);
});