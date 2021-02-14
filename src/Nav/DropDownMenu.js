import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';


 
export default function DropDownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');

    function DropDownItem(props) {
   
        return (
            <a 
                href='#' 
                className='menu-item'
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}    
            >
                <span className='icon-button'>{props.leftIcon}</span>
                
                {props.children}
    
                <span className='icon-button'>{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className='dropdown'>
            <CSSTransition 
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames='menu-primary'
            >
                <div className="menu">
                    <DropDownItem leftIcon='❤️'>Item</DropDownItem>
                    <DropDownItem leftIcon='❄️'>Item 2</DropDownItem>
                    <DropDownItem goToMenu='settings' rightIcon='👉' >
                            Item 3
                    </DropDownItem>
                    <DropDownItem leftIcon='❄️'>Item 2</DropDownItem>
                    <DropDownItem leftIcon='❄️'>Item 2</DropDownItem>
                    <DropDownItem leftIcon='❄️'>Item 2</DropDownItem>
                    <DropDownItem leftIcon='❄️'>Item 2</DropDownItem>
                    <DropDownItem leftIcon='❄️'>Item 2</DropDownItem>
                </div>
                
            </CSSTransition>

            <CSSTransition 
                in={activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames='menu-secondary'
            >
                <div className="menu">
                    <DropDownItem leftIcon='👈' goToMenu='main'>
                        Main
                    </DropDownItem>
                    <DropDownItem leftIcon='❄️'>Settings 2</DropDownItem>
                    <DropDownItem leftIcon='❄️'>Settings 3</DropDownItem>
                </div>
                
            </CSSTransition>

        </div>
    )
}