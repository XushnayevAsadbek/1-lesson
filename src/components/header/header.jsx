import dsf from '../images/apple1.png'
import reklama from '../images/reklama.png'
import uy from '../images/uy.png'
import logo from '../images/logo.png'
import rasm1 from '../images/rasm1.png'
import rasm2 from '../images/rasm2.png'
import rasm3 from '../images/rasm3.png'
import rasm4 from '../images/rasm4.png'
import rasm5 from '../images/rasm5.png'
import rasm6 from '../images/rasm7.png'
import aside from '../images/aside.png'






const Header = () => {
    return (
        <>

            <header className="header">
                <div className="container">
                    <div className="header-top">
                        <div className="header-top-1">
                            <h2 className="top-heading">NAMANGANLIKLAR 24</h2>
                            <span className="top-span-1">$ 10137.2 </span>
                            <span className="top-span-2">P 138.26</span>
                        </div>
                        <div className="header-top-2">
                            <input className="button" type="search" placeholder="Поиск" />
                            <button className="btn-1"> УЗ / РУ</button>
                            <button className="btn-2">Войти</button>
                        </div>
                    </div>
                </div>
            </header>



            <header className="header-bottom">
                <div className="container">
                    <div className="header-bottom">
                        <nav className="header-nav">
                            <ul className="header-list">
                                <li className="header-item">
                                    <a className="header-link" href="#">Главное</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Интересное</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Экономика</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Политика</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Общество</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Технологии</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Спорт</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Культура</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Происшествия</a>
                                </li>
                                <li className="header-item">
                                    <a className="header-link" href="#">Наука</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <hr />
                </div>
            </header>


            <main id="main">
        <section className="section">
            <div className="container">
                <div className="div-img">
                    <a href="https://www.youtube.com/namanganliklar24" target="_blank"> <img src={reklama}
                            alt="optimize photo" /></a>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <h3 className="section-title-1">Интересное</h3>
                <div className="main-section-div-box">
                    <div className="main-div-box-1">
                        <a href="#">
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={uy}
                                        alt="pilot photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">Отопление Ташкента на 30 лет переходит в управление
                                        французской Veolia</p>
                                    <p className="section-main-text-1">Система теплоснабжения Ташкента на 30 лет будет
                                        передана в управление французской компании Veolia для модернизации и
                                        реконструкции, сообщает 22 сентября пресс-служба...</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={dsf}
                                        alt="apple ofise photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">В Пользователи жалуются на новую проблему iPhone 13,
                                        связанную с камерой</p>
                                    <p className="section-main-text-1">Пользователи смартфона Apple iPhone 13 продолжают
                                        сообщать о новых проблемах, с которыми они сталкиваются при использовании
                                        флагмана, поступившего в продажу только позавчера...</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={rasm1}
                                        alt="halo photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">Halo Infinite сравнили на Xbox One, Xbox One X, Xbox
                                        Series S и Xbox Series X</p>
                                    <p className="section-main-text-1">Ютубер с канала ElAnalistaDeBits сравнил Halo
                                        Infinite на консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series X.
                                        Графика впечатляет на всех платформах. Также отмечается...</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={rasm2}
                                        alt="car  photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">В Узбекистане показали тюнинговые варианты моделей
                                        Lacetti, Cobalt, Nexia и Spark</p>
                                    <p className="section-main-text-1">«В сети наши потребители обсуждали тему сильного
                                        преобладания белого цвета в модельном ряду UzAuto Motors. Почему вы не делаете
                                        двухцветные автомобили? Этот вопрос был...</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={rasm3}
                                        alt="apple phone photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">Время автономной работы iPhone 13 Pro Max стало рекордным
                                        для смартфонов Apple</p>
                                    <p className="section-main-text-1">Линейка смартфонов iPhone 13 от Apple была
                                        презентована на прошлой неделе. Прием предзаказов на устройство стартовал 22
                                        сентября, а 24 сентября новинка появилась в магазинах.</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={rasm4}
                                        alt="kitay photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">Криптобиржа Huobi закрыла регистрацию пользователей из
                                        Китая</p>
                                    <p className="section-main-text-1">Крупнейшая в Китае биржа для торговли биткоинами
                                        Huobi приостановила регистрацию пользователей из КНР. Ранее местный Центробанк
                                        назвал нелегальными все транзакции...</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={rasm5}
                                        alt="kitay photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">Китай раскритиковал заключенный Австралией, США и
                                        Великобританией антикитайский союз AUKUS</p>
                                    <p className="section-main-text-1">Не только Франция, которая лишилась многомиллиардного
                                        контракта с Австралий, осталась недовольна созданием трехстороннего оборонного
                                        альянса AUKUS, пишет Anna-News.info</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                            <div className="main-div-box">

                                <div>
                                    <img className="section-img-1" width="210" height="165" src={rasm6}
                                        alt="car photo " />
                                </div>

                                <div>
                                    <p className="section-text-1">Китай раскритиковал заключенный Австралией, США и
                                        Великобританией антикитайский союз AUKUS</p>
                                    <p className="section-main-text-1">Не только Франция, которая лишилась многомиллиардного
                                        контракта с Австралий, осталась недовольна созданием трехстороннего оборонного
                                        альянса AUKUS, пишет Anna-News.info</p>
                                    <div className="icon-text">
                                        <img className="section-icon-1" src={logo} alt="icon " />
                                        <p className="section-icon-text-1">ИА Красная Весна 15:55</p>
                                    </div>

                                </div>
                            </div>
                        </a>
                    </div>
                    <aside className="aside-div">
                        <a href="#">
                            <div className="aside-div-box">
                                <h3 className="aside-title">Главное</h3>
                                <h4 className="aside-title-1">В Фергане создадут узбекско-пакистанский университет</h4>
                                <p className="aside-text">Sputnik Узбекистан <time>14:09</time> </p>


                                <h4 className="aside-title-2">В Узбекистан утвердил соглашение о содействии занятости в
                                    странах СНГ</h4>
                                <p className="aside-text">ИА Красная Весна <time>10:19</time> </p>

                                <h4 className="aside-title-2">В Узбекистане увеличиваются очереди за автомобилями UzAuto
                                </h4>
                                <p className="aside-text">Северная газета (Армянск) 13:50 <time>13:50</time> </p>

                                <h4 className="aside-title-2">В Минтуризма опровергло приостановку выплат за шаги</h4>
                                <p className="aside-text-1">Sputnik Узбекистан 14:32 <time>14:32</time> </p>


                            </div>
                            <div>
                                <img className="aside-img" src={aside} alt="aside img" width="393"
                                    height="315" />
                            </div>
                        </a>

                    </aside>

                </div>
                <button className="aside-btn">Показать ещё </button>
            </div>

        </section>
    </main>

        </>
    );
};

export default Header;