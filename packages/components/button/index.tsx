import React from 'react'
import { Pressable, NativeSyntheticEvent, NativeTouchEvent, Text } from 'react-native'

interface ButtonProps {
    label: string
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
}

export const Button = ( {label, onPress} : ButtonProps) => {
    return <Pressable onPress={onPress}>
        <Text>
            {label}
        </Text>
    </Pressable>
}