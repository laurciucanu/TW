<?php
$strSQL2 = "SELECT C.* FROM ($strSQL1) C WHERE C.ROWNO > $Page_Start AND C.ROWNO <= $Row_End";
$objParse = oci_parse($objConnect, $strSQL2);
oci_execute ($objParse,OCI_DEFAULT);
while($objResult = oci_fetch_array($objParse,OCI_ASSOC))
{
?>

  <tr>
    <td align="center"><?php echo $objResult["NUME"];?></td>
    <td align="center"><?php echo $objResult["DECEDATI"];?></td>
    <td align="center"><?php echo $objResult["RANITI"];?></td>
    <td align="center"><?php echo $objResult["DISPARUTI"];?></td>
    <td align="center"><?php echo $objResult["CLADIRI_DISTRUSE"];?></td>
    <td align="center"><?php echo $objResult["DURATA"];?></td>
    <td align="center"><?php echo $objResult["MAGNITUDINE"];?></td>
    <td align="center"><?php echo $objResult["ADANCIME"];?></td>
    <td align="center"><?php echo $objResult["PAGUBE_MATERIALE"];?></td>
    <td align="center"><?php echo $objResult["NUMAR_REPLICI"];?></td>
  </tr>
<?php
}
?>