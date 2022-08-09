import bgHome from "../img/bg-home.jpg";
import profile from "../img/profile.jpeg";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="h-screen bg-fixed flex items-center"
        style={{ backgroundImage: `url(${bgHome})` }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 h-auto">
          <div className="md:flex items-center">
            <img
              src={profile}
              alt="fondo"
              className="md:w-64 w-80 rounded-full h-auto border-2 border-white m-auto"
            />
            <div className="md:w-auto md:ml-6 md:mt-0 mt-10 h-auto text-white text-5xl text-center">
              <p>
                Hi!
                <br />
                <span className="text-blue-500 font-bold">
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
