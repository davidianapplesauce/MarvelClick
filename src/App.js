import React, { Component } from "react";
import Images from "./components/Images/img";
import Wrapper from "./components/Wrapper/index";
import Header from "./components/Header/title";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    highscore: 0
  };

  clickCount = id => {
    this.state.images.find((o, i) => {
      if (o.id === id){
        images[i].count = images[i].count + 1;
        this.setState({score : this.state.score + 1}, function(){
          console.log(this.state.score);
        })
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>MARVEL Memory Game</Header>
        {this.state.images.map(image => (
          <Images
            clickCount={this.clickCount}
            id={image.id}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
