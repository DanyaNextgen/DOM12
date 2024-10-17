const carImage = document.getElementById('carImg');
const optionsContainer = document.querySelector('.options')
const colorOptions = document.querySelector('.color-options')
const toggles = document.querySelectorAll('.toggle')
const colorOptionsElements = document.querySelectorAll('.color-option')

let lastActiveToggle = toggles[2]

toggles.forEach(toggle => {
    toggle.onclick = () => {
        if (toggle === lastActiveToggle) {
            toggle.classList.toggle('active')

            if (toggle.classList.contains('active')) {
                carImage.src = './img/black_saloon.png'
                optionsContainer.style.display = 'none'
                colorOptions.style.display = 'flex'
            } 
            else {
                carImage.src = './img/main_bg.png'
                optionsContainer.style.display = 'flex'
                colorOptions.style.display = 'none'
            }
        } else {
            toggle.classList.toggle('active')
        }
    }
})

colorOptionsElements.forEach(circle => {
    circle.onclick = () => {
        const newImage = circle.getAttribute('data-image')
        carImage.src = newImage
    }
})


