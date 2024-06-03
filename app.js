const images = [
    {id: 1,
     name: "imagen hortalizas",
     src: "images/imagen1.jpg"
    },
    {id: 2,
     name: "imagen cebollas",
     src: "images/imagen2.jpg"
    },
    {id: 3,
     name: "imagen paisaje",
     src: "images/imagen3.jpg"
    }
]

var contador = 0;

// Métodos
function showImg(){
    const img = images[contador]
    imgElement.src = img.src
    imgElement.alt = img.name
        
}

function updateImg(){
    contador = (contador + 1) % images.length;
    showImg()
}

function previousImg(){
    contador = (contador - 1 + images.length ) % images.length;
    showImg()

}

// Elementos del DOM
const imgElement = document.querySelector("[data-img]")
const prevBtnElement = document.querySelector("[data-btn-prev]")
const nextBtnElement = document.querySelector("[data-btn-next]")

// Eventos
setInterval(updateImg, 5000)
nextBtnElement.addEventListener('click', updateImg)
prevBtnElement.addEventListener('click', previousImg)
window.addEventListener("DOMContentLoaded", showImg)
window.addEventListener("DOMContentLoaded", function() {alert("Lorena Criado")});