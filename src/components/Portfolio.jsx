const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="min-h-screen bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-5">
          <h1 className="text-4xl font-bold mb-5">Portfolio</h1>
          <h1 className="text-2xl font-bold mb-4">
            Here you can see the projects I have worked on
          </h1>
          <div className="flex items-center flex-wrap justify-around">
            <div className="bg-white border-2 border-black h-40 w-80 m-1.5"></div>
            <div className="bg-white border-2 border-black h-40 w-80 m-1.5"></div>
            <div className="bg-white border-2 border-black h-40 w-80 m-1.5"></div>
            <div className="bg-white border-2 border-black h-40 w-80 m-1.5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
