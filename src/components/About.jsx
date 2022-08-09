import download from "../img/download.png";

const About = () => {
  return (
    <>
      <div id="about" className="h-screen bg-gray-300 flex items-center">
        <div className="max-w-7xl mx-auto px-4 p-20">
          <h1 className="text-4xl font-bold mb-10">About me</h1>
          <div className="sm:flex">
            <div className="sm:w-1/2 sm:mr-10 sm:mb-0 mb-7 bg-red-200 bg-opacity-0 h-auto">
              <h1 className="text-2xl font-bold mb-5">
                I'm Pablo Vergara, Jr Developer / Student
              </h1>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                laborum autem est voluptate enim eum corrupti delectus illum
                consequatur! Quam deleniti nesciunt in veniam? Iure dolorum
                quidem necessitatibus et doloribus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. <br />
                Eos voluptatum dolorem, corrupti officia dolor quisquam cumque
                commodi eius veritatis neque dolore fugit harum fugiat fuga iste
                tenetur? Dignissimos, earum ut!
              </p>

              <div className="mt-5 bg-blue-500 text-white rounded-md w-48 h-auto ">
                <a
                  href="https://drive.google.com/file/d/1SUBMkFWuhbzrCe14Jbj9Fk1oCU1kNY-p/view?usp=sharing"
                  target="_blank"
                  className="w-full h-full p-3 flex items-center"
                >
                  <img src={download} alt="download" className="w-5" />
                  <div className="w-full">
                    <p className="text-center">Download CV</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="sm:w-1/2  bg-amber-200 bg-opacity-0 h-auto">
              <h1 className="text-2xl font-bold mb-5">Skills</h1>
              <div className="flex items-center">
                <div className="w-1/2 mr-6">
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
                <div className="w-1/2">
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
