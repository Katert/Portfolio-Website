<?php

    if(isset($_POST['submit'])) {
				$fname = $_POST['fname'];
				$lname = $_POST['lname'];
				$email = $_POST['email'];
				$subject = $_POST['subject'];
				$phone = $_POST['phone'];
				$company = $_POST['company'];
				$message = $_POST['message'];

				$mailTo = "wesley.kater@icloud.com";
				$headers = "From: ".$email;
				$txt = 
					"First name: ".$fname."\n".
					"Last name: ".$lname."\n".
					"E-mail: ".$email."\n".
					"Subject: ".$subject."\n".
					"Phone: ".$phone."\n".
					"Company: ".$company."\n\n".
					"Message: ".$message;

				mail($mailTo, $subject, $txt, $headers);
				// header("Location: index.php?mailsend");
    }

?>