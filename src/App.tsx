// import metaIcon from '/metaIcon.svg'
import chromeIcon from "/chromeIcon.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex fixed inset-0 justify-center items-center flex-col">
      <img className="absolute top-1 w-max h-auto" src={chromeIcon} alt="dd" />
      <Card />
    </div>
  );
}

export default App;
