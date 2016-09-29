import React from "react";

export default class Card extends React.Component {
  render() {
    const cardStyle = {
        height: 410,
        borderColor: '#dadada',
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        width: "30%",
        backgroundColor: '#FFF'
    };

    const imageStyle = {
        width: "100%"
    };
    console.log(this.props)
    return (
      <div style={cardStyle}>
        <h1>{this.props.title}</h1>
        <p>Test text</p>
        <img alt="motomaker" src="http://bit.ly/2cRowBy" style={imageStyle}/>
      </div>
    );
  }
}