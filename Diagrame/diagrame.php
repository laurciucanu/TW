<?php 

  if($_GET['categorie'] == 'DECEDATI'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="decedati" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="decedati.js"></script>';
    echo '</body>';
    echo '</html>';
 }
 else 
  if($_GET['categorie'] == 'RANITI'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="raniti" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="raniti.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  else 
  if($_GET['categorie'] == 'CLADIRI_DISTRUSE'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="cladiri" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="cladiri.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  else 
  if($_GET['categorie'] == 'DISPARUTI'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="disparuti" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="disparuti.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  if($_GET['categorie'] == 'DURATA'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="durata" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="durata.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  if($_GET['categorie'] == 'MAGNITUDINE'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="durata" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="magnitudine.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  if($_GET['categorie'] == 'ADANCIME'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="adancime" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="adancime.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  if($_GET['categorie'] == 'PAGUBE'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="pagube" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="pagube.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  if($_GET['categorie'] == 'NUMAR_REPLICI'){
    
    echo '<html>';
    echo '<body>';
    echo ' <div id="replici" style="width:500; height:500;"></div> ';
    echo '<script type="text/javascript" src="replici.js"></script>';
    echo '</body>';
    echo '</html>';
  }
  ?>