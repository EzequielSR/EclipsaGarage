document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    mobileMenuToggle.addEventListener("click", function () {
        navList.classList.toggle("show");
        mobileMenuToggle.classList.toggle("active");
    });
    document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
            const elementsToAnimate =
                document.querySelectorAll(".animate-scroll");

            function checkElementsVisibility() {
                elementsToAnimate.forEach((element) => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (
                        elementTop < windowHeight * 0.75 &&
                        !element.classList.contains("animated")
                    ) {
                        element.classList.add("animated");
                    }
                });
            }

            window.addEventListener("scroll", checkElementsVisibility);

            checkElementsVisibility();
        });
    });
    function validarFormulario() {
    // Validar campos (pode adicionar mais validações conforme necessário)
    var nome = document.getElementById('nome').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome === "" || tel === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    // Pode adicionar mais validações aqui...

    // Exibir mensagem de agradecimento
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('mensagem-agradecimento').style.display = 'block';

    // Evitar o envio real do formulário
    return false;
}

});
