import React from 'react';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      item : [],
      nowitem:[],
      allcount: 0,
      nowcount: 0,
      input:"",
      listItems:"",
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isDone = this.isDone.bind(this);
  }

  handleChange(e){
    // console.log("Change " + e.target.value)
    this.setState({ 
      input: e.target.value 
    });
  }

  isDone(e){
    console.log("isDone")
    console.log("decoration:",e.target.style.textDecoration)
    var nowitems = this.state.nowitems
    
    if (e.target.style.textDecoration === '' || e.target.style.textDecoration === 'none'){
      console.log("delete")
      e.target.style.textDecoration = 'line-through';      
      var i = nowitems.indexOf(e.target.value);
      nowitems.splice(i, 1);
      this.setState({
        nowitems:nowitems,
        nowcount:nowitems.length,
      })
    }else{
      console.log("add")
      e.target.style.textDecoration = 'None';
      nowitems.push(e.target.value)
      this.setState({
        nowitems:nowitems,
        nowcount:nowitems.length,
      })
    }
   
  }

  handleClick() {
    console.log("button handleclicked")
    const items = this.state.item;
    const nowitems = this.state.nowitem;
    items.push(this.state.input)
    nowitems.push(this.state.input)
    // const listItems = items.map((text) =>
    //   <li>{text}</li>
    // );
    const listItems = items.map((text) =>
      <li onClick={this.isDone}>{text}</li>
    );
    
    this.setState(state => ({
      item:items,
      nowitems:nowitems,
      allcount:items.length,
      nowcount:nowitems.length,
      listItems :listItems,
    }));
    console.log(this.state.item,"|",this.state.allcount)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.handleChange }/>
        <button onClick={this.handleClick}>Add</button>
        <h5>{this.state.nowcount} remaining out of {this.state.allcount} tasks</h5>
        <br/>
        <ul>{this.state.listItems}</ul>
      </div>
    )
  }
}

export default App;
