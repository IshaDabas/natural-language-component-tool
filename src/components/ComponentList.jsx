import React from "react";
import ComponentCard from "./ComponentCard";

const ComponentList = ({ data = [] }) => {
  return (
    <div aria-label="List of components">
      {data.map((item, idx) => {
        if (!item || typeof item !== "object") return null;
        return <ComponentCard key={item.id || idx} component={item} />;
      })}
    </div>
  );
};

export default ComponentList;
