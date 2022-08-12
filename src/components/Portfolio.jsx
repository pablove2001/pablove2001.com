import github from "../img/portfolio/github.png";
import web from "../img/portfolio/web.png";
import expensePlanner from "../img/portfolio/expense-planner.png";
import cryptocurrency from "../img/portfolio/cryptocurrency-price.png";
import crmReact from "../img/portfolio/crm-react.png";
import toDoList from "../img/portfolio/to-do-list.png";
import inventoryManagement from "../img/portfolio/inventoryManagement.png";

function Button(props) {
  return (
    <div
      className={`bg-gray-800 rounded-md w-auto h-auto ${
        props.link.length >= 1 ? "" : "hidden"
      }`}
    >
      <a
        href={props.link}
        target="_blank"
        className="w-full h-full p-1 flex items-center"
      >
        <img src={props.img} alt="web" className="w-5 mr-1" />
        <div className="w-full">
          <p className="text-center">{props.text}</p>
        </div>
      </a>
    </div>
  );
}

function Project(props) {
  return (
    <div
      className="h-56 w-full drop-shadow-lg rounded-md bg-cover bg-center hover:bg"
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-70 rounded-md hover:opacity-100 opacity-0 duration-300 flex items-center">
        <div className="w-52 mx-auto text-white text-center">
          <h1 className="text-xl font-medium">{props.name}</h1>
          <p className="p-5">Tools: {props.tools}</p>
          <div className="flex items-center justify-around">
            <Button link={props.web} img={web} text="Website" />
            <Button link={props.github} img={github} text="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Portfolio = () => {
  return (
    <>
      <div id="portfolio" className="min-h-screen bg-gray-300">
        <div className="max-w-7xl mx-auto px-5 pt-20 pb-5">
          <h1 className="text-4xl font-bold mb-5">Portfolio</h1>
          <h1 className="text-2xl font-bold mb-4">
            Here you can see the projects I have worked on
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Project
              img={expensePlanner}
              name="Expense Planner"
              tools="React, CSS, Localstorage"
              web="https://duos2-expense-planner.netlify.app/"
              github="https://github.com/pablove2001/Expense-Planner"
            />
            <Project
              img={cryptocurrency}
              name="Cryptocurrency Price"
              tools="React, Styled Components, API Query, Own Hooks"
              web="https://duos2-cryptocurrency-price.netlify.app/"
              github="https://github.com/pablove2001/Cryptocurrency-Price"
            />
            <Project
              img={crmReact}
              name="CRM React"
              tools="React, Tailwind, React Router 6, JSON Server, Formik+Yup"
              web=""
              github="https://github.com/pablove2001/CRM-React"
            />
            <Project
              img={inventoryManagement}
              name="Inventory Management"
              tools="Java, Eclipse"
              web=""
              github="https://github.com/pablove2001/Inventory-Management"
            />
            <Project
              img={toDoList}
              name="To Do List"
              tools="React, Tailwind, Localstorage"
              web="https://duos2-to-do-list.netlify.app/"
              github="https://github.com/pablove2001/To-Do-List"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
