<?php

if(isset($_POST['full_name']))
{

$con = mysqli_connect('localhost', 'root', 'root', 'db_eliftech');

$txtName = $_POST['full_name'];
$txtEmail = $_POST['email'];
$txtDob = $_POST['dob'];
$txtRadio = $_POST['where_heard'];

$sql = "INSERT INTO `tbl_eliftech` (`fld`, `fldName`, `fldEmail`, `fldDate`, `fldRadio`) VALUES ('0', '$txtName', '$txtEmail', '$txtDob', '$txtRadio')";
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Form submitted";
}
}
else
{
	echo "Something wrong";
	
}


mysqli_close($con);
?>

