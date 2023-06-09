import React, { useContext } from 'react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { ThemeContext } from './themecontext';

export const Socials = ({showBg, isVisible}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="socials d-none d-lg-block">
            <center>
               {
                    theme === 'light'
                    ?
                    <>
                        <a href="mailto:namht@vt.edu" aria-label="email"><FiMail className={showBg && !isVisible ? "social black" : "social"} size={22} /></a>
                        <a href="https://github.com/avocados23" aria-label="github"><FiGithub className={showBg && !isVisible ? "social black" : "social"} size={22} /></a>
                        <a href="https://linkedin.com/in/nam-h-tran" aria-label="linkedin"><FiLinkedin className={showBg && !isVisible ? "social black" : "social"} size={22} /></a>
                        <a href="https://instagram.com/boss_tran" aria-label="instagram"><FiInstagram className={showBg && !isVisible ? "social black" : "social"} size={22} /></a>
                        <a href="https://twitter.com/boss_tran" aria-label="twitter"><FiTwitter className={showBg && !isVisible ? "social black" : "social"} size={22} /></a>
                        <div className={showBg && !isVisible ? "thin-line-socials black" : "thin-line-socials"}></div>
                    </>
                    :
                    <>
                        <a href="mailto:namht@vt.edu" aria-label="email"><FiMail className="social" size={22} /></a>
                        <a href="https://github.com/avocados23" aria-label="github"><FiGithub className="social" size={22} /></a>
                        <a href="https://linkedin.com/in/nam-h-tran" aria-label="linkedin"><FiLinkedin className="social" size={22} /></a>
                        <a href="https://instagram.com/boss_tran" aria-label="instagram"><FiInstagram className="social" size={22} /></a>
                        <a href="https://twitter.com/boss_tran" aria-label="twitter"><FiTwitter className="social" size={22} /></a>
                        <div className="thin-line-socials"></div>
                    </>
               }
            </center>
        </div>
    )
};