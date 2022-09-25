import bgHome from "../img/home/bg-home.webp";
import profile from "../img/home/profile.webp";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="min-h-screen bg-fixed flex items-center"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="max-w-7xl mx-auto px-5 py-20 h-auto">
          <div className="md:flex items-center">
            <img
              src={profile}
              alt="fondo"
              className="md:w-64 md:h-64 w-72 h-72 rounded-full border-2 border-white m-auto"
            />
            <div className="md:w-auto md:ml-6 md:mt-0 mt-10 h-auto text-white md:text-5xl text-4xl text-center">
              <p>
                Hi!
                <br />
                <span className="text-blue-600 font-bold">
                  I'm Pablo Vergara
                </span>
                <br />
                Jr Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
