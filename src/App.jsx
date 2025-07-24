import ComponentCard from "./components/ComponentCard";
import { componentUI } from "./objects";
import "./styles/theme.css";
import { useParams } from "react-router-dom";

export default function App() {
  let { index } = useParams();
  const cmp = componentUI.filter((c) => String(c.sno) === index)[0];

  console.log(index);

  return (
    <div className="page-container">
      <div className="main-content">
        <h1 className="component-title">{cmp.name}</h1>
        <br />
        <p className="component-description">{cmp.description}</p>
        <br />
        <br />
        <h2 className="component-usage-heading">Usage</h2>
        <br />
        <p className="component-usage">{cmp.usage}</p>
        <br />
        <br />
        <ComponentCard component={cmp} />
        <br />
        <h2 className="component-usage-heading">Props</h2>
        <br />
        <ul className="component-usage">
          {cmp.props.map((prop, index) => (
            <li key={index}>"{prop}"</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
