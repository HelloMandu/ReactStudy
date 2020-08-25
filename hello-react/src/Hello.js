import React from 'react';

function Hello(props) {
    return (
        <div>
            <h1>{props.name} Hello</h1>
        </div>
  );
}

// import React, {Component} from 'react';

// class Hello extends Component {
//     render (){
//         return <div className="react">{this.props.name} Hello</div>;
//     }
// }

Hello.defaultProps = {
    name:"Sungmin"
}

export default Hello;
