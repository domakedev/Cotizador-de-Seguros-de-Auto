
//Variables
let btn = document.querySelector('.btn_cotiza')
let marca = document.querySelector('#marca')
let anioBox = document.querySelector('#anio')
let results = document.querySelector('.results')
let loader = document.querySelector('.loader_img')
let option;
let marcaSelected,anioSelected;

//console.log(results);
//Inicio
twentyYears()

console.log(anioBox);

//EventListeners

    btn.addEventListener('click',function(){
        marcaSelected = marca.options[marca.selectedIndex].value
        anioSelected = anioBox.options[anioBox.selectedIndex].value

        option = document.querySelector('.checkbox input:checked').value

        //console.log(marcaSelected);
        //console.log(anioSelected);
        //console.log(option);

        let seguro = new Seguro(marcaSelected, anioSelected,option)
        seguro.mostrarInfo()
         //number

        if (seguro.precioDelSeguro() > 0) {
            loader.classList.add('h-12')
            loader.src = "img/pacman.svg"

            setTimeout(function(){
            loader.classList.remove('h-12')
            loader.src = ""
            results.innerHTML = `
            <p class="result_text">El precio mensual del seguro de tu auto es: <b>$${seguro.precioDelSeguro().toFixed(2)} USD</b></p>
        `
            },3000)
        }

        
        console.log(seguro.precioDelSeguro());
    })

//Funciones

//Completar 20 años para el Año

function twentyYears(){
    let actualYear = new Date().getFullYear()
    let periodTime = 20
    //let oldYear = actualYear - 20

    //console.log(actualYear);

    for (let i = 0; i <= periodTime; i++) {
        //console.log(actualYear-i);
        let anioOption = document.createElement('option')
        anioOption.innerHTML = `<option value="${i}">${actualYear-i}</option>`

        anioBox.appendChild(anioOption)
    }
}

//Clases

class Seguro{
    constructor(marca, anio, option){
        this.marca = marca
        this.anio = anio
        this.option = option
    }

    mostrarInfo(){
        console.log(`Tu marca: ${this.marca}, el año de tu carro: ${this.anio} y tu tipo de seguro: ${this.option}`);
    }

    precioDelSeguro(){
        let precioBase = 1000;
        let descuentoPrecioFinal;

        let anioActual = new Date().getFullYear() //2021
        let aniosDif = anioActual - Number(this.anio) // 2021 - 2016 = 5
        let descuentoAnio =  1 - aniosDif*3/100

        let descuentoMarca ;

        switch (Number(this.marca)) {
            case 1:
                descuentoMarca=0.9
                break;
            case 2:
                descuentoMarca=0.8
                break;
            case 3:
                descuentoMarca=0.7
                break;
        
            default:
                break;
        }

        let descuentoTipo;

        switch (this.option) {
            case "completo":
                descuentoTipo = 0.85
                break;
            case "basico":
                descuentoTipo = 0.7
                break;
        
            default:
                break;
        }
        // console.log(descuentoAnio);
        // console.log(descuentoMarca);
        // console.log(descuentoTipo);
        // console.log(precioBase);
         descuentoPrecioFinal = descuentoAnio*descuentoMarca*descuentoTipo*precioBase
        return descuentoPrecioFinal
        //console.log(descuentoTipo);
    }
}