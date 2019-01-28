
//string functions

//add two strings
var profile = "A tribute to The Monkees";
console.log(profile.toUpperCase());
//split a string into an array of words
var words = profile.split(" ");
console.log(words);
console.log(profile.replace("originally ","originally-"));
//search for a word, return its position in string
console.log(profile.search("first"));
//extract string at position to end of string
var newProfile = profile.slice(4);
console.log(newProfile);
//extract string at position to new position
var newProfile = profile.slice(12,16);
console.log(newProfile);

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
} 
	
var Peter Tork = {};
Peter Tork.speak("Thanks for visiting our website");
// Peter Tork says 'Thanks for visiting our website'

<?
session_start();
 
function loginForm(){
    echo'
    <div id="loginform">
    <form action="index.php" method="post">
        <p>Please enter your name to continue:</p>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" />
        <input type="submit" name="enter" id="enter" value="Enter" />
    </form>
    </div>
    ';
}
 
if(isset($_POST['enter'])){
    if($_POST['name'] != ""){
        $_SESSION['name'] = stripslashes(htmlspecialchars($_POST['name']));
    }
    else{
        echo '<span class="error">Please type in a name</span>';
    }
	
if(isset($_GET['logout'])){ 
     
    //Simple exit message
    $fp = fopen("log.html", 'a');
    fwrite($fp, "<div class='msgln'><i>User ". $_SESSION['name'] ." has left the chat session.</i><br></div>");
    fclose($fp);
     
    session_destroy();
    header("Location: index.php"); //Redirect the user
}

//If user submits the form
	$("#submitmsg").click(function(){	
		var clientmsg = $("#usermsg").val();
		$.post("post.php", {text: clientmsg});				
		$("#usermsg").attr("value", "");
		return false;
	});
}
?>

	
 