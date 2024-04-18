"use client"
import React from 'react'
import { ButtonProps } from './ButtonProps';
import PropTypes from 'prop-types';
import "./ButtonStyle.css"

//Si quieres pasarle un nuevo icono que no esta en utils/iconsComponents
//Ver ejemplo en /utils/iconsComponents
export default function Button({ size, color, children, disabled, className = "", StartIcon = undefined }: ButtonProps) {

  return (
    <button
      onClick={() => alert("XD")}
      className={`button text ${color} ${size} ${className} ${disabled ? "disabled" : ""}`}
    >
      {StartIcon && <StartIcon className={`icon ${color}`}/>}
      {children}
    </button>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['md', 'lg', 'xl']).isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'link']).isRequired,
  destructive: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.any,
  children: PropTypes.node.isRequired,
};

