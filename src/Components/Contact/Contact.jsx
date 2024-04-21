import "./Contact.css";
import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import email_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e328266-c75c-4050-86ce-e606293bc0a1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="email_icon" />
        </h3>
        <p>
          Feel free to reach out to us with any questions, concerns, or
          feedback. Our dedicated support team is here to assist you every step
          of the way. Whether you need assistance navigating the platform, have
          inquiries about our courses, or simply want to share your thoughts,
          we're here to listen.
        </p>
        <ul>
          <li>
            <img src={email_icon} alt="email_icon" />
            info@example.com
          </li>
          <li>
            <img src={phone_icon} alt="phone_icon" />
            +1 (555) 123-4567
          </li>
          <li>
            <img src={location_icon} alt="location_icon" />
            123 Main Street, City, State, Country, Postal Code
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Entre your name"
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Entre your phone number"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Entre your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
