import React, { useEffect, useState, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { GenrateUrl, GetParams } from "../../Utils/Getparams";
import { ProductListData } from "../../store/Logic/FilterProducts/FilterSlice";
function LeftSide({ handelFilterItemsShow, show }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [genrateUrl, SetgenrateUrl] = useState({});
  const navigate = useNavigate();
  const FilterListData = useSelector((state) => {
    return state.Filter;
  });

  const Fetch = useCallback(() => {
    dispatch(
      ProductListData({
        url: `${location.pathname}${location.search && location.search}`,
      })
    );
    SetgenrateUrl(GetParams(location.search));
  }, [location.search, location.pathname, dispatch]);
  useEffect(() => {
    Fetch();
  }, [Fetch]);

  useEffect(() => {}, [location.pathname, location.search]);
  const handelcontainershow = (e) => {
    const listofcontainers = document.querySelectorAll(".showcontainer");
    for (let i = 0; i < listofcontainers.length; i++) {
      console.log(listofcontainers[i]);
      listofcontainers[i].classList.remove("showcontainer");
    }
    e.target.nextSibling.classList.add("showcontainer");
  };
  const handelCheckBox = (e) => {
    const Url = GenrateUrl(e, genrateUrl);
    SetgenrateUrl(Url);
    const FinaleUrl = Object.entries(Url).reduce((prev, current) => {
      if (current[1].length >= 1) {
        return `${prev}${current[0]}=${current[1].join(",")}&`;
      } else {
        return `${prev}`;
      }
    }, "");
    navigate(`/${slug}?${FinaleUrl.substr(0, FinaleUrl.length - 1)}`);
  };
  const handeleClearAll = () => {
    navigate(`/${slug}`);
  };
  return (
    <Col className={`FilterLeftSide ${show ? "FilterShows" : "FilterHides"}`}>
      <Row className="Filter-Clear-Row">
        <Col className="FilterTitle">Filters</Col>
        <Col className="ClearAll" onClick={handeleClearAll}>
          CLear All
        </Col>
      </Row>
      <Row className="FilterClose">
        <Col>
          <i className="fa-solid fa-xmark" onClick={handelFilterItemsShow}></i>
          <span>Filter</span>
        </Col>
      </Row>
      <Row className={`FilterItemsRow`}>
        <ul>
          {FilterListData?.FilterListData[0] &&
            Object.entries(FilterListData.FilterListData[0]).map(
              (item, index) => {
                return (
                  <div key={index}>
                    <li
                      className="FilterHeadingTitle"
                      onClick={handelcontainershow}
                    >
                      {item[0]}
                    </li>
                    <div
                      className={`FilterItemsContainer ${
                        index === 0 && "showcontainer"
                      }`}
                    >
                      {item[1].map((filteritem, nestedindex) => {
                        return (
                          <li className="FilterItem" key={nestedindex}>
                            <label>
                              <input
                                type="checkbox"
                                name={item[0]}
                                value={filteritem._id}
                                onChange={handelCheckBox}
                                checked={
                                  genrateUrl[item[0]]
                                    ? genrateUrl[item[0]].includes(
                                        filteritem._id
                                      )
                                    : false
                                }
                              />
                              <span>{filteritem._id}</span>
                            </label>
                          </li>
                        );
                      })}
                    </div>
                  </div>
                );
              }
            )}
        </ul>
      </Row>
    </Col>
  );
}

export default LeftSide;
