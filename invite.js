const inviteData = localStorage.getItem("loveInvite");

if (!inviteData) {
    window.location.href = "create.html";
} else {
    const data = JSON.parse(inviteData);

    document.getElementById("recipientName").textContent =
        data.recipient;

    document.getElementById("senderName").textContent =
        data.sender;

    document.getElementById("inviteMessage").textContent =
        data.message;

    document.getElementById("inviteDate").textContent =
        data.date;

    document.getElementById("inviteTime").textContent =
        data.time;

    document.getElementById("invitePlace").textContent =
        data.place;
}
