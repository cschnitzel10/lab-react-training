import React from 'react';
import visaImg from '../assets/images/visa.png';
import masterCardImg from '../assets/images/master-card.svg';

const CreditCard = (props) => {
    let { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    if (type === 'Visa'){
        type = visaImg
    } else {
        type = masterCardImg
    };

    return (

        <div style={{backgroundColor: {bgColor}, color: {color} } } >
            {/* <img src={type} alt="card" /> */}
            <div>
                .... .... ....{number.toString().slice(-4)}
            </div>

            <div>
                Expires {expirationMonth.length} {expirationYear.length} {bank}
            </div>

            <div>
                {owner}
            </div>

        </div>


    )

}




export default CreditCard