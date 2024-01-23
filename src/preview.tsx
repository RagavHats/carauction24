import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
const Preview = ({ selectedItem }) => {
  const [header, setHeader] = useState({});
  useEffect(() => {
    setHeader({
      Model: selectedItem?.carName,
      Location: selectedItem?.location,
      Color: selectedItem?.color,
      "No of Owners": selectedItem?.owner,
      "Year of Manufacture": selectedItem?.yearOfManufactor,
      Transmission: selectedItem?.transmission,
      Insurance: selectedItem?.insurance,
      "External Tramission": selectedItem?.external,
      Kms: selectedItem?.kms,
    });
  }, [selectedItem]);

  return (
    <Container>
      <h2>Preview</h2>
      <Row>
        <Col sm={6}>
          {header &&
            Object.keys(header).map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
        </Col>
        <Col sm={6}>
          {header &&
            Object.values(header).map((item, key) => {
              return <p key={key}>{item}</p>;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Preview;
