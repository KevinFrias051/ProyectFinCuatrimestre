import "./cardEstilada.css"
import Facebook from "../../../../public/Facebook.png"
export function CardEstilada() {
    return (
        <>
            <div className="container">
                <div className="profile-wrapper">
                    <div className="profile">
                        <div className="profile-image">
                            <img src={Facebook.src} alt="profile" />
                        </div>
                        {/* <ul className="social-icons">
                            <li>
                                <a href="#Instagram" title="Instagram">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#Instagram" title="Instagram"></a>
                                <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </li>
                            <li>
                                <a href="#Instagram" title="Instagram"></a>
                                <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </li>
                            <li>
                                <a href="#Instagram" title="Instagram"></a>
                                <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </li>
                        </ul> */}
                        <div className="profile-name">
                            <h2>Melissa Taylor</h2>
                            <div className="profile-bio">
                                I´m a JS Full-Stack engineer,
                                love working with <em>React</em> and <em>Node.js</em>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}