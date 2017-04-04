import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);

    const backgroundStyles = {
      backgroundImage: 'url(' + this.props.imgSrc + ')',
    };

    this.state = {
      backgroundStyles: backgroundStyles
    };
  }

  render() {
    return (
      <article className="Project">
        <div className="Project-Content">
          <div className="Project-Background" style={this.state.backgroundStyles}></div>
          <div className="Project-Infos">
            <div className="Project-Infos__Logo">
              <img src={this.props.logoSrc} alt="project name" />
            </div>
            <div className="Project-Infos__Description">
              <h2>{this.props.title}</h2>
              <p>{this.props.text}</p>
              <p><a href={this.props.buttonSrc}>{this.props.buttonText}</a></p>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Project;

// <img src={this.props.imgSrc} alt="project name" />
