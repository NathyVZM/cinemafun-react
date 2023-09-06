import './Button.sass'
import { ReactNode } from 'react'

interface Button {
    label: string
    icon: ReactNode
    showIcon: boolean
    onClickFunction: () => void
}

export const Button = ({ label, icon, showIcon, onClickFunction }: Button) => {
    return (
        <button id='button' onClick={onClickFunction}>
            { label }
            { showIcon && icon }
        </button>
    )
}