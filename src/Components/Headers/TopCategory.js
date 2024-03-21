import React from "react";
import SubCategory from "./SubCategory";
function TopCategory({ index, i, SetNavShow }) {
  return (
    <div className="overlay-display" key={index}>
      <div className="overlay-display-container">
        <div className="category-list-section">
          <div>
            {i.subcategory.map((cate, indexs) => {
              return (
                <ul className="category-ul-list" key={indexs + cate.name}>
                  <SubCategory
                    cate={cate}
                    indexs={indexs}
                    SetNavShow={SetNavShow}
                  />
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCategory;
