<?php

    define("FILENAME","database.txt");

    if(isset($_POST["save"]) && !empty($_POST["save"])){
        saveToFile($_POST["save"]);
    }

    function saveToFile($stringToSave){

        $object = new StdClass();
        $object->last_modified = time();
        $object->text = $stringToSave;

        $jsonString = json_encode($object);

        // salvestatakse string kujul: {"last_modified":1488894193,"text":"test sisu"}

        if(file_put_contents(FILENAME, $jsonString)){
            echo ('{"message":"saved successfully"}');
        }

    }

?>
