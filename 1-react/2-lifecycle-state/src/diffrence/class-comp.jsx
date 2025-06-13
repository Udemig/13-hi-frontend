import React from "react";

// Class Component oluştururken React.Component class'ını miras alırız
// JSX kodunu ise render methodu içerisinde return ederiz
class ClassComp extends React.Component {
  // kurucu method
  constructor(props) {
    super(props); // constuctor kullanırsak prop'ların hata vermemesi için bunu yapmalıyız

    // state oluşturma
    // state'i güncellerken setState methodunu kullanırız
    this.state = {
      name: "Furkan",
      list: [],
      count: 0,
    };
  }

  // component'ın ekrana gelme anında çalışır
  componentDidMount() {
    console.log("componentDidMount çalıştı");
  }

  // component'ın state'i veya propları her değişitiğinde çalışır
  componentDidUpdate(props, state) {
    console.log("componentDidUpdate çalıştı");
  }

  // component'ın ekrandan ayrılma anında çalıştır
  componentWillUnmount() {
    console.log("componentWillUnmount çalıştı");
  }

  render() {
    return (
      <div>
        <h3 className="title">{this.props.title}</h3>

        <div className="counter">
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>

          <span>{this.state.count}</span>

          <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        </div>
      </div>
    );
  }
}

export default ClassComp;
