import React from 'react'
import NavBar from './NavBar';
import NavItem from './NavItem';
import { ReactComponent as BulbIcon } from '../icons/bulb.svg';
import { ReactComponent as GraceIcon } from '../icons/grace.svg';
import { ReactComponent as MedicineIcon } from '../icons/medicine.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import DropDownMenu from './DropDownMenu';


export default function Nav() {
    return (
        <>
            <NavBar>
                <NavItem icon={<BulbIcon />} />
                <NavItem icon={<GraceIcon />} />
                <NavItem icon={<MedicineIcon />} />
                <NavItem icon={<ReactIcon />} />

                <NavItem icon={<CaretIcon />}>
                    <DropDownMenu />
                </NavItem>
                
            </NavBar>
        </>
    )
}
