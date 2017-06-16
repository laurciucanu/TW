<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <link rel="stylesheet" type="text/css" href="/tw/style.css">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />

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
            <li><a href="/tw/Regiuni/nord-vest.html">Nord-Vest</a></li>
            <li><a href="/tw/Regiuni/sud-vest.html">Sud-Vest</a></li>
            <li><a href="/tw/Regiuni/sud.html">Sud</a></li>
            <li><a href="/tw/Regiuni/sud-est.html">Sud-Est</a></li>
            <li><a href="/tw/Regiuni/est.html">Est</a></li>
            <li><a href="/tw/Regiuni/nord-est.html">Nord-Est</a></li>
                </ul>

      </ul>
    </div>
    <div class="content">
<?php

    echo "
    <table border='1'>
        <tr>
            <th>NUME</th>
            <th>DECEDATI</th>
            <th>RANITI</th>
            <th>DISPARUTI</th>
            <th>CLADIRI DISTRUSE</th>
            <th>DURATA</th>
            <th>MAGNITUDINE</th>
            <th>ADANCIME</th>
            <th>PAGUBE MATERIALE</th>
            <th>NUMAR REPLICI</th>
        </tr>
     <tbody>";


    $conn = oci_connect('student', 'STUDENT', 'localhost/XE');
    if( !$conn ) {
        $e = oci_error();
        trigger_error( htmlentities( $e['message'], ENT_QUOTES ), E_USER_ERROR );
    }

    $stid = oci_parse( $conn, "SELECT * FROM nepal ORDER BY ".$_GET['categorie']." ".$_GET['ordine'] );
    if( !$stid ) {
        $e = oci_error( $conn );
        trigger_error( htmlentities( $e['message'], ENT_QUOTES ), E_USER_ERROR );
    }

    $r = oci_execute( $stid );
    if( !$r ) {
        $e = oci_error( $stid );
        trigger_error( htmlentities( $e['message'], ENT_QUOTES ), E_USER_ERROR );
    }

    while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS)) {
		    print "<tr>\n";
		    foreach ($row as $item) {
		        print "    <td>" . ($item !== null ? htmlentities($item, ENT_QUOTES) : "&nbsp;") . "</td>\n";
		    }
		    print "</tr>\n";
		}
		echo "</tbody>";
	print "</table>\n";
		

    oci_free_statement( $stid );
    oci_close( $conn );

    
?>
</div>
</body>
</html>