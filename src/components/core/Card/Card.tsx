'use client';
import React from 'react';
import { CardContainer } from './CardStyle';


interface Obj{
    [key:string]:string;
}

interface CardProps{
height?:string;
children?:React.ReactNode;
style?:React.CSSProperties;
}


export function Card({ height="", children, style}:CardProps): React.JSX.Element {

  return (
    <CardContainer style={{height:height, ...style}}>
        {children}
    </CardContainer>
  );
}
