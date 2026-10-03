"use strict";

document.addEventListener("DOMContentLoaded", function () {

    console.log("CREATE.JS ЗАПУЩЕН");

    const form = document.getElementById("inviteForm");

    if (!form) {
        console.error("Форма inviteForm не найдена.");
        return;
    }

    const dateInput = document.getElementById("date");

    // Запрещаем выбирать дату в прошлом
    if (dateInput) {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        dateInput.min = `${year}-${month}-${day}`;
    }


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        console.log("SUBMIT СРАБОТАЛ");


        // Получаем поля формы

        const recipientInput =
            document.getElementById("recipient");

        const senderInput =
            document.getElementById("sender");

        const messageInput =
            document.getElementById("message");

        const dateInput =
            document.getElementById("date");

        const timeInput =
            document.getElementById("time");

        const placeInput =
            document.getElementById("place");


        // Проверяем существование всех полей

        if (
            !recipientInput ||
            !senderInput ||
            !messageInput ||
            !dateInput ||
            !timeInput ||
            !placeInput
        ) {
            console.error(
                "Одно или несколько полей формы не найдены."
            );

            return;
        }


        // Получаем значения

        const invitation = {

            recipient:
                recipientInput.value.trim(),

            sender:
                senderInput.value.trim(),

            message:
                messageInput.value.trim(),

            date:
                dateInput.value,

            time:
                timeInput.value,

            place:
                placeInput.value.trim()

        };


        console.log(
            "ДАННЫЕ ФОРМЫ:",
            invitation
        );


        // Проверяем заполнение

        if (
            !invitation.recipient ||
            !invitation.sender ||
            !invitation.message ||
            !invitation.date ||
            !invitation.time ||
            !invitation.place
        ) {

            alert(
                "Пожалуйста, заполни все поля ❤️"
            );

            return;
        }


        // Сохраняем данные локально

        try {

            localStorage.setItem(
                "loveInvite",
                JSON.stringify(invitation)
            );

            console.log(
                "ПРИГЛАШЕНИЕ СОХРАНЕНО"
            );

        } catch (error) {

            console.error(
                "Ошибка localStorage:",
                error
            );

            alert(
                "Не удалось сохранить приглашение."
            );

            return;
        }


        // Создаём данные для ссылки

        const encodedInvitation =
            encodeURIComponent(
                JSON.stringify(invitation)
            );


        // Формируем ссылку

        const inviteUrl =
            `invite.html?data=${encodedInvitation}`;


        console.log(
            "ССЫЛКА НА ПРИГЛАШЕНИЕ:",
            inviteUrl
        );


        // Переходим на готовое приглашение

        window.location.href = inviteUrl;

    });

});
