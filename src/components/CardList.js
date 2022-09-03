import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((item) => (
        <Card id={item.id} name={item.name} email={item.email} />
      ))}
    </>
  )
}

export default CardList
