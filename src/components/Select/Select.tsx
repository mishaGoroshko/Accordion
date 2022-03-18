import React, {useState} from 'react';
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type SelectType = {
    items: ItemType[]
    // onClick: (value: any) => void
    select: string
    setSelect: (select: string) => void
}

export const Select: React.FC<SelectType> = ({items, select, setSelect, ...props}) => {
    let [collapsed, setCollapsed] = useState(false)

    const onCollapsed = () => setCollapsed(!collapsed);

    return (
        <div onBlur={onCollapsed} tabIndex={1} className={s.divHeader}>
            <div className={`${s.shadow} ${s.title}`} onClick={onCollapsed}>{select}▼
            </div>
            {collapsed &&
                <div>
                    {items.map((el, index) =>
                        <div
                            // onBlur={onCollapsed} tabIndex={index}
                            className={`${s.select} ${s.title}`}
                            onClick={() => setSelect(el.title)}
                            key={el.value}>➣ {el.title}
                        </div>)}
                </div>}

        </div>
    );
}