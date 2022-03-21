import React, {useState, KeyboardEvent, useEffect} from 'react';
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
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [titleHover, setTitleHover] = useState(select)

    const toggleCollapsed = () => setCollapsed(!collapsed);
    const offCollapsed = () => setCollapsed(false);

    const onclickItem = (title: string) => {
        setSelect(title)
        setCollapsed(false)
    }

    const onHoverItem = (title: string) => {
        setTitleHover(title)
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].title === titleHover) {
                    e.key === 'ArrowDown' && items[i + 1] && setSelect(items[i + 1].title)
                    e.key === 'ArrowUp' && items[i - 1] && setSelect(items[i - 1].title)
                    return
                }
            }
            setSelect(items[0].title)
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            offCollapsed()
        }
    }
    useEffect(() => {
        setTitleHover(select)
    }, [select])

    return (
        <div className={s.divHeader}
            // onBlur={offCollapsed} tabIndex={1}
        >
            <div className={`${s.shadow} ${s.title}`} onClick={toggleCollapsed} onKeyUp={onKeyUpHandler}
                 tabIndex={1}>{select}▼
            </div>
            {collapsed &&
                <div>
                    {items.map((el, index) =>
                        <div
                            onMouseEnter={() => onHoverItem(el.title)}
                            className={`${s.select} ${s.title}` + ' ' + (el.title === titleHover ? s.titleHover : '')}
                            onClick={() => onclickItem(el.title)}
                            key={el.value}>➣ {el.title}
                        </div>)}
                </div>}

        </div>
    );
}