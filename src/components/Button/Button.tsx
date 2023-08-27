import './Button.sass'
import { ReactNode } from 'react'

interface Button {
    label: string
    icon: ReactNode
    showIcon: boolean
    // onClick: () => void
}

export const Button = ({ label, icon, showIcon }: Button) => {
    return (
        <button id='button' popovertarget="trailer-dialog">
            { label }
            { showIcon && icon }
        </button>
    )
}