import React, { useState } from "react";
import "../Style/FilterPage/LeftSide.css";
import "../Style/FilterPage/RightSide.css";
import "../Style/FilterPage/filter.css";
import { Container, Row } from "react-bootstrap";
import LeftSide from "../Components/FilterComponent/LeftSide";

import RightSide from "../Components/FilterComponent/RightSide";

function FilterPage() {
  const [show, setShow] = useState(false);
  const handelFilterItemsShow = () => {
    setShow(!show);
  };

  return (
    <Container fluid className="FilterComponentContainer">
      <Row className="FilterComponentRow">
        <LeftSide
          handelFilterItemsShow={handelFilterItemsShow}
          show={show}
        ></LeftSide>
        <RightSide
          handelFilterItemsShow={handelFilterItemsShow}
          show={show}
        ></RightSide>
      </Row>
    </Container>
  );
}

export default FilterPage;
