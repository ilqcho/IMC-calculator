const calculate = document.getElementById("calculate");


function imc () {
    const name = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("result");

    if(!name || !height || !age || !weight){
        alert("Todos los campos deben ser completados");
    }

    const getIMC = weight / (height * height);
    
    if(getIMC > 25){
        result.textContent = `${name}, tenes sobre peso!`
        result.style.color = "red";
    }else if(getIMC < 25 && getIMC > 20){
        result.textContent =`${name}, tu peso es ideal!`;
        result.style.color = "green";
    }else if(getIMC < 20){
        result.textContent =`${name}, tenes bajo peso!`;
        result.style.color = "rgb(10, 158, 243)";
    }
}

calculate.addEventListener("click", imc);