import { useState } from 'react'
import { useSelector } from 'react-redux'
import { MainSocialIcon } from './SocialIconComponent/MainSocialIcon'

import SocialIconSvg from '../../image/SocialIcon/social-icon.svg'
import cssSocialIcon from './SocialIcon.module.scss'
import { OthersSocialIcon } from './SocialIconComponent/OthersSocialIcon'

const reduserState = state => state.technical

export const SocialIcon = () => {
    const {mobile, tablet, desctop} = useSelector(reduserState)
    const [showSocial, setShowSocial] = useState()

    const handleClick = () => {
        if(showSocial) {
            return setShowSocial(false)
        }

        if(!showSocial) {
            return setShowSocial(true)
        } 
    }

    return <>
        <section>
            <div className={cssSocialIcon.socialIcon}>

                {(mobile && showSocial ) && <><MainSocialIcon/> <OthersSocialIcon/></>}

                {(tablet || desctop) && <MainSocialIcon/>}
                {((tablet || desctop) && showSocial ) && <OthersSocialIcon/>}

                <div className={cssSocialIcon.socialIconMore}>
                    <svg className={cssSocialIcon.socialIconMoreSvg} onClick={handleClick}>
                        <use className={cssSocialIcon.socialIconMoreMore} href={SocialIconSvg + "#icon-More"}></use>
                        <use className={cssSocialIcon.socialIconMoreHide} href={SocialIconSvg + "#icon-Hide-hover"}></use>
                    </svg>
                </div>

            </div>
        </section>
    </>
}