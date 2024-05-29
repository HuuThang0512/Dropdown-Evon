/* eslint-disable no-unused-vars */
import React from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';

const SidebarMenu = () => {
    const { nodeRef, show, setShow } = useClickOutSide();
    return (
        <div className='text-blue'>
            Menu
        </div>
    );
};

export default SidebarMenu;