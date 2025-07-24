import React from "react";
import ComponentCard from "./ComponentCard";

const ComponentList = ({ data = [] }) => {
  if (!Array.isArray(data)) {
    console.error("ComponentList: 'data' prop is not an array", data);
    return null;
  }
  if (data.length === 0) return <p>No matching components found.</p>;

  return (
    <div>
      {data.map((item, idx) => {
        if (!item || typeof item !== "object") {
          console.error(
            `ComponentList: item at index ${idx} is not a valid object`,
            item
          );
          return null;
        }
        return <ComponentCard key={item.id || idx} component={item} />;
      })}
    </div>
  );
};

export default ComponentList;
