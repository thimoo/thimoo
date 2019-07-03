import React, { Component } from 'react';
import { OverPack as ScrollOverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
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
      <article className={"Project" + this.props.classes}>
        <div className="Project-Content">
          <div className="Project-Background" style={this.state.backgroundStyles}>
            <div className="Project-Background__Logo">
              <img src={this.props.logoSrc} alt={this.props.title} />
            </div>
          </div>
          <div className="Project-Infos">
            <div className="Project-Infos__Wrapper">
              <div className="Project-Infos__Logo">
                <img src={this.props.logoSrc} alt={this.props.title} />
              </div>
              <div className="Project-Infos__Description">
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
                <ScrollOverPack className="Project-Infos__Button" playScale="0.25">
                    <QueueAnim  key="1" duration={100}>
                      <p key="2" className="button"><a target="_blank" rel="noopener nofollow noreferrer" href={this.props.buttonSrc}>{this.props.buttonText}</a></p>
                    </QueueAnim>
                </ScrollOverPack>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default Project;
