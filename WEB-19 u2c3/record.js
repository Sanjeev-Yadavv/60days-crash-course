// fill in javascript code here

let Name = document.getElementById('name')
let employeeID = document.getElementById('employeeID')
let department = document.getElementById('department')
let exp = document.getElementById('exp')
let mobile = document.getElementById('mbl')
let email = document.getElementById('email')
let form = document.querySelector('form')



function getData(){
    let arr = JSON.parse(localStorage.getItem("records")) || [];

    let obj = {
        name : Name.value,
        employeeID : employeeID.value,
        department : department.value,
        exp : exp.value,
        mobile : mobile.value,
        email : email.value
    }
    arr.push(obj)
    console.log(arr)
    arr = localStorage.setItem("records", JSON.stringify(arr))
   showData()
}

let tbody = document.querySelector('tbody')
function showData(){
    let arr = JSON.parse(localStorage.getItem("records")) || []
     tbody.innerHTML = ""
    
     arr.forEach(function(ele,index){
       let role;
       if(ele.exp>5){
        role = "Senior"
       }
       else if(ele.exp<=5 && ele.exp>=2){
        role = "Junior"
       }
       else {
        role = "Fresher"
       }

       let tr = document.createElement('tr')
       let td1 = document.createElement('td')
       td1.innerHTML = ele.name
       let td2 = document.createElement('td')
       td2.innerHTML = ele.employeeID
       let td3 = document.createElement('td')
       td3.innerHTML = ele.department
       let td4 = document.createElement('td')
       td4.innerHTML = ele.exp
       let td5 = document.createElement('td')
       td5.innerHTML = ele.email
       let td6 = document.createElement('td')
       td6.innerHTML = ele.mobile
       let td7 = document.createElement('td')
       td7.innerHTML = role
       let btn = document.createElement('button')
       btn.innerHTML = "Delete"
       btn.addEventListener("click",function(){
        console.log('hello')
        deleteRow(ele.employeeID)
       })
       let td8 = document.createElement('td')
       td8.append(btn)

       tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
       tbody.append(tr)
     })


}

function deleteRow(del){
    let arr = JSON.parse(localStorage.getItem("records")) || []
    arr = arr.filter(function(ele,index){
        return ele.employeeID!= del
    })
    localStorage.setItem("records", JSON.stringify(arr))
    showData()
}



























form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log("submitted")
    getData()
})

