let local = localStorage
const getItem = () =>{
    let inp = document.querySelector('input')
if (inp.value !== "" && !inp.value.includes("")) {
    let data ={
        name:inp.value
    }
    local.setItem("user-name",JSON.stringify(data))
    let get_data = local.getItem("user_info")
    get_data = JSON.parse(get_data)
}else{
    alert("iltimos bosh joyni toldiring")
}


}
let heading =document.querySelector('h1')
heading.innerHTML =JSON.parse(local["user-name"]).name

const remoData = () =>{
    local.removeItem('user-name')
}