let form = document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fname = document.getElementById("fname")
    let mname = document.getElementById("mname")
    let lname = document.getElementById("lname")
    let miss = document.getElementById("mission")
    let weight = document.getElementById("weight")
    let mail = document.getElementById("mail")
    
    let age = document.getElementById("age")
    let gender = document.getElementById("gender")
    let hair = document.getElementById("hair")
    let eye = document.getElementById("eye")
    let bio = document.getElementById("bio")
    


    alert("funziona")

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
    "first name": fname,
    "middle name": mname,
    "last name": lname,
    "mission":miss,
    "weight" :weight,
    "mail":mail,
    "age":age,
    "gender":gender,
    "hair":hair,
    "eye":eye,
    "bio":bio

    }

    const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
    }

    fetch("https://eogakxqek5vcrtb.m.pipedream.net", options)
});
