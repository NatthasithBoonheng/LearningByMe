// 🟢 ระดับง่าย (พื้นฐาน)

// สร้างอาร์เรย์เก็บตัวเลข 5 ตัว แล้วเขียนโค้ดหาความยาว (length) ของอาร์เรย์นั้น

function findLength(arr){
    return arr.length
}

// เขียนฟังก์ชัน sumArray(arr) ที่รับอาร์เรย์ตัวเลขและคืนค่าผลรวมของทุกตัว

function sumArray(arr){
    return arr.reduce((x,y)=> x + y ,0)
}

// ใช้ .map() แปลงอาร์เรย์ [1, 2, 3, 4] ให้เป็น [2, 4, 6, 8]

let Nums1 = [1,2,3,4,5]
Num1.map((x)=>x*2)

// ใช้ .filter() หาเลขคู่จากอาร์เรย์ [5, 6, 7, 8, 9, 10]

let Nums2 = [5,6,7,8,9,10]
Nums2.filter((x)=>x%2 == 0 )

// ใช้ .find() หาตัวเลขแรกที่มากกว่า 50 ในอาร์เรย์ [10, 20, 55, 60, 40]

[10,20,55,60,40].find((x)=> x > 50)

// 🟡 ระดับกลาง (Object & Function)

// สร้าง object student ที่มี property name, age, และ grade จากนั้นเขียนโค้ดเข้าถึงค่า grade

let student = {
    name : "Natty",
    age : 26,
    grade : 6
}
student.grade

// เพิ่ม property email เข้าไปใน object student ที่สร้างไว้ในข้อ 6

student.email = "Natty12345@gmail.com"

// เขียนฟังก์ชัน isAdult(person) ที่รับ object ที่มี property age และคืนค่า true ถ้าอายุมากกว่า 18

function isAdult(person){
    return person.age > 18
}

// เขียนฟังก์ชัน getKeys(obj) ที่คืนค่าเป็นอาร์เรย์ของชื่อ key ทั้งหมดใน object

function getKeys(obj){
    return obj.keys()
}

// เขียนฟังก์ชัน mergeObjects(obj1, obj2) ที่รวม object 2 ตัวเข้าด้วยกัน

function mergeObjects(obj1, obj2){
    return {...obj1,...obj2}
} // IMPORTANT ALERT เพราะลืมบ่อยนะอันนี้ ****

// 🟠 ระดับท้าทาย (Callback & Higher Order Function)

// เขียนฟังก์ชัน applyOperation(a, b, operation) ที่รับฟังก์ชัน operation มาทำงานกับตัวเลข 2 ตัว

function applyOperation(a, b, operation){
    return operation(a,b)
}

// เขียนฟังก์ชัน doTwice(fn) ที่รับฟังก์ชันหนึ่งตัวแล้วเรียกมัน 2 ครั้ง

function doTwice(fn){
    fn()
    fn()
}

// เขียนฟังก์ชัน mapArray(arr, callback) ที่ทำงานคล้าย .map()

function mapArray(arr, callback){
    let mapped = []
    for(let i of arr){
        mapped.push((callback)(i))
    }
    return mapped
}

// เขียนฟังก์ชัน filterArray(arr, callback) ที่ทำงานคล้าย .filter()

function filterArray(arr, callback){
    let filted = []
    for(let i of arr){
        filted.push((callback)(i))
    }
    return filted
}

// เขียนฟังก์ชัน compose(f, g) ที่รับ 2 ฟังก์ชันแล้วคืนค่าเป็นฟังก์ชันใหม่ (เอา g ทำก่อน แล้วส่งต่อให้ f)

function compose(f, g){
    return f(g())
}

