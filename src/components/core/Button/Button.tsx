"use client"
import React from 'react'
import { ButtonProps } from './ButtonProps';
import PropTypes from 'prop-types';
import "./ButtonStyle.css"


export default function Button({size, color, children, disabled, className}:ButtonProps) {

  return (
    <button
    onClick={()=>alert("XD")}
      className={`button text ${color} ${size} ${className} ${disabled}`}
    >
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
  
