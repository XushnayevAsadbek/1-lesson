
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import telegram from '../images/telegram.png'
import youtube from '../images/youtube.png'

const Footer =()=>{
    return(
      <>
          <footer className="footer">
        <div className="container">
            <div className="footer-box">
                <div className="footer-div">
                    <h2 className="footer-title">NAMANGANLIKLAR 24</h2>
                    <p className="footer-text">
                        Воспроизводство, копирование, использование информации с сайта «NAMANGANLIKLAR24.UZ» возможно
                        только с предварительного письменного разрешения редакции.
                    </p>
                </div>
                <div className="footer-div-1">
                    <ul className="footer-ul">
                        <li className="footer-list">
                            <a className="footer-link" href="#">Информация о сайте</a>
                        </li>
                        <li className="footer-list">
                            <a className="footer-link" href="#">Напишите нам</a>
                        </li>
                        <li className="footer-list">
                            <a className="footer-link" href="#">Реклама</a>
                        </li>
                        <li className="footer-list">
                            <a className="footer-link" href="#">Прислать новость</a>
                        </li>

                    </ul>
                </div>
                <div className="footer-div-2">
                    <ul className="footer-ul">
                        <li className="footer-list">
                            <a href="#" className="footer-link">
                                Использование материалов
                            </a>
                        </li>
                        <li className="footer-list">
                            <a href="#" className="footer-link">
                                Темы дня
                            </a>
                        </li>
                        <li className="footer-list">
                            <a href="#" className="footer-link">
                                Наша команда

                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-div-3">
                <div>
                    <p className="footer-text-1">Наши социальные сети</p>
                </div>
                <div className="footer-div-logo">
                    <a href="#">
                        <img className="footer-logo" src={facebook} alt="facebook logo" />
                        <img className="footer-logo-1" src={instagram} alt="instagram logo" />
                        <img className="footer-logo-2" src={telegram} alt="telegram logo" />
                        <img className="footer-logo-3" src={youtube} alt="youtube logo" />
                    </a>
                </div>
            </div>

        </div>

    </footer>
      </>
    );
};

export default Footer;