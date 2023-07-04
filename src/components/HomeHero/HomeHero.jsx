
import cssHomeHero from './HomeHero.module.scss'

export const HomeHero = () => {
    return <>
        <section className={cssHomeHero.hero}>
            <div className={cssHomeHero.heroConteiner}>
                <h1 className='heroTitel'>gamirare</h1>
                <p className={cssHomeHero.heroText}>Magic helper for your stories</p>
                <button className={cssHomeHero.heroButton} type="button">
                    Почати гру
                    <svg className={cssHomeHero.heroButtonSvg}>
                        <use href="./images/icons.svg#icon-Steam"></use>
                    </svg>
                </button>
            </div>
        </section>
    </>
}