import cssSocialIcon from '../SocialIcon.module.scss'
import SocialIconSvg from '../../../image/SocialIcon/social-icon.svg'

export const OthersSocialIcon = () => {
    return <>
        <ul className={cssSocialIcon.socialIconList}>
            <li>
                <a href="https://www.facebook.com/people/Miramixi-Storyteller/100087328674331/" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Facebook"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://store.steampowered.com/app/2123400/Miramixi_Storyteller/" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Steam"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://store.steampowered.com/app/2123400/Miramixi_Storyteller/" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Twitch"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://t.me/miramixi_storyteller" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Telegram"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://olfamelles.itch.io/miramixistoryteller" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Itch"}></use>
                    </svg>
                </a>
            </li>
        </ul>
    </>
}