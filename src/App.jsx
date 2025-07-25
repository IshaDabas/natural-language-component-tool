import { Typography } from "@visa/nova-react";
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
        <Typography variant="headline-1" className="component-title">
          {cmp.name}
        </Typography>
        <br />
        <Typography variant="body-lg" className="component-description">
          {cmp.description}
        </Typography>
        <br />
        <br />
        <Typography variant="headline-2" className="component-usage-heading">
          Usage
        </Typography>
        <br />
        <Typography variant="body-lg" className="component-usage">
          {cmp.usage}
        </Typography>
        <br />
        <br />
        <ComponentCard component={cmp} />
        <br />
        <Typography variant="headline-2" className="component-usage-heading">
          Props
        </Typography>
        <br />
        <ul className="component-usage">
          {cmp.props.map((prop, index) => (
            <li key={index}>
              "{prop}"{index < cmp.props.length - 1 ? "," : ""}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
