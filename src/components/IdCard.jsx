import React, {Component} from 'react';

class IdCard extends Component {
    render() {
    const {lastName, firstName, gender, height, birth, picture} = this.props;
return (
<>
  <div>
     <img src={picture} alt=""></img>
  </div>  

  <div>
<ul>
    <li>Name: {firstName} </li>
    <li>Lastname: {lastName}</li>
    <li>Gender: {gender}</li>
    <li>Height: {height}</li>
    <li>Birth: {birth.toString().slice(4,15)}</li>
</ul>
  </div>

  </>
)

}
}

export default IdCard