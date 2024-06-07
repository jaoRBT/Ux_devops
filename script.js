// JavaScript

document.addEventListener("DOMContentLoaded", function() {
    const userIcon = document.querySelector(".user-icon");
    const settingsIcon = document.querySelector(".settings-icon");
    const userDropdown = document.querySelector(".user-icon .dropdown");
    const settingsDropdown = document.querySelector(".settings-icon .dropdown");

    // Função para mostrar ou ocultar o dropdown do usuário
    userIcon.addEventListener("click", function() {
        userDropdown.classList.toggle("show");
        settingsDropdown.classList.remove("show");
    });

    // Função para mostrar ou ocultar o dropdown de configurações
    settingsIcon.addEventListener("click", function() {
        settingsDropdown.classList.toggle("show");
        userDropdown.classList.remove("show");
    });

    // Fechar o dropdown se clicar fora dele
    window.addEventListener("click", function(event) {
        if (!event.target.closest(".user-icon")) {
            userDropdown.classList.remove("show");
        }
        if (!event.target.closest(".settings-icon")) {
            settingsDropdown.classList.remove("show");
        }
    });
});


