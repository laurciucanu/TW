<?php
$objConnect = oci_connect('student', 'STUDENT', 'localhost/XE');
$strSQL1 = "SELECT ROW_NUMBER()  OVER(ORDER BY NUMAR_REPLICI) AS ROWNO, T.* FROM nepal T ";
$objParse = oci_parse ($objConnect, $strSQL1);
oci_execute ($objParse,OCI_DEFAULT);

$Num_Rows = oci_fetch_all($objParse, $Result);

$Per_Page = 25;   // Per Page

if(!isset($_GET["Page"]))
{
	$Page=1;
}
else
{
	$Page = $_GET["Page"];
}

$Prev_Page = $Page-1;
$Next_Page = $Page+1;

$Page_Start = (($Per_Page*$Page)-$Per_Page);
if($Num_Rows<=$Per_Page)
{
	$Num_Pages =1;
}
else if(($Num_Rows % $Per_Page)==0)
{
	$Num_Pages =($Num_Rows/$Per_Page) ;
}
else
{
	$Num_Pages =($Num_Rows/$Per_Page)+1;
	$Num_Pages = (int)$Num_Pages;
}
$Page_End = $Per_Page * $Page;
IF ($Page_End > $Num_Rows)
{
	$Page_End = $Num_Rows;
}

$Row_End = $Per_Page * $Page;
if($Row_End > $Num_Rows)
{
	$Row_End = $Num_Rows;
}


?>