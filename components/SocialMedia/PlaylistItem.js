import React from 'react'
import $ from 'jquery'

const PlaylistItem = ({track}) => {

  const imageURL = track.album.images[1].url

  const divStyle = {
    backgroundImage: `url(${imageURL})`
  }

  // const displayTrackDetailsOnMouseEnter = () => {
  //   console.log('ENTERED');
  //   const $hoverDetails = $('.hover-state')
  //   console.log('HOVER STATE', $hoverDetails);
  //   $hoverDetails.css('display','none')
  //   $('.play-list-item').bind('mouseleave', () => {
  //     $hoverDetails.css('display', 'none')
  //   })
  // }

  let playing = false
  const songURL = track.preview_url
  const audio = new Audio(songURL)

  const playSongOnClick = (e) => {
    e.preventDefault()
    if (!playing) {
      audio.play();
      playing=true;
      return
    }
    audio.pause()
    playing=false
  }

  return (
    //background is track image
    <div
      className="play-list-item"
      style={divStyle}
      onClick={e => playSongOnClick(e)}

    >


      <div className="hover-state">
        <h1>{track.name}</h1><br/>
        <p>Click To Play</p>
      </div>

    </div>
  )
}

export default PlaylistItem
