<html>
<head>

<link rel="stylesheet" type="text/css" href="tablestyle.css" />

</head>
<body>
<div id="meniu">
          <ul class="nav">
          <img id="img" src="nepal-quake.jpg" >
        <li><a href="/">DESPRE CUTREMURUL DIN NEPAL</a></li>
        <li><a href="http://localhost:8181/harta_tw/tw/charts.html">DIAGRAME</a></li>
        <li><a href="http://localhost:8181/harta_tw/tw/tabel.html">TABEL</a></li>
        <li><a href="file:///C:\Apache24\htdocs\harta_tw\tw\charts.html">HARTA</a></li>
        <li><a href="/regiuni/">REGIUNI </a></li>

      </ul>
    </div>
<?php include 'tabel1.php'; ?>
<div id="tabel">
<table width="1000" border="1" align=center>
  <tr>
    <th width="100"> <div align="center">NUME </div></th>
    <th width="170"> <div align="center">DECEDATI </div></th>
    <th width="100"> <div align="center">RANITI </div></th>
    <th width="100"> <div align="center">DISPARUTI </div></th>
    <th width="100"> <div align="center">CLADIRI_DISTRUSE </div></th>
    <th width="100"> <div align="center">DURATA </div></th>
    <th width="100"> <div align="center">MAGNITUDINE </div></th>
    <th width="100"> <div align="center">ADANCIME </div></th>
    <th width="100"> <div align="center">PAGUBE_MATERIALE </div></th>
    <th width="100"> <div align="center">NUMAR_REPLICI</div></th>
  </tr>
<?php include 'tabel2.php'; ?>
</table>
</div>

<br>
<div id="s">Total <?php echo $Num_Rows;?> inregistrari <br/> Numar pagini: <?php echo $Num_Pages;?> <br/> Pagina :
<?php include 'tabel3.php'; ?>
<br/>
</div>
</body>
</html>