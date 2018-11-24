import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

const TourCard = ({ tourcard }) => {
  const { img, imgAlt, title, subtitle } = tourcard;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={imgAlt} />
      <CardBody>
        <Button color="secondary" className="float-right">
          Read more
        </Button>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default TourCard;