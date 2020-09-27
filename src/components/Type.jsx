import React from "react";
import Button from "@material-ui/core/Button";

const Type = ({ types }) => {
  return (
    <section>
      {types.map((type) => (
        <Button
          key={type.type.name}
          className="type-button"
          variant="contained"
          color="primary"
        >
          {type.type.name}
        </Button>
      ))}
    </section>
  );
};

export default Type;
