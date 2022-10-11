import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import MyChildComponent from "./MyChildComponent";
import Project from "./Project";
import Car from "./Car";

function App() {
  const projectList = [
    { title: "ML project", desc: "some desc 1" },
    { title: "NLP project", desc: "some desc 2" },
  ];

  const carList = [
    { make: "Honda", model: "Accord", year: 2022 },
    { make: "Toyota", model: "Camry", year: 2021 },
    { make: "Tesla", model: "X", year: 2020 },
    { make: "BMW", model: "i3", year: 2019 },
  ];

  return (
    <div className="App">
      {projectList.map((projectObj) => {
        return <Project title={projectObj.title} desc={projectObj.desc} />;
      })}

      <br />
      <Project />
      <hr />
      <br />

      {
        carList.map((carObj)=>{
          return <Car make={carObj.make} model={carObj.model} year={carObj.year}/>
        })
      }



    </div>
  );
}

export default App;
