<?php


 if ( isset($_POST['Submit'])) {
     
$name = $_POST['FirstName'];
$LastName = $_POST['LastName'] ;
$visitor_email = $_POST['EmailAddress'];
$HouseNumber = $_POST['HouseNumber'];
$Address = $_POST['Address'];
$postcode = $_POST['Postcode'];
$FilmName = $_POST['FilmName'];
$StartDate = $_POST['StartDate'];
$EndDate = $_POST['EndDate'];
$NumberOfNights = $_POST['NumberOfNights'];
$message = $_POST['additionalcomments'];
 }

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Invalid email value!";
    exit;
}

$email_from = 'Todd-T@email.ulster.ac.uk';//<== update the email address
$email_subject = "DVD Rental";
$email_body = "You have received a new message from the user $name.\n $LastName.\n".
    "To contact the customer please contact them on this email address:\n $visitor_email.\n".
    "Address DVD will be sent to:\n $HouseNumber $Address $postcode.\n".
    "The name of the Rental :\n $FilmName.\n". 
    "Start of Rental:\n $StartDate.\n". 
    "End of Rental :\n $EndDate.\n".
    "Number of nights :\n $NumberOfNights.\n".
    "Here is the message that was left:\n $message.\n".
    
$to = "Todd-T@email.ulster.ac.uk" ;//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);

$to = "$visitor_email" ;//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);

//done. redirect to confirmation page.
header('Location: checkout.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 