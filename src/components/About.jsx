import download from "../img/about/download.webp";
import resume from "../assets/resume.pdf";

const About = () => {
  return (
    <>
      <div id="about" className="min-h-screen bg-gray-300 flex items-center">
        <div className="max-w-7xl mx-auto px-5 pt-20 mb-5">
          <h1 className="text-4xl font-bold mb-5">About me</h1>
          <div className="md:flex">
            <div className="md:w-1/2 md:mr-10 md:mb-0 mb-7 h-auto">
              <h1 className="text-2xl font-bold mb-4">
                I'm Pablo Vergara, Jr Developer / Student
              </h1>
              <p className="text-lg">
                I'm 21 years old and I'm studying Computer Systems Engineering
                at ITESO. I am currently learning web development to work as a
                Full Stack Developer while I finish my degree.
                <br />I always seek to improve in the things I do, I like to
                teach and learn from others, I work well in a team.
                <br />
                My hobbies are: spending time with my friends playing board
                games or video games, cooking and learning new things related to
                my career.
              </p>

              <div className="mt-5 hover:bg-blue-500 bg-blue-600 ring-2 ring-transparent active:ring-white text-white rounded-md w-48 h-auto drop-shadow-lg duration-300">
                <a
                  href={resume}
                  target="_blank"
                  className="w-full h-full p-3 flex items-center"
                >
                  <img src={download} alt="download" className="w-5 h-5" />
                  <div className="w-full">
                    <p className="text-center">Download CV</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 h-auto">
              <h1 className="text-2xl text-center font-bold mb-4">Skills</h1>
              <div className="flex items-center justify-around">
                <div className="">
                  <p className="text-lg">
                    <span className="font-bold underline">Lenguages</span>
                    <br />- Python
                    <br />- C
                    <br />- Java
                    <br />- SQL
                    <br />- JavaScript
                    <br />- HTML / CSS
                  </p>
                </div>
                <div className="">
                  <p className="text-lg">
                    <span className="font-bold underline">Tools</span>
                    <br />- Git / GitHub
                    <br />- React
                    <br />- Eclipse
                    <br />- VSC
                    <br />- Unity
                    <br />- Figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
