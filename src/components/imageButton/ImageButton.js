import React from 'react';
import './imageButton.css';

class ImageButton extends React.Component{
  constructor(props){
    super(props);
    this.state ={buttonIcon: props.buttonIcon};
  }

  onHover(){
    if(this.props.type == "hoverIcon"){
      this.setState({buttonIcon: this.props.hoverIcon});
    } else if(this.props.type=="increaseOnHover"){
      var state = this.state;
      state.transform = 'scale(1.4,1.4)';
      this.setState(state);
    }
  }

  onLeave(){
    if(this.props.type == "hoverIcon"){
      this.setState({buttonIcon: this.props.buttonIcon});
    } else if(this.props.type=="increaseOnHover"){
      var state = this.state;
      state.transform = 'scale(1,1)';
      this.setState(state);
    }
  }

  render(){
    return (
      <a href={this.props.goto} target={this.props.target}><img style={{transform: `${this.state.transform}`}} className="imageButton" src={this.state.buttonIcon} onMouseEnter={()=>this.onHover()} onMouseLeave={()=>this.onLeave()} /></a>
    );
  }
}
export default ImageButton;
