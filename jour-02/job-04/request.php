<?php
$message = 'Empty !';
function getDb()
{
    $servername = 'localhost';
    $username_b = 'root';
    $password_b = '';
    $database = 'lp_official';
    $_db = null;

    if (!$_db) {
        try {
            $_db = new PDO('mysql:dbname=' . $database . ';host=' . $servername . ';charset=utf8mb4', $username_b, $password_b);

            $_db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

        } catch (PDOException $e) {
            header("HTTP/1.1 403 Acces refused to the database");
            die();
        }
    }
    return $_db;
}

function my_insert_student(string $email, string $fullname, string $gender, $birthdate, int $gradeId) : void
{
    $queInsertStudent = "INSERT INTO `student` (`grade_id`, `email`, `fullname`, `birthdate`, `gender`) VALUES (:grade_id, :email, :fullname, :birthdate, :gender)";
    $insertStudent = getDb()->prepare($queInsertStudent);
    $insertStudent->bindParam(':email', $email);
    $insertStudent->bindParam(':fullname', $fullname);
    $insertStudent->bindParam(':gender', $gender);
    $insertStudent->bindParam(':birthdate', $birthdate);
    $insertStudent->bindParam(':grade_id', $gradeId);
    $insertStudent->execute();

}
if(isset($_POST['student-mail'])){
    if(isset($_POST['student-mail']) && isset($_POST['student-fullname']) && isset($_POST['student-gender']) && isset($_POST['student-birthdate']) && isset($_POST['student-grade_id']))
    {
        // $birthdateStr = $_POST['student-birthdate'];
        // 
        // $format = 'Y-m-d';

        // $birthdate = DateTime::createFromFormat($format, $birthdateStr);

        my_insert_student($_POST['student-mail'], $_POST['student-fullname'], $_POST['student-gender'], $_POST['student-birthdate'], (int) $_POST['student-grade_id']);

        $message = 'Student registered successfully !';
    } else 
    {
        $message = 'please, enter all input data !';
    }
}

echo json_encode($message);