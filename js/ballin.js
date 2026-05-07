const yearrs=document.querySelector(".terry-yr")
const monrs=document.querySelector(".terry-mn")
const dayrs=document.querySelector(".terry-dy")

const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")

const today=new Date()

year.max=today.getFullYear()

function limiter(value,el,limit){
    if (Number.isInteger(value)&&(value>0&&value<=limit)){
        console.log("ballin")
    }
}

day.oninput=function hi(value){
    console.log(day.value)
    if(day.value>31){
        console.log("cant go over 31")
        day.value="31"
    }
    console.log(value.data)
}

month.oninput=function hi(value){
    console.log(day.value)
    if(day.value>12){
        console.log("cant go over 12")
        day.value="12"
    }
    console.log(value.data)
}

year.oninput=function hi(value){
    console.log(day.value)
    if(day.value>31){
        console.log("cant go over 31")
        day.value="31"
    }
    console.log(value.data)
}

// for (let element of dob ){
    
//     console.log(element)
//     forEach(element => {
//         console.log(element.id)
//     });
//     element.addEventListener("oninput",function bALLLIN(value){
//         if (element.id=="day"){
//             console.log("thtrjhth")
//         }
//     })

//     // element.oninput=function hi(value){
//     //     if (element.id=="day"){
//     //         console.log("thtrjhth")
//     //     }
//     // }
// }

// function countDays() {
//     const date=new Date(2026,1,6)
//     const today=new Date()
    
// }


