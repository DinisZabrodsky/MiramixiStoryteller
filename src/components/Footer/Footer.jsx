import { NavLink} from 'react-router-dom'

import cssFooter from './Footer.module.scss'

export const Footer = () => {
    return <>
        <section className={cssFooter.footer}>
            <div  className={cssFooter.footerConteiner}>
                <div className={cssFooter.footerLogoConteiner}>
                    <h3 className={cssFooter.footerTitel}>Gamirare</h3>
                    <p className={cssFooter.footerCopirate}>ⓒ 2020-2023</p>
                </div>

                <div className={cssFooter.footerLinkConteiner}>
                    <div>
                        <h3 className={cssFooter.footerTitel}>Копанія</h3>
                        <ul className={cssFooter.footerList}>
                            <li><NavLink to='about'>Про нас</NavLink></li>
                            <li><NavLink to='mass-media'>Оновлення</NavLink></li>
                            <li><a href="./mass-media.html">Зв’язатись з нами</a></li>
                            <li><a href="./mass-media.html">Політика конфіденційності</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={cssFooter.footerTitel}>Наші продукти</h3>
                        <ul className={cssFooter.footerList}>
                            <li><a href="https://diniszabrodsky.github.io/MiramixiStoryteller-Marketplace/">Miramixi</a></li>
                            <li><a href="https://diniszabrodsky.github.io/Plantarium/">Plantarium</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={cssFooter.footerTitel}>Соціальні мережі</h3>
                        <ul className={cssFooter.footerList}>
                            <li><a href="https://discord.com/invite/tsTZh9YYE7" rel="nofollow noreferrer">Discord</a></li>
                            <li><a href="https://www.youtube.com/channel/UCoLsoD6eVgMGS-mP9GINOFg?sub_confirmation=1" rel="nofollow noreferrer">YouTube</a></li>
                            <li><a href="https://t.me/miramixi_storyteller" rel="nofollow noreferrer">Telegram</a></li>
                            <li><a href="https://twitter.com/MiramixiTale" rel="nofollow noreferrer">Twitter</a></li>
                            <li><a href="https://www.instagram.com/miramixi_storyteller/" rel="nofollow noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com/people/Miramixi-Storyteller/100087328674331/" rel="nofollow noreferrer">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}