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
});
