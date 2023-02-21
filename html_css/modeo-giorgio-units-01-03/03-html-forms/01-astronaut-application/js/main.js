let form = document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var $items = $('#fname','#mname','#lname','#mission','#weight','#mail','#age','#gender','#hair','#eye','#bio')
    var obj={}
    
    // let fname = document.getElementById("")
    // let mname = document.getElementById("")
    // let lname = document.getElementById("")
    // let miss = document.getElementById("")
    // let weight = document.getElementById("")
    // let mail = document.getElementById("")
    
    // let age = document.getElementById("age")
    // let gender = document.getElementById("gender")
    // let hair = document.getElementById("hair")
    // let eye = document.getElementById("eye")
    // let bio = document.getElementById("bio")
    


    alert("funziona")

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
    "first name":fname,
    "middle name":mname,
    "last name":lname,
    "mission":miss,
    "weight":weight,
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

    fetch("https://eoynwby8w2fc1zc.m.pipedream.net", options)
});
