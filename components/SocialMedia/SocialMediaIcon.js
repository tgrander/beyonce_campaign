import React from 'react'

const SocialMediaIcon =  ({socialMediaAccount, currentSocialMediaFeed, switchSocialMediaFeedOnClick}) => {

  const handleClick = (e) => {
    e.preventDefault()
    switchSocialMediaFeedOnClick(socialMediaAccount)
  }

  const pathToIcon = `../../../../icons/${socialMediaAccount}.svg`

  return (
    <a href="" onClick={e => handleClick(e)}>
      <img className="icon" src={pathToIcon} alt="" />
    </a> 
  )

}

export default SocialMediaIcon
