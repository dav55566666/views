
var swiper = new Swiper(".feedback__swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
});


const seTAutorizationType = (type) => {
    let input = document.getElementById("login-input")
    let buttons = document.getElementById("autorization-buttons")
    let passInput = document.getElementById("pass-input")
    input.children[1].value = ""
    passInput && (passInput.children[2].value = "")
    if (type === "email") {
        input.children[0].textContent = "e-mail"
        input.children[1].setAttribute("placeholder", "Введите почту")
        passInput && (passInput.children[2].setAttribute("placeholder", "Введите пароль"))
        input.children[1].setAttribute("type", "email")
        buttons.children[0].classList.add("active")
        buttons.children[1].classList.remove("active")
        document.getElementById('send-sms') && (document.getElementById('send-sms').style.display = "none")
    }
    if (type === "phone") {
        input.children[0].textContent = "Телефон"
        input.children[1].setAttribute("placeholder", "+ X (XXX) XXX - XX - XX")
        input.children[1].setAttribute("type", "phone")
        buttons.children[1].classList.add("active")
        buttons.children[0].classList.remove("active")
        passInput && (passInput.children[2].setAttribute("placeholder", "_ _ _ _"))
        document.getElementById('send-sms') && (document.getElementById('send-sms').style.display = "block")
    }
}

const togglePass = () => {
    let passInput = document.getElementById("pass-input")
    if (passInput.children[2].getAttribute("type") === "password") {
        passInput.children[2].setAttribute("type", "text")
        passInput.children[3].classList.add("active")
    }else {
        passInput.children[2].setAttribute("type", "password")
        passInput.children[3].classList.remove("active")
    }
}