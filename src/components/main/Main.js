import React from 'react';
import './Main.css';
import ImageButton from '../imageButton/ImageButton';
import facebookIcon from './resources/facebook_c.png';
import facebookIconHover from './resources/facebook_g.png'
import githubIcon from './resources/github_c.png';
import linkedinIcon from './resources/linkedin_c.png';
import mailIcon from './resources/mail_c.png';

class Main extends React.Component{
  render(){
    return (
      <main>
        <header>
          <section id="upperLeftCornerComponent">
          {React.Children.toArray(this.props.children)[0]}
          </section>
          <section id="leftInfo">
            {this.props.info.map((info)=><div><h2>{info.topic}</h2><p>{info.content}</p></div>)}
          </section>
        </header>
        <section></section>
        <footer>
          <div id="contactButtonRow">
          <h2>Du finner meg på følgende plattformer:</h2>
            <ImageButton buttonIcon={facebookIcon} type="increaseOnHover" goto={this.props.contactDetails[0]} target="_blank"/>
            <ImageButton buttonIcon={githubIcon} type="increaseOnHover" goto={this.props.contactDetails[1]} target="_blank"/>
            <ImageButton buttonIcon={linkedinIcon} type="increaseOnHover" goto={this.props.contactDetails[2]} target="_blank"/>
            <ImageButton buttonIcon={mailIcon} type="increaseOnHover" goto={this.props.contactDetails[3]} target="_blank"/>
          </div>
        </footer>
      </main>
    );
  }
}
export default Main;
