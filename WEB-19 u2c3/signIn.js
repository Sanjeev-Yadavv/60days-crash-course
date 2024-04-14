let form = document.querySelector('form')
let Name = document.querySelector('#name')
let pass = document.querySelector('#password')


form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log('hello')
    matchData()
})


function matchData(){
    let arr = JSON.parse(localStorage.getItem("name"))
    let user = arr.find(u => u.name === Name.value)
  
        if(user && user.password === pass.value){
        if(user.role ==="HR"){
            alert(`${ele.name} login successfully as HR`)
            window.location.href = "index.html"
          
        }
        else if(user.role==="Employee"){
            alert(`${ele.name} login successfully as Employee`)
            window.location.href = "index.html"
          
        }
        }

        else{
            alert("Invalid username or password")
        }

}