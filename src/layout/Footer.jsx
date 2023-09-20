import React from 'react'

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <div className="footer">
                <div className="container">
                    <div className="footer-info">
                        <div className="footer-avatar">
                            <img src="assets/img/mask.jpg" alt="title" />
                        </div>
                        <h6>Vanessa Nascimento</h6>
                    </div>
                    <ul className="nav social-link mb-3">
                        <li>
                            <a href="https://twitter.com/sanemy_" target='_blank'><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/zsanemy/" target='_blank'><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target='_blank'><i className="fab fa-facebook" /></a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/zSanemy/" target='_blank'><i className="fab fa-pinterest" /></a>
                        </li>
                    </ul>
                   
                </div>
            </div>
            {/* End Footer */}
        </>
    )
}
