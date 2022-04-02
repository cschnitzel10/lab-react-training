import React from "react";
import Rating from "./Rating";

const DriverCard = (props) => {
    let { name, rating, img, car } = props;
    let {model, licensePlate}= car;

return (
    <div>
    {name}
    <div>
        <Rating>
            {rating} 
        </Rating>
    </div>

    <img style={{width: 200, height: 128} } src={img}/>

    <div>
        {model} {licensePlate}
    </div>

</div>
)

};

export default DriverCard;