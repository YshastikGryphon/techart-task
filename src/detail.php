<?
ob_start (); // Buffer output
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/media.css">
  <title><!--TITLE--></title>
  <meta name="description" content="<!--DESCRIPTION-->" />
</head>
<body>
  <main>
    <!-- HEADER -->
    <header class="header header-line">
      <div class="container">
        <a class="header__link" href="index.php">
          <img class="header__img" src="img/svg/logo.svg" alt="Логотип" />
        </a>
      </div>
    </header>

    <section class="detail">

    <?php
      require_once('php/db_connect.php');
      $result = mysqli_query($link, "SELECT * FROM `news` WHERE `id` = '{$_GET['URL']}'");
      $row = $result->fetch_assoc();


      $pageTitle = $row['title'];
      $description = $row['announce'];
    ?>

      <div class="container">
        <?php
        echo ('
        <span class="detail__address">
          <a class="detail__link" href="index.php">Главная</a> / '.$row['title'].'
        </span>
        ');
        ?>

        <?php
        echo ('
        <h1 class="detail__title">
          '.$row['title'].'
        </h1>
        ');
        ?>

        <div class="detail__group">
          <div class="detail__article">
            <article>
            <?php
                $date = date("d.m.Y", strtotime($row['date']));
                echo('

                <span class="detail__date">
                  '.$date.'
                </span>

                <h2 class="detail__name">
                  '.$row['title'].'
                </h2>

                '.$row['content'].'
                ');
              ?>
            </article>
            <a class="detail__back" href="index.php">
            <svg width="26" height="16" viewBox="0 0 26 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.293015 8.70711C-0.0975094 8.31658 -0.0975094 7.68342 0.293014 7.2929L6.65698 0.928934C7.0475 0.538409 7.68067 0.538409 8.07119 0.928934C8.46171 1.31946 8.46171 1.95262 8.07119 2.34315L2.41434 8L8.07119 13.6569C8.46171 14.0474 8.46171 14.6805 8.07119 15.0711C7.68067 15.4616 7.0475 15.4616 6.65698 15.0711L0.293015 8.70711ZM26 9L1.00012 9L1.00012 7L26 7L26 9Z" fill="#fff"/>
            </svg>
              Назад к новостям
            </a>
          </div>
          <?php
          echo ('
            <img class="detail__img" src="img/news/'.$row['image'].'" alt="" />
          ');
          ?>
        </div>

      </div>
    </section>

    <!-- FOOTER -->
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

<?
$pageContents = ob_get_contents ();
ob_end_clean (); // Wipe the buffer

$pageContents = str_replace ('<!--TITLE-->', $pageTitle, $pageContents);
echo str_replace ('<!--DESCRIPTION-->', $description, $pageContents);
?>
