import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:thakurmayank721@gmail.com" data-cursor="disable">
                thakurmayank721@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science Engineering</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/mayank-kumar-11a834198"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Mayank Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
