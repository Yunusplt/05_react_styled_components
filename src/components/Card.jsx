import React from "react";
import data from "../data";
import IMGStyle from "./styles/ImageStyle";
import CardStyle from "./styles/CardStyle";


const Card = () => {
  return (
    <div>
      {data.map((item, index) => (
          <CardStyle key={index} reverse={index%2===1 && "row-reverse"} >
            <section>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </section>

            <IMGStyle src={`./images/${item.image}`} alt="" />
          </CardStyle>
      ))}
    </div>
  );
};

export default Card;
