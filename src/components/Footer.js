import React from 'react';

const Footer = () => (
    <div id="Footer" className="footer">
        <div className="wrapper">
            <div className="row">
                <ul className="footer-icon-list">
                    <li><a href="https://www.facebook.com/theshortcut/"><i name="logo-facebook" className="icon-facebook fab fa-facebook	"></i></a></li>
                    <li><a href="https://www.instagram.com/theshortcutorg/?hl=en"><i name="logo-instagram" className="icon-insta fab fa-instagram	"></i></a></li>
                </ul>
            </div>
        </div>

        <div className="wrapper">
            <div className="row footer-under">
                <div className="footer-text text-white">©2019 by The Startup Shortcut Oy (Y-tunnus: 2759222-9)</div>
                <div className="footer-text text-white">All data is protected under GDPR</div>
            </div>
        </div>
    </div>
);


export default Footer;
