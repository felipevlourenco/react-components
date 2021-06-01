import React from 'react'
import styled, { css } from 'styled-components'

export interface CardProps {
  isFlex?: boolean
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
  margin: string
  padding: string
  background: string
  border: string
}

const flexStyles = css<CardProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`

const StyledCard = styled.div<CardProps>`
  ${props => props.isFlex && flexStyles};
  margin: ${(p) => p.margin};
  padding: ${(p) => p.padding};
  background: ${(p) => p.background};
  border: ${(p) => p.border};
  border-radius: 0.75rem;
`

const Card: React.FC<CardProps> = ({ children, isFlex, flexDirection = 'row', justifyContent = 'center',
  alignItems = 'center', margin, padding, background, border }) => (
  <StyledCard
    isFlex={isFlex}
    flexDirection={flexDirection}
    alignItems={alignItems}
    justifyContent={justifyContent}
    margin={margin}
    padding={padding}
    background={background}
    border={border}
  >
    {children}
  </StyledCard>
)

export default Card