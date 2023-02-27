/* eslint-disable no-undef */
import React from 'react';

import notfound from '../../assets/images/404.svg';

const Error = () => {
    return (
        <div className='error404'>
            <object data={notfound} type='image/svg+xml' />
            <a href='/'>[Go Back]</a>
        </div>
    );
};

export default Error;
