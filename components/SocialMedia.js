import React, { Component } from 'react'
import '../css/SocialMedia.css'
import SocialMediaIcon from './SocialMedia/SocialMediaIcon'

class SocialMedia extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentSocialMediaFeed: 'instagram'
    }
  }

  switchSocialMediaFeedOnClick(clicked){
    //selects currently displayed social media feed and clicked social media feed from DOM
    const currentlyDisplayed = document.getElementsByClassName(this.state.currentSocialMediaFeed)
    const socialMedia = document.getElementsByClassName(clicked)
    //sets currently displayed to hidden and clicked to inline
    currentlyDisplayed.style.display = "hidden"
    socialMedia.style.display = "inline"
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

const socialMediaIcons = ['instagram', 'twitter', 'spotify']
