import email from "../img/contact/email.webp";
import whatsapp from "../img/contact/whatsapp.webp";
import linkedin from "../img/contact/linkedin.webp";
import github from "../img/contact/github.webp";

function Button(props) {
  return (
    <>
      <a href={props.link} target="_blank">
        <img
          src={props.img}
          alt={props.name}
          className="w-10 h-10 mx-7 my-4"
        />
      </a>
    </>
  );
}

const Contact = () => {
  return (
    <>
      <div id="contact" className="h-auto bg-gray-300">
        <div className="max-w-5xl mx-auto px-5 pt-20 pb-10">
          <h1 className="text-4xl font-bold mb-5 pt-8 border-t-4 border-black">
            Contact
          </h1>
          <h1 className="text-xl font-bold mb-4">
            Contact me if you want us to work together.
          </h1>
          <div className="flex items-center justify-between">
            <Button
              name="email"
              link={"mailto:vergarapablo2001@gmail.com"}
              img={email}
            />
            <Button
              name="whatsapp"
              link={
                "https://api.whatsapp.com/send?phone=523318033018&text=Hi,%20Pablo"
              }
              img={whatsapp}
            />
            <Button
              name="linkedin"
              link={"https://www.linkedin.com/in/pablove2001/"}
              img={linkedin}
            />
            <Button
              name="github"
              link={"https://github.com/pablove2001"}
              img={github}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
