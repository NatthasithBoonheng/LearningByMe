// 1. addProperty
// เขียนฟังก์ชัน addProperty(obj, key, value) ที่ทำการเพิ่ม property ใหม่เข้าไปใน object และคืนค่า object ที่ถูกอัปเดต
 
function addProperty(obj,key,value){
    obj[key] = value
}
// Test:
// console.log(addProperty({ name: 'John' }, 'age', 25))
// // { name: 'John', age: 25 }
// console.log(addProperty({}, 'city', 'New York'))
// // { city: 'New York' }
 
// --------------------------------------------------
// 2. mergeObject
// เขียนฟังก์ชัน mergeObject(obj1, obj2) ที่รวมสอง object เข้าด้วยกันและคืนค่า object ที่รวมแล้ว
 
function mergeObject(obj1,obj2){
    return [...obj1,...obj2]
}
 
// Test:
// console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
// // { name: 'John', age: 25, city: 'New York' }
// console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
// // { name: 'Jane', age: 30, country: 'USA' }
 
// --------------------------------------------------
// 3. getFreqOfWords
// เขียนฟังก์ชัน getFreqOfWords(sentence) ที่คืนค่าเป็น object โดย key คือคำที่ไม่ซ้ำกัน (เปลี่ยนเป็น lowercase ทั้งหมด) และ value คือจำนวนครั้งที่คำนั้นปรากฏ โดยไม่สนตัวพิมพ์เล็ก/ใหญ่ หาก input เป็น null หรือ undefined ให้คืนค่า undefined
 
function getFreqOfWords(sentence){
    if(!sentence){return undefined}
    Arr = (sentence.split(" ")).map((x)=>x.toLowerCase)
    obj = {}
    for(i of Arr){
        if(!Object.keys(obj).includes(i)){
            obj[i] = 1
        }else{
            obj[i] += 1
        }
    }return obj
}
 
// Test:
// console.log(getFreqOfWords('Today is present and present is your gift'))
// // { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
// console.log(getFreqOfWords('Do you best just do it'))
// // { do: 2, you: 1, best: 1, just: 1, it: 1 }
// console.log(getFreqOfWords(null))
// // undefined
// console.log(getFreqOfWords(undefined))
// // undefined
 
// --------------------------------------------------
// 4. extractAndRename
// เขียนฟังก์ชัน extractAndRename(obj) ที่ดึง property name และ age ออกมา เปลี่ยนชื่อเป็น fullName และ yearsOld แล้วคืนค่า object ใหม่
 
function extractAndRename(obj){
    return { "fullName": obj.name , "yearsOld": obj.age }
}
 
// Test:
// console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
// // { fullName: 'John', yearsOld: 25 }
// console.log(extractAndRename({ name: 'Jane', age: 30 }))
// // { fullName: 'Jane', yearsOld: 30 }
 
// --------------------------------------------------
// 5. mergeAndDestructure
// เขียนฟังก์ชัน mergeAndDestructure(obj1, obj2) ที่รวมสอง object ด้วย spread operator แล้ว destructure object ที่รวมมาเพื่อดึง property บางอย่าง
 
function mergeAndDestructure(obj1,obj2){
    let obj = {...obj1,...obj2}
    return {'name' : obj.name ,'age' : obj.age}
}
 
// Test:
// console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
// // { name: 'John', age: 25 }
// console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
// // { name: 'Jane', age: 30 }
 
// --------------------------------------------------
// 6. removeDuplicateWords
// เขียนฟังก์ชัน removeDuplicateWords(sentence) ที่รับ string และคืนค่า string ใหม่ที่ลบคำซ้ำออก โดยคงลำดับการเกิดครั้งแรกไว้ ฟังก์ชันต้องไม่สนตัวพิมพ์เล็ก/ใหญ่ แต่ผลลัพธ์ต้องคงรูปแบบการเขียนเดิม หาก input เป็น null, undefined หรือ string ว่าง ให้คืน string ว่าง
 
function removeDuplicateWords(sentence){
    arr = sentence.split(" ")
    arr2 = []
    for(i of arr){
        if( !(arr2.map((x)=>x.toLowerCase())).includes(i.toLowerCase()) ){
            arr2.push(i)
        }
    }
    return arr2.join(" ")
}
 
// Test:
console.log(removeDuplicateWords("This is a test This test is easy."))  
// // "This is a test easy."
// console.log(removeDuplicateWords("Hello hello HELLO world!"))
// // "Hello world!"
// console.log(removeDuplicateWords("One two two three three three"))
// // "One two three"
// console.log(removeDuplicateWords(""))
// // ""
// console.log(removeDuplicateWords(null))
// // ""
 
// --------------------------------------------------
// 7. findValue
// เขียนฟังก์ชัน findValue(arr) ที่รับ array ของตัวเลข และคืนค่าเป็น object ที่ประกอบด้วย
// - min: ค่าต่ำสุด
// - max: ค่าสูงสุด
// - sum: ผลรวมทั้งหมด
// - avg: ค่าเฉลี่ย
 
function findValue(arr){
    return { "min" : (arr.sort())[0] , "max" : (arr.sort())[arr.length - 1], "sum": arr.reduce((x,y)=>x+y),"avg": arr.reduce((x,y)=>x+y) / arr.length }
}
 
// Test:
// console.log(findValue([1, 2, 3, 4, 5]))
// // { min: 1, max: 5, sum: 15, avg: 3 }
 
// --------------------------------------------------
// 8. convertToUppercase
// เขียนฟังก์ชัน convertToUppercase(arr) ที่รับ array ของ string และคืน array ใหม่ที่แปลง string ทั้งหมดเป็นตัวพิมพ์ใหญ่
 
function convertToUppercase(arr){
    return arr.map(x => x.toUpperCase())
}
 
// Test:
// console.log(convertToUppercase(['hello', 'world']))
// // ['HELLO', 'WORLD']
// console.log(convertToUppercase(['javascript', 'is', 'fun']))
// // ['JAVASCRIPT', 'IS', 'FUN']
 
// --------------------------------------------------
// 9. findMax
// เขียนฟังก์ชัน findMax(arr) ที่รับ array ของตัวเลข และคืนค่าตัวเลขที่มากที่สุด โดยใช้ reduce
 
function findMax(arr){
    return arr.reduce((x,y)=> x > y ? x : y)
}
 
// Test:
// console.log(findMax([1, 2, 3, 4]))
// // 4
// console.log(findMax([10, 5, 8, 7]))
// // 10
 
// --------------------------------------------------
// 10. removeFalsyValues
// เขียนฟังก์ชัน removeFalsyValues(arr) ที่รับ array และคืนค่า array ใหม่ที่ลบค่าที่เป็น falsy ออกไป (0, string ว่าง, false, null, undefined)
 
function removeFalsyValues(arr){
    return arr.filter((x) => x !== 0 && x !== false && x !== null)
}
 
// // Test:
// console.log(removeFalsyValues([0, 1, false, 2, '', 3]))
// // // [1, 2, 3]
// console.log(removeFalsyValues(['a', '', 'b', null, 'c']))
// // // ['a', 'b', 'c']
// console.log(removeFalsyValues([null, undefined, 'A']))
// // // ['A']
 
// --------------------------------------------------
// 11. doubleAndFilterEvenNumbers
// เขียนฟังก์ชัน doubleAndFilterEvenNumbers(arr) ที่รับ array ของตัวเลข กรองเอาเฉพาะเลขคู่ และคืน array ใหม่ที่ตัวเลขเหล่านั้นถูกคูณสอง
 
function doubleAndFilterEvenNumbers(arr){
    return (arr.filter(x => x % 2 == 0)).map(x=>x*2)
}
 
// Test:
// console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]))
// // [4, 8]
// console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]))
// // [12, 16]
 
// --------------------------------------------------
// 12. filterEvenNumbers
// เขียนฟังก์ชัน filterEvenNumbers(arr) ที่รับ array ของตัวเลข และคืน array ใหม่ที่มีเฉพาะตัวเลขคู่
 
function filterEvenNumbers(arr){
    return arr.filter(x=>x%2==0)
}
 
// Test:
// console.log(filterEvenNumbers([1, 2, 3, 4]))
// // [2, 4]
// console.log(filterEvenNumbers([5, 6, 7, 8]))
// // [6, 8]
 
// --------------------------------------------------
// 13. populateArray
// เขียนฟังก์ชัน populateArray(length, value) ที่สร้าง array ความยาวตามที่กำหนด และเติมค่า value ลงไปในทุกตำแหน่ง
 
function populateArray(length,value){
    return new Array(length).fill(value)
}
 
// Test:
// console.log(populateArray(3, 'a'))
// // ['a', 'a', 'a']
// console.log(populateArray(5, 0))
// // [0, 0, 0, 0, 0]
 
// --------------------------------------------------
// 14. squareNumbers
// เขียนฟังก์ชัน squareNumbers(arr) ที่รับ array ของตัวเลข และคืน array ใหม่ที่เป็นค่ากำลังสองของแต่ละตัว
 
function squareNumbers(arr){
    return arr.map(x=>x*x)
}
 
// Test:
// console.log(squareNumbers([1, 2, 3, 4]))
// // [1, 4, 9, 16]
// console.log(squareNumbers([5, 6]))
// // [25, 36]
 
// --------------------------------------------------
// 15. processNumbers
// เขียนฟังก์ชัน processNumbers(arr) ที่รับ array ของตัวเลข ทำการยกกำลังสองตัวเลขแต่ละตัว กรองเอาเฉพาะเลขคี่ แล้วคืนค่าผลรวมของตัวเลขที่เหลือ
 
function processNumbers(arr){
    return ((arr.filter(x=>x%2!==0)).map(x=> x*x)).reduce((x,y)=> x+y)
}
 
// Test:
console.log(processNumbers([1, 2, 3, 4]))
// // 10 (1^2 + 3^2)
console.log(processNumbers([5, 6, 7, 8]))
// // 74 (5^2 + 7^2)
// """
 
 
 
 