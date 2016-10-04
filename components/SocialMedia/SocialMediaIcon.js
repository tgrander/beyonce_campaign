import React, { Component } from 'react'

const SocialMediaIcon =  ({socialMediaAccount, currentSocialMediaFeed, switchSocialMediaFeedOnClick}) => {

  console.log('socialMediaAccount: ', socialMediaAccount);

  const handleClick = (e) => {
    e.preventDefault()
    switchSocialMediaFeedOnClick(socialMediaAccount)
  }

  const pathToIcon = `../../../../icons/${socialMediaAccount}.svg`
  console.log('path to icon', pathToIcon);

  return (
    <a href="" onClick={e => handleClick(e)}>
      <img className="icon" src={pathToIcon} alt="" />
    </a>
  )

}

export default SocialMediaIcon
