// ข้อ 1: applyOperation

// เขียนฟังก์ชัน applyOperation(a, b, operation) ที่รับตัวเลข 2 ตัว และฟังก์ชัน operation
// แล้วให้ applyOperation คืนค่าผลลัพธ์จากการทำงานของ operation(a, b)

function applyOperation(a,b,operation){
    return operation(a,b)
}

console.log(applyOperation(2,1,(a,b)=>a+b));

// ข้อ 2: filterArray

// เขียนฟังก์ชัน filterArray(arr, callback) ที่รับอาร์เรย์ arr และฟังก์ชัน callback
// แล้วคืนค่าอาร์เรย์ใหม่ที่เก็บเฉพาะค่าที่ callback คืนค่าเป็น true

function filterArray(arr,callback){
    return arr.filter(callback)
}

console.log(filterArray([1,2,3,4,5],(x)=>(x % 2) == 0));

// ข้อ 3: doTwice

// เขียนฟังก์ชัน doTwice(fn) ที่รับฟังก์ชัน 1 ตัว แล้วทำการเรียกใช้งานฟังก์ชันนั้น 2 ครั้ง

function doTwice(fn){
    fn()
    fn()
}
function speak(){
    console.log("Hello");
}

doTwice(speak)

// ข้อ 4: mapArray

// เขียนฟังก์ชัน mapArray(arr, callback) ที่รับอาร์เรย์และฟังก์ชัน callback
// แล้วคืนค่าอาร์เรย์ใหม่ที่แต่ละค่าคือผลจาก callback(element)

function mapArray(arr,callback){
    return arr.map(callback)
}

console.log(mapArray([1,2,3,4,5],(x)=>x*2));

// ข้อ 5: compose

// เขียนฟังก์ชัน compose(f, g) ที่รับฟังก์ชัน 2 ตัว และคืนค่าฟังก์ชันใหม่
// โดยฟังก์ชันใหม่จะทำงาน g ก่อน แล้วค่อยส่งผลลัพธ์ไปให้ f

function compose(f, g){
    return f(g())
}