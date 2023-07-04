<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Галактический вестник</title>
  <meta name="description" content="Галактический вестник - это сайт, где мы публикуем статьи о нашей галактике Млечный Путь и других галактиках.В основном, на сайте публикуются статьи на космическую тематику, но иногдавстречаются и статьи на другие темы." />
  <meta name="keywords" content="Галактический вестник, новости галактики" />
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="css/normalize.min.css">
  <link rel="stylesheet" href="css/style.min.css">
  <link rel="stylesheet" href="css/media.min.css">
</head>
<body>
  <main>
    <header class="header">
      <div class="container">
        <a class="header__link" href="#">
          <img class="header__img" src="img/svg/logo.svg" alt="Логотип" />
        </a>
      </div>
    </header>
    <section class="banner" id="banner">
      <div class="banner__banner">
        <div class="container">
          <h1 class="banner__title">
            Возвращение этнографа
          </h1>
          <p class="banner__desc">
            Сегодня с Проксимы вернулась этнографическая экспедиция Джона Голдрама.
          </p>
        </div>
        <ul class="banner__list">
          <li class="banner__item">
            <img class="banner__img" src="img/banner1.jpg" alt="Изображение 1"/>
          </li>
          <li class="banner__item banner-animate">
            <img class="banner__img" src="img/banner2.jpg" alt="Изображение 2"/>
          </li>
        </ul>
      </div>
    </section>
    <section class="news" id="news">
      <div class="container">
        <h2 class="news__title">
          Новости
        </h2>
        <div class="news__wrapper">
          <ul class="news__list">
            <?php
              require_once('php/db_connect.php');
              $result = mysqli_query($link, "SELECT * FROM `news` ORDER BY `news`.`date` DESC");
              $count = 1;
              while($row = $result->fetch_assoc()) {
                $date = date("d.m.Y", strtotime($row['date']));
                echo('
                <li class="news__item" id="news-'.$count.'">
                  <a class="news__link" href="detail.php?URL='.$row['id'].'"></a>
                  <span class="news__date">
                    '.$date.'
                  </span>
                  <h3 class="news__name">
                  '.$row['title'].'
                  </h3>
                  '.$row['announce'].'
                  <span class="news__button">
                    Подробнее
                    <svg width="17" height="16" viewBox="0 0 17 13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 7C0.447715 7 -4.82823e-08 7.44772 0 8C4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM16.466 8.70711C16.8565 8.31658 16.8565 7.68342 16.466 7.29289L10.102 0.928931C9.7115 0.538407 9.07834 0.538407 8.68781 0.928932C8.29729 1.31946 8.29729 1.95262 8.68781 2.34315L14.3447 8L8.68781 13.6569C8.29729 14.0474 8.29729 14.6805 8.68781 15.0711C9.07834 15.4616 9.7115 15.4616 10.102 15.0711L16.466 8.70711ZM1 9L15.7589 9L15.7589 7L1 7L1 9Z"/>
                    </svg>
                  </span>
                </li>
                ');
                $count++;
              }
            ?>
          </ul>
        </div>
        <ul class="news__controls">
        </ul>
        <script src="js/news.js"></script>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <hr class="footer__line">
        <p class="footer__text">
          © 2023 — 2412 «Галактический вестник»
        </p>
      </div>
    </footer>
  </main>
</body>
</html>
