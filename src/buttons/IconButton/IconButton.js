import './IconButton.css'

const ICONS = {
    'failed-loading-btn': "fas fa-spinner",
    'user-profile-btn': "fas fa-user",
}

const SIZES = [
    'icon-btn--small',
    'icon-btn--medium',
    'icon-btn--large',
]

export const IconButton = ({
    children,
    type,
    onClick,
    buttonIcon,
    buttonSize
}) => {

    const thisIconName = buttonIcon in ICONS? buttonIcon : 'failed-loading-btn'

    const thisIconNameClass = ICONS[thisIconName]

    const thisButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[1]

    return (
        <button className={`icon-btn ${thisIconNameClass} ${thisIconName} ${thisButtonSize}`} 
            onClick={onClick} type={type}>
            {children}
        </button>
    )
}