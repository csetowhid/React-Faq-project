import { useState } from 'react';
import style from './faq.module.css'
const Faq = ({id, title, description}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <article className={style.faq}>
            <duv>
                <h4>{title}</h4>
                <button onClick={()=>{setToggle(!toggle)}}>
                    {toggle ? '-' : '+'}
                </button>
            </duv>
            {toggle && <p>{description}</p>}
        </article>
    )
}

export default Faq;