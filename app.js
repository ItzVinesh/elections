document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("studentForm");

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const className = document.getElementById("class").value;
        const section = document.getElementById("section").value;
        const email = document.getElementById("email").value;

        // Compose the email content
        const emailContent = `
            Name: ${name}
            Class: ${className}
            Section: ${section}
            Email: ${email}
        `;

        // SMTP.js configuration
        Email.send({
            SecureToken: "YourSecureTokenHere", // Replace with your secure token
            To: "vineshkatara75@gamil.com", // Replace with the recipient's email address
            From: "xyz@gmail.com", // Replace with your sender's email address
            Subject: "Student Information",
            Body: emailContent,
        }).then((message) => {
            if (message === "OK") {
                alert("Email sent successfully!");
                studentForm.reset();
            } else {
                alert("Email sending failed. Please try again later.");
            }
        });
    });
});