import { Typography, Utility } from "@visa/nova-react";
import ComponentCard from "./components/ComponentCard";
import { componentUI } from "./objects";
import "./styles/theme.css";
import { useParams } from "react-router-dom";
import { filterComponents } from "./components/utils";

export default function App() {
  let { index, search } = useParams();
  const prCmp = componentUI.filter((c) => String(c.sno) === index)[0];
  const rltdCmp = filterComponents(search).filter(
    (cmp) => String(cmp.sno) !== String(index)
  );

  const mainCmp = [prCmp, ...rltdCmp];

  return (
    <Utility vFlex vFlexCol vGap={10}>
      <br />
      <Typography variant="headline-3" style={{ textAlign: "center" }}>
        Search results for "{search}"
      </Typography>
      {mainCmp.map((cmp) => (
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
            <ComponentCard component={cmp} />
            <br />
            <br />
            <Typography
              variant="headline-2"
              className="component-usage-heading"
            >
              Props
            </Typography>
            <br />
            <ul className="props">
              {cmp.props.map((prop, index) => (
                <li key={index}>
                  "{prop}"{index < cmp.props.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Utility>
  );
}
