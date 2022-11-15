import { useState } from "react";
import { faqsData } from "./data";
import Faq from "./Faq";
import style from './faqs.module.css';

const Faqs = () => {
    const [faqs, setFaqs] = useState(faqsData);

    return (
        <main className={style.container}>
            <section className={style.faqs}>
                <h1>Faqs</h1>
                {faqs.map(faq => <Faq key={faq.id} {...faq} /> )}
            </section>
        </main>
    )
}

export default Faqs;