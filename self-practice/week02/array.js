// 🔹 1. ผลรวมของสมาชิกในอาร์เรย์
// เขียนฟังก์ชัน sumArray(arr)
// รับอาร์เรย์ตัวเลข แล้วคืนค่าผลรวมของสมาชิกทั้งหมดในอาร์เรย์

function sumArray(arr){
    return arr.reduce((x , y)=> x += y )
}

// 🔹 2. หาค่าเฉลี่ยของอาร์เรย์
// เขียนฟังก์ชัน averageArray(arr)
// คืนค่าเฉลี่ยของตัวเลขทั้งหมดในอาร์เรย์

function averageArray(arr){
    return (arr.reduce((x , y)=> x += y ) / arr.length)
}

// 🔹 3. ลบค่าที่ซ้ำออกจากอาร์เรย์
// เขียนฟังก์ชัน removeDuplicates(arr)
// คืนค่าอาร์เรย์ใหม่ที่ไม่มีตัวซ้ำ

function removeDuplicates(arr){
    for(i of arr){
        counter = 0
        for(let j = 0; j <= arr.length; j++){
            if(i == arr[j]){
                counter += 1
                if(counter > 1){
                    arr.splice(j,1)
                }
            }
        }
    }
    return arr
}

// 🔹 4. รวมอาร์เรย์
// เขียนฟังก์ชัน mergeArrays(arr1, arr2)
// ที่รวมสองอาร์เรย์เข้าด้วยกัน แล้วคืนค่าอาร์เรย์ใหม่

function mergeArrays(arr1, arr2){
    return [...arr1 , ...arr2]
}

// 🔹 5. กลับลำดับอาร์เรย์
// เขียนฟังก์ชัน reverseArray(arr)
// คืนค่าอาร์เรย์ที่สมาชิกถูกเรียงลำดับจากหลังมาหน้า

function reverseArray(arr){
    newArr = []
    n = (arr.length - 1)
    while(n >= 0){
        newArr.push(arr[n])
        n -= 1
    }
    return newArr
}
