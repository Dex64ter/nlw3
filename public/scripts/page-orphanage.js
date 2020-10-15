const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    ZoomControl: false
}

const mymap = L.map('mapid', options).setView([-5.076233, -42.818672], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(mymap)

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


// create and add marker
L
.marker([-5.076233, -42.818672], { icon })
.addTo(mymap)

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // add a classe .active para este botão
    button.classList.add('active')
}