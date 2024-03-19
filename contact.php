<?php include
// Output messages
$responses = [];
// Check if the form was submitted
if (isset($_POST['email'], $_POST['tel'], $_POST['contact-type'], $_POST['name'], $_POST['msg'])) {
	// Validate email adress
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$responses[] = 'Email is not valid!';
	}
	// Make sure the form fields are not empty
	if (empty($_POST['email']) || empty($_POST['tel']) || empty($_POST['contact-type']) || empty($_POST['name']) || empty($_POST['msg'])) {
		$responses[] = 'Please complete all fields!';
	} 
	// If there are no errors
	if (!$responses) {
		// Where to send the mail? It should be your email address
		$to      = 'ashley@yuryo-kokusai.co.jp';
		// Send mail from which email address?
		$from = 'ashley@yuryo-kokusai.co.jp';
		// Mail subject
		$contacttype = $_POST['contact-type'];
		// tek subject
		$tel = $_POST['tel'];
		// Mail message
		$message = $_POST['msg'];
		// Mail headers
		$headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		// Try to send the mail
		if (mail($to, $tel, $contacttype, $message, $headers)) {
			// Success
			$responses[] = 'Message sent!';		
		} else {
			// Fail
			$responses[] = 'Message could not be sent! Please check your mail server settings!';
		}
	}
}
?>

<?php if ($responses): ?>
	<p class="responses"><?php echo implode('<br>', $responses); ?></p>
<?php endif; ?>
    