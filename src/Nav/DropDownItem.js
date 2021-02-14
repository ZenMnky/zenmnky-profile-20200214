import React from 'react'

export default function DropDownItem(props) {
    let {setActiveMenu, goToMenu} = props;
    return (
        <a 
            href='#' 
            className='menu-item'
            onClick={() => goToMenu && setActiveMenu(goToMenu)}    
        >
            <span className='icon-button'>{props.leftIcon}</span>
            
            {props.children}

            <span className='icon-button'>{props.rightIcon}</span>
        </a>
    )
}
