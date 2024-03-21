import React from "react";
import { Link } from "react-router-dom";
import TopCategory from "./TopCategory";
// import "../../Style/bootstrap-grid.css";
// import "../../Style/bootstrap.css";
// import "../../Style/bootstrap.min.css";
function MasterCategory({ i, index, SetNavShow }) {
  const handleone = (e) => {
    const li = document.querySelectorAll(".top-category-name");

    if (e.target.parentNode.parentNode.classList.value.includes("active")) {
      for (i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
      }
    } else {
      for (i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
      }

      e.target.parentNode.parentNode.classList.add("active");
    }
    // if (e.target.parentNode.parentNode.classList.value.match(/active/i)) {
    //   e.target.parentNode.parentNode.classList.add("active");
    // }
  };
  return (
    <li className="top-category-name" key={index + i.name}>
      <div onClick={(e) => handleone(e)} className="link-style">
        <Link to={`#`} className="topcategory-name-link">
          {i.name}
        </Link>
      </div>
      <TopCategory i={i} index={index} SetNavShow={SetNavShow} />
    </li>
  );
}

export default MasterCategory;
