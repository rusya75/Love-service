"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("startButton");
    const heroButton = document.getElementById("heroButton");

    function openCreatePage() {
        window.location.href = "create.html";
    }

    if (startButton) {
        startButton.addEventListener("click", openCreatePage);
    }

    if (heroButton) {
        heroButton.addEventListener("click", openCreatePage);
    }

});
