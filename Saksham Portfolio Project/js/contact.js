function sendEmail() {
  (function () {
    emailjs.init("yV0q--L31_w3oPzHD");
  })();

  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  if (params.from_name && params.email_id && params.message) {
    emailjs
      .send("service_vap1eol", "template_zxx5p9q", params)
      .then(function (res) {
        alert("Email sent successfully!");
      })
      .catch(function (error) {
        console.error("Email sending failed:", error);
      });
  } else {
    alert("Please fill in all the required fields.");
  }
}
