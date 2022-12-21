let local = localStorage
const getItem = ( ) =>{
    let inp = document.querySelector('input')
if (inp.value !== "" && !inp.value.includes("")) {
    let data ={
        name:inp.value
    }
    local.setItem("user-name",JSON.stringify(data))
    let get_data = local.getItem("user_info")
    get_data = JSON.parse(get_data)
}else{
    alert(4)
}


}