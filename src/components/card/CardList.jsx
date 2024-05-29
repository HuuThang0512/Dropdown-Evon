/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const CardList = (props) => {
    return (
        <div className=' grid grid-cols-3 gap-x-[30px] gap-y-[100px] p-10'>
            {props.children}
        </div>
    );
};

export default CardList;