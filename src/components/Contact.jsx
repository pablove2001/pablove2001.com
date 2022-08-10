import email from "../img/email.png";
import whatsapp from "../img/whatsapp.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

const Contact = () => {
  return (
    <>
      <div id="contact" className="h-auto bg-gray-300">
        <div className="max-w-5xl mx-auto px-4 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-5">Contact</h1>
          <h1 className="text-xl font-bold mb-4">
            Contact me if you want us to work together.
          </h1>
          <div className="flex items-center justify-between">
            <a href="mailto:vergarapablo2001@gmail.com" target="_blank">
              <img src={email} alt="email" className="w-10 mx-7 my-4" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5213318033018&text=Hi,%20Pablo"
              target="_blank"
            >
              <img src={whatsapp} alt="whatsapp" className="w-10 mx-7 my-4" />
            </a>
            <a href="https://www.linkedin.com/in/pablove2001/" target="_blank">
              <img src={linkedin} alt="linkedin" className="w-10 mx-7 my-4" />
            </a>
            <a href="https://github.com/pablove2001" target="_blank">
              <img src={github} alt="github" className="w-10 mx-7 my-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
