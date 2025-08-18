// 🔹 1. แปลงอุณหภูมิ
// เขียนฟังก์ชัน celsiusToFahrenheit(celsius)
// ที่รับค่าเซลเซียสแล้วคืนค่าเป็นฟาเรนไฮต์
// สูตร: F = (C × 9/5) + 32

function celsiusToFahrenheit(celsius){
    return ((celsius * (9 / 5)) + 32)
}

console.log(celsiusToFahrenheit());

// 🔹 2. หาผลรวมของเลข 1 ถึง n
// เขียนฟังก์ชัน sumToN(n)
// ที่คืนค่าผลรวมของตัวเลขตั้งแต่ 1 ถึง n

function sumToN(n){
    total = 0
    for(let i = 1 ; i <= n ; i++){
        total += i
    }
    return total
}

// 🔹 3. เช็คเลขคู่หรือคี่
// เขียนฟังก์ชัน isEven(number)
// คืนค่า true ถ้าเป็นเลขคู่ และ false ถ้าเป็นเลขคี่

function isEven(number){
    return ((number % 2 ) == 0 )
}

// 🔹 4. กลับคำ (String Reverse)
// เขียนฟังก์ชัน reverseString(str)
// ที่รับข้อความแล้วคืนข้อความที่ถูกกลับลำดับตัวอักษร

function reverseString(str){
    word = Array.from(str)
    reverseWord = ""
    n = (word.length) - 1;
    while(n >= 0){
        reverseWord = reverseWord + word[n]
        n -= 1
    }    
    return reverseWord
}

// 🔹 5. หาค่ามากที่สุดในอาร์เรย์
// เขียนฟังก์ชัน findMax(arr)
// รับอาร์เรย์ตัวเลขแล้วคืนค่ามากที่สุด

function findMax(arr){
    max = 0
    for(let i of arr){
        if(i > max){
            max = i
        }
    }
    return max
}

// 🔹 6. นับจำนวนสระในข้อความ
// เขียนฟังก์ชัน countVowels(str)
// คืนค่าจำนวนสระ (a, e, i, o, u) ในสตริง

function countVowels(str){
    word = Array.from(str)
    counter = 0
    for(let i of word){
        if(i.toLowerCase() === 'a' || i.toLowerCase() === 'e' || i.toLowerCase() === 'i' || i.toLowerCase() === 'o' || i.toLowerCase() === 'u'){
            counter += 1 
        }
    }
    return counter
}

// 🔹 7. FizzBuzz
// เขียนฟังก์ชัน fizzBuzz(n)
// - พิมพ์ "Fizz" ถ้าหาร 3 ลงตัว
// - พิมพ์ "Buzz" ถ้าหาร 5 ลงตัว
// - พิมพ์ "FizzBuzz" ถ้าหารทั้ง 3 และ 5 ลงตัว

function fizzBuzz(n){
    return ((n % 3) == 0 && (n % 5) == 0) ? "FizzBuzz" : (n % 3) == 0 ? "Fizz" : (n % 5) == 0 ? "Buzz" : n
}

// 🔹 8. Palindrome Checker
// เขียนฟังก์ชัน isPalindrome(str)
// เช็คว่าสตริงเป็น palindrome หรือไม่
// (อ่านจากซ้ายไปขวาเหมือนอ่านจากขวาไปซ้าย)

function isPalindrome(str){
    word = Array.from(str)
    if(word.length == 1){
        return true
    }
    for(let i = 0; i <= (word.length / 2) ; i++){
        if(word[i] !== word[word.length - i]){
            return false
        }
    }
    return true
}

// 🔹 9. ตัวอักษรที่พบบ่อยที่สุด
// เขียนฟังก์ชัน mostFrequentChar(str)
// หาตัวอักษรที่เจอบ่อยที่สุดในสตริง พร้อมจำนวนครั้งที่เจอ

function mostFrequentChar(str){
    word = Array.from(str)
    highhest = 0
    char = ""
    for(let i of word){
        let counter = 0
        for(j of word){
            if(i.toLowerCase == j){
                counter += 1
            }
        }
        if(counter > highhest){ 
            char = i.toLowerCase
            highhest = counter
        }
    }
    return (highhest , char)
}

// 🔹 10. ตารางสูตรคูณ
// เขียนฟังก์ชัน multiplicationTable(n)
// พิมพ์ตารางสูตรคูณของ n ตั้งแต่ 1 × n ถึง 12 × n

function multiplicationTable(n){
    for(let i = 1 ; i <= 12 ; i++){
        console.log(i + "x" + n + ":" + (i * n));
    }
    return "Done"
}
