import React from "react";

class LikeButton extends React.Component {
    constructor() {
        super();
       this.state = {
         count: 0,
         clicked: false
       }
     }
   getCount =() => {
     const clicked = this.state.clicked
    //  if(clicked){
    //    this.setState({count: this.state.count - 1, clicked: false});
    //  } else {
       this.setState({count: this.state.count + 1})
    //  }
 
   }
   render() {
     return  <div>
                     <button onClick={this.getCount}>Like | {this.state.count}</button>
                 </div>;
   }
 }

 export default LikeButton;