import React from 'react'
import { Button as RCButton } from 'react-native'

interface ButtonProps {
    label: string
}

export const Button = ( {label} : ButtonProps) => {
    return <RCButton> {label} </RCButton>
}