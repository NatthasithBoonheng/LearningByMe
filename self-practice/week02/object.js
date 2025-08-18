// 🔹 1. เข้าถึง property ของ object
// ให้ object นักเรียน เช่น { name: "Ann", age: 20, grade: "A" }
// เขียนฟังก์ชัน getStudentName(student)
// ที่คืนค่า name ของนักเรียน

let Natthasith = {name : "Mix" , age : 19 , grade: "A"}

function getStudentName(student) {
    return student.name
}


// 🔹 2. เพิ่ม property เข้า object
// เขียนฟังก์ชัน addProperty(obj, key, value)
// ที่รับ object, key และ value
// แล้วคืน object ที่มี property ใหม่นั้นเพิ่มเข้ามา

function addProperty(obj, key, value){
    obj[key] = value
    return obj
}

// 🔹 3. นับจำนวน property ใน object
// เขียนฟังก์ชัน countProperties(obj)
// ที่คืนค่าจำนวน property ทั้งหมดใน object

function countProperties(obj){
    return Object.keys(obj).length
}

// 🔹 4. รวม object สองตัว
// เขียนฟังก์ชัน mergeObjects(obj1, obj2)
// ที่รวม property ของ obj2 เข้ากับ obj1
// ถ้ามี key ซ้ำ ให้ค่าใน obj2 ทับของ obj1

function mergeObjects(obj1, obj2){
    return {...obj1 , ...obj2}
}

// 🔹 5. แปลง object เป็น array ของ key
// เขียนฟังก์ชัน keysToArray(obj)
// ที่คืนค่า array ของ key ทั้งหมดใน object

function keysToArray(obj){
    return Object.keys(obj)
}

// 🔹 6. แสดงชื่อ property ทั้งหมด
// เขียนฟังก์ชัน listKeys(obj)
// ที่คืนค่า array ของชื่อ key ทั้งหมดใน object

function listKeys(obj){
    return Object.keys(obj)
}