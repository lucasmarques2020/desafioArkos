import React from 'react'
import { style } from './styles'

export const Img = (props) => {
  const estilo = style()
  return (
    <div>
      <img className="img-fluid" src={props.logo} style={estilo.Logostilo} />
      <img className="img-fluid" src={props.bk} style={estilo.Bkstilo} />
    </div>
  )
}