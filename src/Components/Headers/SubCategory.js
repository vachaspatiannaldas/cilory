import React from "react";
import { Link } from "react-router-dom";
function SubCategory({ indexs, cate, className = null, SetNavShow }) {
  const testone = (e, check) => {
    if (check) {
      SetNavShow(false);
    }

    const li = document.querySelectorAll(".category-ul-list");
    if (e.target.parentNode.parentNode.classList.value.includes("ulactive")) {
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("ulactive");
      }
    } else {
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("ulactive");
      }

      e.target.parentNode.parentNode.classList.add("ulactive");
    }
  };
  return (
    <>
      <li
        className={`${className}`}
        key={indexs}
        onClick={(e) => testone(e, className)}
      >
        <Link to={className ? `${cate.slug}` : "#"}>{cate.name}</Link>
      </li>
      {cate.subcategory.map((lowcategory, indexes) => {
        return (
          <SubCategory
            key={indexes}
            indexs={indexes}
            cate={lowcategory}
            className="category-nested-category-list"
            SetNavShow={SetNavShow}
          />
        );
      })}
    </>
  );
}

export default SubCategory;
