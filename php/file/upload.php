<!-- https://zetawiki.com/wiki/PHP_%ED%8C%8C%EC%9D%BC_%EC%97%85%EB%A1%9C%EB%93%9C_%EA%B5%AC%ED%98%84 -->
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $upload_dir = './upload';
    $name = $_FILES['myfile']['name'];

    echo "filename: $name";

    move_uploaded_file($_FILES['myfile']['tmp_name'], "$upload_dir/$name");
}
?>
<h1>Upload</h1>
<form method="post" action="" enctype="multipart/form-data">
    <input type="file" name="myfile" value="" />
    <input type="submit" name="" value="Upload" />
</form>

