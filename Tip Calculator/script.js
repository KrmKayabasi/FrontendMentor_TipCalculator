let z
let y
let d
let h
let g

let reset = document.getElementById("reset")
let bill = document.getElementById("bill")
let percentage_buttons = document.querySelectorAll(".per")
let person = document.getElementById("person")
let custom = document.getElementById("custom")

let error_bill = document.getElementById("error_bill")
let error_person = document.getElementById("error_person")
let error_custom = document.getElementById("error_custom")

let total = document.getElementById("toptotal")
let perperson = document.getElementById("perperson")

bill.addEventListener('input',checkbill)
person.addEventListener('input',checkperson)
custom.addEventListener('input',checkcustom)

function checkbill(){


    x = bill.value
    if (x == 0) {
        bill.classList.add("redborder")
        error_bill.classList.remove("hidden")
        
    }

    else{
        z = bill.value
        bill.classList.remove("redborder")
        error_bill.classList.add("hidden")
        showresult()
        
    }
}

function checkperson(){
    x = person.value
    if (x == 0) {
        person.classList.add("redborder")
        error_person.classList.remove("hidden")
        
    }

    else{
        d = person.value
        person.classList.remove("redborder")
        error_person.classList.add("hidden")
        showresult()
        
    }
}

function checkcustom(){
    x = custom.value
    if (x == 0) {
        custom.classList.add("redborder")
        error_custom.classList.remove("hidden")
        
        
    }

    else{

        custom.classList.remove("redborder")
        error_custom.classList.add("hidden")
        y = custom.value
        console.log(y)
        showresult()
        
    }
}


/*-------------------------------------------------------*/

reset.addEventListener('click',resetfunc)

function resetfunc(){
    bill.value = 0 
    custom.value = 0 
    person.value = 0
    y = 0
    showresult()

}


percentage_buttons.forEach(percentage => {

    percentage.addEventListener('click',checkbuttonpercentage)
    
    function checkbuttonpercentage(){
        c = percentage.innerHTML
        console.log(c)
        custom.classList.remove("redborder")
        error_custom.classList.add("hidden")
        y = c.toString().replace("%","")
        showresult()
    }
    

});

   
function showresult(){




    
    h = (z*y/100).toFixed(2)

    
    console.log(isNaN(h))
    console.log(h)
    g = ((z*y/100)/d).toFixed(2)
    console.log(isNaN(g))
    console.log(g)

    if (isNaN(h) && isNaN(g) === false){
        total.innerHTML = "_.__$"
        perperson.innerHTML = g.toString() + "$"
    }

    else if (isNaN(h) && isNaN(g)){
        total.innerHTML = "_.__$"
        perperson.innerHTML = "_.__$"
    }

    else if (isNaN(h) === false && isNaN(g)){
        total.innerHTML = h.toString() + "$"
        perperson.innerHTML = "_.__$"
    }
    else{
        total.innerHTML = h.toString() + "$"
        perperson.innerHTML = g.toString() + "$"
    }



}

 




showresult()


