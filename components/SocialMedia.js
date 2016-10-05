import React, { Component } from 'react'
import '../css/SocialMedia.css'
import SocialMediaIcon from './SocialMedia/SocialMediaIcon'
import $ from 'jquery'

const socialMediaIcons = ['instagram', 'twitter', 'spotify']

class SocialMedia extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSocialMediaFeed: 'spotify'
    }
  }

  /*
  @param = social media icon DOM element
  changes the displayed social media feed to be whichever was clicked and
    hides all others
  */
  switchSocialMediaFeedOnClick(clicked){
    //the name of the social media clicked is passed into function and captured from DOM
    const $clicked = $(`.${clicked}`)
    //sets currently displayed social media to hidden
    $(`.${this.state.currentSocialMediaFeed}`).css({'display':'none'})
    //displays clicked social media
    $clicked.css({'display':'flex'})
    //sets state to reflect the clicked social media as currently displayed
    this.setState({currentSocialMediaFeed: clicked})
  }

  render(){
    return (
      <div className="social-media-container">
        {
          //maps an array of social media components that are passed the props
          //of which social media they represent
          socialMediaIcons.map((icon, index) =>
            <SocialMediaIcon
              socialMediaAccount={icon}
              currentSocialMediaFeed={this.state.currentSocialMediaFeed}
              switchSocialMediaFeedOnClick={this.switchSocialMediaFeedOnClick.bind(this)}
              key={index}
            />
          )
        }
      </div>
    )
  }
}

export default SocialMedia
