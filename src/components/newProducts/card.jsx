import React from 'react'

const Card = ({image}) => {
  return (
    <div className="new-prod__card">
      <img src={image} alt="" />
    </div>
  )
}

export default Card