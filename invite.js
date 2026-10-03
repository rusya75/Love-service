"use strict";

document.addEventListener("DOMContentLoaded", function () {

    console.log("INVITE.JS ЗАПУЩЕН");


    /*
     * Получаем данные из ссылки
     */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const encodedData =
        params.get("data");

    let invitation = null;


    /*
     * Читаем приглашение из ссылки
     */

    if (encodedData) {

        try {

            invitation = JSON.parse(
                decodeURIComponent(encodedData)
            );

            console.log(
                "Приглашение получено из ссылки:",
                invitation
            );

        } catch (error) {

            console.error(
                "Ошибка чтения данных из ссылки:",
                error
            );

        }

    }


    /*
     * Если ссылки с данными нет,
     * используем localStorage
     */

    if (!invitation) {

        const savedInvitation =
            localStorage.getItem("loveInvite");

        if (savedInvitation) {

            try {

                invitation =
                    JSON.parse(savedInvitation);

                console.log(
                    "Приглашение получено из localStorage:",
                    invitation
                );

            } catch (error) {

                console.error(
                    "Ошибка чтения localStorage:",
                    error
                );

            }

        }

    }


    /*
     * Если приглашение не найдено
     */

    if (!invitation) {

        console.error(
            "Приглашение не найдено."
        );

        alert(
            "Приглашение не найдено ❤️"
        );

        window.location.href =
            "create.html";

        return;
    }


    /*
     * Получаем элементы страницы
     */

    const recipientName =
        document.getElementById(
            "recipientName"
        );

    const senderName =
        document.getElementById(
            "senderName"
        );

    const inviteMessage =
        document.getElementById(
            "inviteMessage"
        );

    const inviteDate =
        document.getElementById(
            "inviteDate"
        );

    const inviteTime =
        document.getElementById(
            "inviteTime"
        );

    const invitePlace =
        document.getElementById(
            "invitePlace"
        );


    /*
     * Получаем кнопку
     */

    const shareButton =
        document.getElementById(
            "shareButton"
        );

    const shareStatus =
        document.getElementById(
            "shareStatus"
        );


    /*
     * Проверяем элементы
     */

    if (
        !recipientName ||
        !senderName ||
        !inviteMessage ||
        !inviteDate ||
        !inviteTime ||
        !invitePlace
    ) {

        console.error(
            "Элементы приглашения не найдены."
        );

        return;
    }


    /*
     * Показываем данные
     */

    recipientName.textContent =
        invitation.recipient;

    senderName.textContent =
        invitation.sender;

    inviteMessage.textContent =
        invitation.message;

    inviteDate.textContent =
        invitation.date;

    inviteTime.textContent =
        invitation.time;

    invitePlace.textContent =
        invitation.place;


    console.log(
        "ПРИГЛАШЕНИЕ УСПЕШНО ОТОБРАЖЕНО"
    );


    /*
     * Кнопка "Поделиться"
     */

    if (shareButton) {

        shareButton.addEventListener(
            "click",
            async function () {

                const shareUrl =
                    window.location.href;


                /*
                 * Если браузер поддерживает
                 * системное меню "Поделиться"
                 */

                if (
                    navigator.share &&
                    /Android|iPhone|iPad|iPod/i.test(
                        navigator.userAgent
                    )
                ) {

                    try {

                        await navigator.share({

                            title:
                                "Приглашение ❤️",

                            text:
                                `Для ${invitation.recipient} ❤️`,

                            url:
                                shareUrl

                        });

                        console.log(
                            "Приглашение отправлено."
                        );

                    } catch (error) {

                        /*
                         * Пользователь мог просто
                         * закрыть окно "Поделиться".
                         */

                        console.log(
                            "Поделиться отменено."
                        );

                    }

                    return;
                }


                /*
                 * Для компьютера копируем ссылку
                 */

                try {

                    await navigator.clipboard.writeText(
                        shareUrl
                    );

                    showShareStatus(
                        "Ссылка скопирована ❤️"
                    );

                } catch (error) {

                    console.error(
                        "Не удалось скопировать ссылку:",
                        error
                    );

                    showShareStatus(
                        "Скопируй ссылку из адресной строки"
                    );

                }

            }
        );

    }


    /*
     * Показываем сообщение
     */

    function showShareStatus(message) {

        if (!shareStatus) {
            return;
        }

        shareStatus.textContent =
            message;

        setTimeout(function () {

            shareStatus.textContent =
                "";

        }, 3000);

    }

});
