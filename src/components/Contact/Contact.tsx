import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './style.scss';

const Contact = () => {

    const noticeElm = useRef(null);
    const formElm = useRef(null);

    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        if (formValues.name && formValues.email && formValues.subject && formValues.message) {
          sendEmail(event.target);
        }
      }

    function handleChange(event: any) {
        const target = event.target;
        setFormValues({...formValues, [target.name]: target.value})

    }

    function sendEmail(target: any) {
        emailjs.sendForm('default_service', "template_AzDMR8bG", target, 'user_9lvRoU1mubU6wqeosvptZ')
        .then(() => {
          handleSentEmail("OK")
        }, () => {
          handleSentEmail("404")
        });
    }

    function handleSentEmail(status: string) {
        const notice = noticeElm.current as HTMLParagraphElement | null;
        if (notice) {
            notice.setAttribute("style", "display: inline-block");
            if (status === "OK") {
                notice.innerHTML = "Email Sent!";
                notice.classList.add("success");
              } else {
                notice.classList.add("error");
                notice.innerHTML = "Sorry something wen't wrong :(";
              }
        }
        const form = formElm.current as HTMLFormElement | null;
        if (form) form.reset();
    }
    return (
        <div id="contact-section">
        <p id="notice" ref={noticeElm}>
          Email Sent!
        </p>
        <form id="contact-form" onSubmit={handleSubmit} ref={formElm}>
          <input onChange = {handleChange} placeholder="Name" type ="text" name="name" id="name-input" required/>
          <input onChange = {handleChange} placeholder="Email address" type="email" name="email" id="email-input" required/>
          <input onChange = {handleChange} placeholder="Subject" type="text" name="subject" id="subject-input" required />
          <textarea onChange = {handleChange} name="message" required>
          </textarea>

          <button type = "submit">Send Email</button>
        </form>
        </div>
    )
}
export default Contact;