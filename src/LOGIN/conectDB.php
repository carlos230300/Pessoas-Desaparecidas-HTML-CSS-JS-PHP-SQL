<?php

// Efetua a conexão com o Banco de Dados

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'sos';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
?>