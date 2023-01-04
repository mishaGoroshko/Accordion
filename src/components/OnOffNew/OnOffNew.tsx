import classnames from 'classnames';
import React, {useState} from 'react';
import s from './OnOffNew.module.scss'

export const OnOffNew = () => {
    const [isToggle, setIsToggle] = useState(true)

    const handleClick = () => {
        setIsToggle(!isToggle)
    };

    return (
        <div className={s.toggle}>
            <button className={classnames({[s.active]: isToggle})} disabled={isToggle} onClick={handleClick}>on</button>
            <button className={classnames({[s.active]: !isToggle})} disabled={!isToggle} onClick={handleClick}>off</button>
            <div className={classnames(s.circle, {[s.active]: isToggle})}></div>
        </div>
    );
};
