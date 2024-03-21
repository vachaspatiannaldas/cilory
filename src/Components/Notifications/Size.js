import React from "react";
import { Row, Col } from "react-bootstrap";
function Size({ item, settingsize, size, phone }) {
  return (
    <Row className="SelectSizeOptions">
      {item.sizes.split(",").map((i, index) => {
        return (
          <Col
            className="SelectSizeOption"
            lg={"auto"}
            xs={"auto"}
            key={`${phone + index}`}
          >
            <label>
              <input
                type={"radio"}
                name={phone}
                value={i}
                onChange={settingsize}
                checked={size === i}
              />
              <span>{i}</span>
            </label>
          </Col>
        );
      })}
    </Row>
  );
}

export default Size;
