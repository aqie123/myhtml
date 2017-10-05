<?php 
session_start();
$mem = new Memcache();
$mem->connect('localhost','11211');
// $mem ->addServer("localhost",11212);

echo $mem->get('mut4ir03cj4oqms39gpi2vojo0');


 ?>