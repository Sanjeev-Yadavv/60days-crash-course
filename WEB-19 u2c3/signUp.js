let form = document.querySelector('form')
let Name = document.querySelector('#name')
let role = document.querySelector('#role')
let password = document.querySelector('#password')

form.addEventListener("submit", function(e){
    e.preventDefault()
    // console.log("submitted")
    getData()
  
})

function getData(){
    let arr = JSON.parse(localStorage.getItem("name"))|| [];
    let obj = {
        name : Name.value,
        role : role.value,
        password : password.value
    }
    arr.push(obj)
    // console.log(arr)
    arr = localStorage.setItem("name",JSON.stringify(arr))
    alert('you have loged in successfully')
    form.reset()
}