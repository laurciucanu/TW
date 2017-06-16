<!DOCTYPE html>
<html>
  <head>    
  
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <link rel="stylesheet" type="text/css" href="/tw/style.css">
      <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="http://d3js.org/d3.v3.min.js"></script>
    <script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>

  </head>

  <body>
<div class="meniu">
          <ul class="nav">
          <a class="pozaHeader" href="/tw/Acasa/acasa.html">
             <img class="pozaHeader" src="/tw/nepal-quake.jpg" >
        </a>
       
        <li><a href="/tw/Acasa/acasa.html">DESPRE CUTREMUR</a></li>
        <li><a href="/tw/Diagrame/charts.html">DIAGRAME</a></li>
        <li><a href="/tw/Tabel/tabel.html">TABEL</a></li>
        <li><a href="/tw/Harta/harta.html">HARTA</a></li>

    <div class="dropdown">
         <li>REGIUNI&#9660;</li>
      <ul class="dropdown-content ">
        <li><a href="/tw/Regiuni/nord.html">Nord</a></li>
        <li><a href="/tw/Regiuni/sud-vest.html">Sud-Vest</a></li>
        <li><a href="/tw/Regiuni/sud.html">Sud</a></li>
        <li><a href="/tw/Regiuni/sud-est.html">Sud-Est</a></li>
        <li><a href="/tw/Regiuni/est.html">Est</a></li>
        </ul>
      </ul>
    </div>
    
  <div class="content">
  <div class="titluDiagrame">
            <h1 align="center">Aici puteți genera diagramele în funcție de categorie:</h1>
        </div>
    <div class="formular">
        <form action="charts2.php"><center>

        <div class="cat">
        Categorie
                <select class="textCategorie" name="categorie">
                  
                  <option value="DECEDATI">Decedati</option>
                  <option value="RANITI">Raniti</option>
                  <option value="DISPARUTI">Disparuti</option>
                  <option value="CLADIRI_DISTRUSE">Cladiri distruse</option>
                  <option value="DURATA">Durata</option>
                  <option value="MAGNITUDINE">Magnitudine</option>
                  <option value="ADANCIME">Adancime</option>
                  <option value="PAGUBE">Pagube materiale</option>
                  <option value="NUMAR_REPLICI">Numar replici</option>
                </select>
        <input type="submit" class="butonSubmit"></input>
        
      </div>
        <br />
        <br />
        </center>
        </form>
    
  
  
      <?php include 'diagrame.php'; ?>
    
    </div>
  </div>
  </div>
  <button onclick="topFunction()" id="myBtn" title="Go to top">&#x25B2;</button>
<script type="text/javascript" src="/tw/TopButton.js"></script>
  </body>
</html>         