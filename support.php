<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>AboutUs</title>
    <link rel="stylesheet" href="CSS/style.css">
    <script src="scripts/parallax.js"></script>
    <script src="libs/gsap/gsap.min.js" defer></script>
    <script src="libs/gsap/ScrollTrigger.min.js" defer></script>
    <script src="libs/gsap/ScrollSmoother.min.js" defer></script>
    <script src="scripts/ScrollAnim.js" defer></script>
    <script src="scripts/NavHover.js" defer></script>
    <script src="scripts/phone_menu.js" defer></script>
    <link rel="stylesheet" href="CSS/medias.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
    <div class="navigation">
        <div class="container nav__cont">
            <a href="index.html"><img src="resources/test_dagger_final.png" alt=""></a>
            <div class="nav__main">
                <div class="nav__button" style='width: 25%;text-align: center;'>
                    <a href="index.html" class="nav__main-page">Главная</a>
                    <div class="line__main line"></div>
                </div>
                <div class="nav__button">
                    <a href="shop.html" class="nav__shop">Магазин</a>
                    <div class="line__shop line"></div>
                </div>
                <div class="nav__button">
                    <a href="support.php" class="nav__supp">Поддержка</a>
                    <div class="line__supp line" style="width: 100%;"></div>
                </div>
                <div class="nav__button">
                    <a href="aboutUs.html" class="nav__about">О нас</a>
                    <div class="line__about line"></div>
                </div>
            </div>
            <div class="log__btn">
                <a href="login.html" class="nav__login">Вход</a>
                <div class="line__login line"></div>
            </div>
            <div class="nav__phone-btn">
                <img src="resources/burger.png" alt="" style="width: 24px; height: 13px;display: flex;"
                    class="nav__phone1">
                <img src="resources/burger.png" alt="" style="width: 24px; height: 13px;display: none;"
                    class="nav__phone2">
            </div>
        </div>
        <div class="nav__phone-menu" style="background-color: black;">
            <a href="index.html">
                <div class="nav__phone nav__phone-btn1">
                    <p>
                        Главная
                    </p>
                    <div style="background-color: white;width: 100%; height: 1px;"></div>
                </div>
            </a>
            <a href="shop.html">
                <div class="nav__phone nav__phone-btn2">
                    <p>
                        Магазин
                    </p>
                    <div style="background-color: white;width: 100%; height: 1px;"></div>
                </div>
            </a>
            <a href="support.html">
                <div class="nav__phone nav__phone-btn3">
                    <p>
                        Поддержка
                    </p>
                    <div style="background-color: white;width: 100%; height: 1px;"></div>
                </div>
            </a>
            <a href="aboutUs.html">
                <div class="nav__phone nav__phone-btn4">
                    <p>
                        О нас
                    </p>
                    <div style="background-color: white;width: 100%; height: 1px;"></div>
                </div>
            </a>
            <a href="login.html">
                <div class="nav__phone nav__phone-btn5">
                    <p>
                        Вход
                    </p>
                    <div style="background-color: white;width: 100%; height: 1px;"></div>
                </div>
            </a>
        </div>
    </div>

    <div class="wrapper">
        <div class="container1">
            <header>
                <div class="headerS">
                    <div class="headerS__block">
                        <div class="header__container">
                            <div class="header__glaw">
                                <h1>Поддержка</h1>
                            </div>
                            <?php
                            if (!isset($_GET['enter'])) {
                                ?>
                                <form method="get">
                                    <div class="header__login">
                                        <div class="header__input">
                                            <div class="header__loginP">
                                                <label for="name">Имя</label>
                                                <input id="name" name="name" type="text" autocomplete="off">
                                            </div>
                                            <div class="header__passP">
                                                <label for="email">E-mail</label>
                                                <input id="email" name="email" type="email" autocomplete="off">
                                            </div>
                                            <div class="header__passP">
                                                <label for="phone">Телефон</label>
                                                <input id="phone" name="tell" type="text" autocomplete="off">
                                            </div>
                                        </div>
                                        <button name="enter" class="headerL__button">Отправить</button>
                                    </div>
                                </form>
                            <?
                            } else {
                                $name = $_GET['name'];
                                $email = $_GET['email'];
                                $tell = $_GET['phone'];
                                $message = "Имя - $name
                                Почта - $email
                                Телефон - $tell";
                                $to = "ilya_hleb@mail.ru";
                                $from = "darkmime123@gmail.com";
                                $subject = "Заявка от пользователя - $name";
                                $subject = "=?utf-8?B?" . base64_encode($subject) . "?=";
                                $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/plain; charset=utf-8\r\n";
                                if (mail($to, $subject, $message, $headers))
                                    echo "\nВаша заявка отправлена!";
                                else
                                    echo "\nОшибка при отправке!";
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </header>
            <div class="slicer">
                <div class="slicer__container">
                    <img src="resources/slicer.png" alt="">
                </div>
            </div>
            <footer>
                <div class="container cont">
                    <a href="index.html"><img src="resources/test_dagger_final.png" alt="" class="footer__logo"></a>
                    <div class="footer__mid">
                        <a href="index.html">Главная</a>
                        <a href="shop.html">Магазин</a>
                        <a href="support.html">Поддержка</a>
                        <a href="aboutUs.html">О нас</a>
                    </div>
                    <div class="footer__socials">
                        <a href=""><img src="resources/dis_png 1.png" alt=""></a>
                        <a href=""><img src="resources/vk_png 1.png" alt=""></a>
                        <a href=""><img src="resources/yotube_png 1.png" alt=""></a>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</body>

</html>