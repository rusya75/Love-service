console.log("create.js работает!");


const inviteForm = document.getElementById("inviteForm");

inviteForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const recipient = document.getElementById("recipient").value;
    const sender = document.getElementById("sender").value;
    const message = document.getElementById("message").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value;

    const inviteData = {
        recipient: recipient,
        sender: sender,
        message: message,
        date: date,
        time: time,
        place: place
    };

    localStorage.setItem("loveInvite", JSON.stringify(inviteData));

    window.location.href = "invite.html";
});
