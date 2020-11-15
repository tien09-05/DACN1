<?php
require 'restful_api.php';


class api extends restful_api
{

    function __construct()
    {
        parent::__construct();
    }


    function meals()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $conn = new PDO("mysql:host=$servername;dbname=qlcanteen", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->exec("set names utf8");


        if ($this->method == 'GET') {

            $stmt = $conn->prepare('SELECT * from meals');
            //Thiết lập kiểu dữ liệu trả về
            $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();
            $data = $stmt->fetchAll();
            $this->response(200, $data);
        } elseif ($this->method == 'POST') {
        } elseif ($this->method == 'PUT') {
            // trả về dữ liệu bằng cách gọi: $this->response(200, $data)
        } elseif ($this->method == 'DELETE') {
            // trả về dữ liệu bằng cách gọi: $this->response(200, $data)
        }
    }
}

$api = new api();
