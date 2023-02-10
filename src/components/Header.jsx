import '../css/main.css';
import '../css/bootstrap.min.css';
import logoPng from '../img/logo.PNG';
import glassSvg from '../img/glass.svg';
import arrowSvg from '../img/arrow.svg';

function Header() {
    return (
        <header>
        <div className="header__menu">
            <div className="container">
                <div className="row">
                    <div className="logo d-flex align-items-center col-4">
                        <img src={logoPng} alt="" className="header-img"/>
                        <p className="header__logo-text">
                            HobbyPhoto
                        </p>
                    </div>
                    <div className="header__menu-ul col-7">
                        <ul className="d-flex justify-content-between">
                            <li><button href='#'>О фирме</button></li>
                            <li><button>Товары</button></li>
                            <li><button>Контактная информация</button></li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center glass">
                        <img src={glassSvg} alt="" className="col lupa-svg"/>
                    </div>
                
                </div>
            </div>
        </div>
        <div className="header__main">
            <div className="main__bg d-flex justify-content-between">

                    <div className="main__left-button main__arrow"><img src={arrowSvg}alt=""/></div>
                    <div className="main__text">
                        <h1>Фотографируй доступно</h1>
                        <button>Подробнее</button>
                    </div>
                    <div className="main__right-button main__arrow"><img src={arrowSvg} alt=""/></div>
            </div>
        </div>
    </header>
    )
}

export default Header;
