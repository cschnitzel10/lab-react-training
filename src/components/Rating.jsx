import React from "react";

const Rating = (props) => {
    const result = [];
    for (let i = 0; i < Math.round(props.children); i++) {
      const star = <span>★</span>;
      result.push(star);
    }
    for (let i = 0; i < 5 - Math.round(props.children); i++) {
      const star = <span>☆</span>;
      result.push(star);
    }
    return (
    <div>{result}</div>
    )
    
  };
  
  export default Rating;