import React from 'react';

const Random = (props) => {
    const {min, max} = props;
const createRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
    return (
<div>
Random Value Between {min} and {max} creates: {createRandomNumber(min, max)}
</div>
    )
}


export default Random