import cssSocialIcon from '../SocialIcon.module.scss'
import SocialIconSvg from '../../../image/SocialIcon/social-icon.svg'

export const MainSocialIcon = () => {
    return <>
        <ul className={cssSocialIcon.socialIconList}>
            <li>
                <a href="https://discord.com/invite/tsTZh9YYE7" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Discord"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/miramixi_storyteller/" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Instagram"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/channel/UCoLsoD6eVgMGS-mP9GINOFg?sub_confirmation=1" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Youtube"}></use>
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/MiramixiTale" rel="nofollow noreferrer">
                    <svg className={cssSocialIcon.socialIconListSvg}>
                        <use href={SocialIconSvg + "#icon-Twitter"}></use>
                    </svg>
                </a>
            </li>
        </ul>
    </>
}