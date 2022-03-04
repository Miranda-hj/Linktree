import React from 'react';
import './Header.module.scss';

export const Header = () => {
    return (
        <div>
            <div>
                <img src='src\assets\profile-picture.png' alt=''/>
            </div>
            <div>@yourname</div>
        </div>
    )
}