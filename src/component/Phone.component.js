import React from "react";
import Card from "./Card.component";
import PhoneStore from "../store/Phone.store";
import * as PhoneAction from "../action/Phone.action";

export default class Phone extends React.Component {
  constructor() {
    super();
    this.state = {
      itens: PhoneStore.getAll()
    }
  }

  componentWillMount() {
    PhoneStore.on("change", () => {
      this.setState({
        itens: PhoneStore.getAll()
      });
    })
  }

  handleChange(e) {
    const title = e.target.value
    this.props.changeTitle(title);
  }

  createTodo() {
    PhoneAction.createTodo(Date.now());
  }

  render() {
    let phoneVTStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row'
    };
    const cardElements = this.state.itens.map((row, i ) => <Card key={i} title={row.text}/>);

    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.createTodo.bind(this)}> Create Component</button>
        <div style={phoneVTStyle}>
            {cardElements}
        </div>
      </div>
    );
  }
}