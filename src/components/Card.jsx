import React from "react";
import data from "../data";
import IMGStyle from "./styles/ImageStyle";

const CardStyle = () => {
  return (
    <div>
      {data.map((item, index) => (
        <div>
          <CardStyle>
            <section>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </section>

            <IMGStyle src={`./images/${item.image}`} alt="" />
          </CardStyle>
        </div>
      ))}
    </div>
  );
};

export default CardStyle;
