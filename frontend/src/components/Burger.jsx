import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import { Menu } from './Menu';

export function Burger() {

    const [openBurgerClass, setOpenBurgerClass] = useState('');
    const [collapse, setCollapse] = useState(false);

    return (
        <>
            <div className={"menu-btn" + openBurgerClass} onClick={burgerToggle}>
                <div className="menu-btn__burger"></div>
            </div >

            <div className="drop-down">
                <Collapse isOpen={collapse}>
                    <Card>
                        <CardBody>
                            <Menu toggle={burgerToggle} />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
    );

    function toggle() {
        setCollapse(!collapse);
    }

    function burgerToggle() {
        if (!openBurgerClass) {
            setOpenBurgerClass(" open");
            toggle();
        } else {
            setOpenBurgerClass("");
            toggle();
        };
    }
}
