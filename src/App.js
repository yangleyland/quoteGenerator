
import './App.css';
import React from 'react';

// import { render } from '@testing-library/react';
import instagramIcon from './instagramIcon.png';
import twitterIcon from './twitterIcon.png';

const quoteSet= [
  "I'm like Spiderman, but instead of shooting webs, I shoot white stuff on him",
  "In reality, I'm 5'4, stand on my money, now I'm 6'6",
  'Love the life you live, live the life you love',
  "I not Mexican but I don't care what these Jo-se",
  "Life is like flipping a coin, you got a 50/50 chance of getting some head",
  "Get yo money up, not yo funny up",
  "Keep your friends close, but your enemies closer",
  "Life is like a sandwich, either way you flip it, the bread comes first",
  "I must be in the NBA the way I like these YoungBoys",
  "Life is like a toaster, ain't nobody care till the bread pops up",
  "Earn money and get friends",
  "I call my girl Playstation cuz she just turned 5",
  "Fly high, reach high, get high",
  "Trust nobody, cuz even your shadow leaves when it gets dark",
  "I feel like Travis Scott the way I jack Boys",
  "Everyone can make you smile, not everyone can make you happy",
  "I had to nut in my eye to see how far I came",
  "One man's two year relationship is another man's one night hit"
];

const colorSet =[
  "teal",
  "purple",
  "maroon",
  "crimson",
  "green",
  "gold",
  'brown',
  "coral",
  "DarkOliveGreen",
  "IndianRed",
  "LawnGreen"
]
  

class RenderButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button onClick={this.props.onPress} style={{backgroundColor: this.props.mainColor}}>New Quote</button>;
  }
}


class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <p className="quoteText" style={{color: this.props.mainColor}}>"{this.props.quote}"</p>;
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteSet[1],
      mainColor: "teal",
      visited: []
    }
    this.randomQuote=this.randomQuote.bind(this);
    this.randomQuote();
  }
  randomQuote() {
    let index=Math.floor(Math.random() * quoteSet.length);
    while (this.state.visited.includes(index)){
      index=Math.floor(Math.random() * quoteSet.length);
    }
    this.setState({quote: quoteSet[index]});
    this.setState({ visited: [...this.state.visited, index]});
    if (this.state.visited.length==quoteSet.length-1){
      this.setState({visited:[]});
    }

    index=Math.floor(Math.random() * colorSet.length);
    while (colorSet[index]==this.state.mainColor){
      index=Math.floor(Math.random() * colorSet.length);
    }
    this.setState({mainColor: colorSet[index]});
  }
  render() {
    
    return (
    <div className="App" style={{backgroundColor: this.state.mainColor}}>
      <div className="quoteBox">
        <Quote quote={this.state.quote} mainColor={this.state.mainColor}/>
        <RenderButton id="renderButton" onPress={this.randomQuote} mainColor={this.state.mainColor}/>
        <a href="https://www.instagram.com/leylnd/"><button style={{backgroundColor: this.state.mainColor}} className="button1 iconImg"><img alt="" src={instagramIcon} /></button></a>
        <a href="https://twitter.com/"><button style={{backgroundColor: this.state.mainColor}} className="button2 iconImg"><img alt="" src={twitterIcon} /></button></a>
      </div>
    </div>
  );
  }
}
export default App;
