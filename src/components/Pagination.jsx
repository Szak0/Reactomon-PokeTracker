import React from "react";
import Button from "@material-ui/core/Button";

const nextPage = +10;
const prevPage = -10;

const Pagination = ({ currentPage, paginate }) => {
  function handlePageChange(newPage) {
    paginate(newPage);
  }

  return (
    <div>
      <Button
        onClick={() => handlePageChange(currentPage + prevPage)}
        variant="contained"
        color="primary"
      >
        Prev
      </Button>
      <Button
        onClick={() => handlePageChange(currentPage + nextPage)}
        variant="contained"
        color="primary"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
