import React from "react";
import { UncontrolledCarousel } from "reactstrap";

import ImageI from "../assets/CarouselProd.jpg";
import ImageII from "../assets/carouselI.jpg";


const items = [
  {
    src: ImageI,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
  },
  {
    src: ImageII,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
  },
 
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
