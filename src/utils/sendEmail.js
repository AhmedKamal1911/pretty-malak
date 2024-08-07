import emailjs from "@emailjs/browser";

const sendEmail = (form, serviceId, templateId, publicKey) => {
  return emailjs
    .sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey,
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
export default sendEmail;
