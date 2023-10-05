<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JEE Advanced AITS </title>
    <link rel="stylesheet" href="AITS.CSS">

</head>

<body>
    <div class="main">
        <div class="left">
            <img src="10.PNG" alt="not found" width="70px">
        </div>
        <div class="mid">
            <ul class="navbar">
                <li><a href="https://jaykumargupta73.github.io/PORTFOLIO/">Home</a></li>
                <li><a href="https://jaykumargupta73.github.io/shedule/">Shedule</a></li>
                <li><a href="https://jaykumargupta73.github.io/pyqs/">PYQs</a></li>
                <li><a href="https://nitkurukshetra.learnyst.com/learn/mock-test/376793/report?qid=376793&resultType=1">Result</a></li>
                <li><a href="file:///C:/Users/Vijay%20kumar/Desktop/test%20series/contacts.html">Contacts</a></li>
            </ul>

        </div>
        <div class="right">
            <button class="btn" onclick="document.getElementById('id01').style.display='block'";>Login</button>
            <button  class="btn" onclick="document.getElementById('id012').style.display='block'";>Signup</button>

        </div>

    </div>
    <div class="toggle" style="margin-bottom: 25px; height: 68px;">
        <a href="https://nitkurukshetra.learnyst.com/learn/home/Test-1" class="TestPrepCardWidget_card__cxw0W"><img
                class="TestPrepCardWidget_icon__7asjW" src="mumbai_logo1.png" width="40" height="40" loading="lazy"
                alt="tp-imag">
            <div class="TestPrepCardWidget_examNameContainer__v5XaG">
                <div class="TestPrepCardWidget_examName__DzID6">
                    <div class="Tooltip_tooltip__z_8bL"><span class="Tooltip_tooltipTrigger__uOMdM">JEE ADVANCED</span>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://nitkurukshetra.learnyst.com/learn/home/Test-1" class="TestPrepCardWidget_card__cxw0W1"
            style="margin-left: 49px;">
            <img class="TestPrepCardWidget_icon__7asjWjm" src="jm.webp" width="40" height="40" loading="lazy"
                alt="tp-imag" style="margin-left: 19px;">
            <div class="TestPrepCardWidget_examNameContainer__v5XaG">
                <div class="TestPrepCardWidget_examName__DzID6">
                    <div class="Tooltip_tooltip__z_8bL"><span class="Tooltip_tooltipTrigger__uOMdM">JEE MAINS</span>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://jaykumargupta73.github.io/pyqs/" class="TestPrepCardWidget_card__cxw0W1"
            style="margin-left: 59px;">
            <img class="TestPrepCardWidget_icon__7asjWjm" src="pyqslogo.PNG" width="45" height="45" loading="lazy"
                alt="tp-imag" style="margin-left: -3px;">
            <div class="TestPrepCardWidget_examNameContainer__v5XaG">
                <div class="TestPrepCardWidget_examName__DzID6">
                    <div class="Tooltip_tooltip__z_8bL"><span class="Tooltip_tooltipTrigger__uOMdM">PYQs</span>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://nitkurukshetra.learnyst.com/learn/home/Test-1" class="TestPrepCardWidget_card__cxw0W1"
            style="margin-left: 62px;">
            <img class="TestPrepCardWidget_icon__7asjWjm" src="mocklogo.PNG" width="45" height="45" loading="lazy"
                alt="tp-imag" style="margin-left: 4px;">
            <div class="TestPrepCardWidget_examNameContainer__v5XaG">
                <div class="TestPrepCardWidget_examName__DzID6">
                    <div class="Tooltip_tooltip__z_8bL"><span class="Tooltip_tooltipTrigger__uOMdM">MOCKs</span>
                    </div>
                </div>
            </div>
        </a>
        <a href="https://nitkurukshetra.learnyst.com/learn/home/Test-1" id="demo" class="po" style="margin-top: 49px; color:red; margin-left: 53px;">
        </a>
        <script>
            // Set the date we're counting down to
            var countDownDate = new Date("march 10, 2023 8:48:00").getTime();

            // Update the count down every 1 second
            var x = setInterval(function () {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                // alert("test to begin in:")
                document.getElementById("demo").innerHTML = "Test will begin in:"+days + "d " + hours + "h "
                    + minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    alert("start your test now.")
                    document.getElementById("demo").innerHTML = "START TEST NOW";
                }
            }, 1000);
        </script>
    </div>
    <section class="section">
        <div class="slider">
            <div class="slide">
                <input type="radio" name="radio-btn" id="radio1">
                <input type="radio" name="radio-btn" id="radio2">
                <input type="radio" name="radio-btn" id="radio3">
                <input type="radio" name="radio-btn" id="radio4">
                <input type="radio" name="radio-btn" id="radio5">

                <div class="st first">
                    <img src="s1.PNG" alt="not found" style="margin-left: 90px;
                    border-radius: 10px;">
                </div>

                <div class="st">
                    <img src="s2.PNG" alt="not found" style="margin-left: 87px; 
                    border-radius: 10px;">
                </div>

                <div class="st">
                    <img src="s3.jpg" alt="not found " style="margin-left: 87px;
                    border-radius: 10px;">
                </div>

                <div class="st">
                    <img src="s4.jpg" alt="not found" style="margin-left: 87px;
                    border-radius: 10px;">
                </div>

                <div class="st">
                    <img src="s5.jpg" alt="not found" style="margin-left: 87px;
                    border-radius: 10px;">
                </div>

                <div class="nav-auto">
                    <div class="a-b1"></div>
                    <div class="a-b2"></div>
                    <div class="a-b3"></div>
                    <div class="a-b4"></div>
                    <div class="a-b5"></div>
                </div>



            </div>
            <div class="nav-m">
                <label for="radio1" class="m-btn"></label>
                <label for="radio2" class="m-btn"></label>
                <label for="radio3" class="m-btn"></label>
                <label for="radio4" class="m-btn"></label>
                <label for="radio5" class="m-btn"></label>

            </div>


        </div>


    </section>
    <script type="text/javascript">
        var counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 5) {
                counter = 1;
            }
        }, 3000);
    </script>







    <style>
body {font-family: Arial, Helvetica, sans-serif;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04AA6D;
  color: white;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 13%;
  border-radius: 10%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
footer {
            background-color: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-logo {
            font-size: 24px;
            font-weight: bold;
        }

        .footer-links ul {
            list-style: none;
            padding: 0;
        }

        .footer-links li {
            display: inline;
            margin-right: 20px;
        }

        .footer-links a {
            color: #fff;
            text-decoration: none;
        }

        .footer-social ul {
            list-style: none;
            padding: 0;
        }

        .footer-social li {
            display: inline;
            margin-right: 20px;
        }

        .footer-social a {
            color: #fff;
            font-size: 20px;
            text-decoration: none;
        }

        .footer-social a:before {
            content: "\f09a"; /* Unicode for the FontAwesome Facebook icon */
            font-family: FontAwesome;
            margin-right: 5px;
        }

        .footer-social a:hover {
            color: #3b5998; /* Facebook color */
        }

        .footer-social a:hover:before {
            content: "\f099"; /* Unicode for the FontAwesome Facebook icon on hover */
        }
</style>
</head>
<body>

<div id="id01" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <button type="submit" style="border-radius: 10px;height: 36px;">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

<style>
body {font-family: cursive;}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: rgba(24, 141, 187, 0.651);;
  color: white;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  position: relative;
}

img.avatar {
  width: 9%;
  border-radius: 10%;
}

.container {
  padding: 8px;
}
body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
        }

        h1 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 24px;
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            margin-bottom: 20px;
        }

        /* Media query for responsive design */
        @media screen and (max-width: 768px) {
            body {
                font-size: 14px;
                line-height: 1.4;
            }

            h1 {
                font-size: 24px;
            }

            h2 {
                font-size: 20px;
                margin-top: 20px;
                margin-bottom: 15px;
            }
        }
span.psw {
  float: right;
  padding-top: -5px;
}

/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-image: url("signimg.PNG");
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  border: 1px solid rgba(136, 136, 136, 0.925);
  width: 50%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}
p {
            font-size: 16px;
            margin-bottom: 20px;
        }

        /* Styles for the footer */
        footer {
            background-color: #333;
            color: #fff;
            padding: 40px 0; /* Adjust the padding to enlarge the footer vertically */
            text-align: center;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer-logo {
            font-size: 24px;
            font-weight: bold;
        }

        .footer-links ul {
            list-style: none;
            padding: 0;
        }

        .footer-links li {
            display: inline;
            margin-right: 20px;
        }

        .footer-links a {
            color: #fff;
            text-decoration: none;
        }
        .image-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* Adjust the number of columns as needed */
            gap: 20px; /* Adjust the gap between images */
        }

        .image {
            width: 100%; /* Set a uniform width for all images */
            height: auto; /* Maintain aspect ratio */
            border: 2px solid #ccc; /* Add a border around images */
            border-radius: 8px; /* Add rounded corners */
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Add a subtle shadow */
        }
        .footer-social ul {
            list-style: none;
            padding: 0;
        }

        .footer-social li {
            display: inline;
            margin-right: 20px;
        }

        .footer-social a {
            color: #fff;
            font-size: 20px;
            text-decoration: none;
        }

        .footer-social a:before {
            content: "\f09a"; /* Unicode for the FontAwesome Facebook icon */
            font-family: FontAwesome;
            margin-right: 5px;
        }

        .footer-social a:hover {
            color: #3b5998; /* Facebook color */
        }
        .hey-jay{
            margin-top: 200px;
        }
        .footer-social a:hover:before {
            content: "\f099"; /* Unicode for the FontAwesome Facebook icon on hover */
        }
@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
</style>
</head>
<body>
<div id="id012" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post" style="height: 500px;margin-left:600px">
    <div class="imgcontainer" style="height: 12px;">
      <span onclick="document.getElementById('id012').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="123.PNG" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="uname"><b>firstname</b></label>
      <input type="text" placeholder="Enter firstname" name="uname" required>

      <label for="lname"><b>lastname</b></label>
      <input type="text" placeholder="Enter lastname" name="lname" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>

      <label for="cpsw"><b>Confirm</b></label>
      <input type="password" placeholder="Confirm Password" name="cpsw" required>
        
      <button type="submit" style="border-radius: 10px;height: 36px;" >Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id012').style.display='none'" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id012');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>
<main class="hey-jay">
    <h1>Welcome to Our Knowledge Hub</h1>
    <div class="image-container">
        <img class="image" src="https://th.bing.com/th/id/OIP.rTb34M-8UDL1cP8b5_dkdAAAAA?pid=ImgDet&w=196&h=102&c=7&dpr=1.5" alt="MockTest Image 12">
    
        <img class="image" src="https://th.bing.com/th?id=OIP.7HS21FZBu3Wk3Rd-nj76RwHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="MockTest Image 1">
        <img class="image" src="https://th.bing.com/th/id/OIP.rTb34M-8UDL1cP8b5_dkdAAAAA?pid=ImgDet&w=196&h=102&c=7&dpr=1.5" alt="MockTest Image 12">
    </div>
    
    <p>Our Knowledge Hub is your gateway to a world of information and learning. We believe that knowledge is power, and we're here to empower you with an extensive collection of insightful articles, educational resources, and expert insights. Whether you're a student, a professional, or a lifelong learner, you'll find valuable content that ignites your curiosity and fuels your desire to grow.</p>
    
    <h2>Our Commitment to Excellence</h2>
    
    <p>At Our Knowledge Hub, we are dedicated to delivering accurate, reliable, and thought-provoking content. Our team of passionate writers and subject matter experts curate articles and resources on a wide range of topics, including science, technology, arts, literature, history, and more. We strive for excellence in every piece we produce, ensuring that you receive content that is informative, engaging, and meaningful.</p>
    
    <p>Whether you're looking to expand your knowledge on a specific subject, stay updated with the latest trends, or simply enjoy a good read, Our Knowledge Hub has something for everyone. From in-depth research articles to practical how-to guides, we aim to provide content that adds value to your life and broadens your horizons.</p>
    
    <div class="image-container">
        <img class="image" src="https://th.bing.com/th?id=OIP.URReaggj7YTVKj1Ymb4JrwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="MockTest Image 2">
        <img class="image" src="https://th.bing.com/th?id=OIP.l0xglJTD3DrFh9AE82EtawHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="MockTest Image 3">
        <img class="image" src="https://th.bing.com/th?id=OIP.v2qYhPg_uo4LmK5QuueMDwAAAA&w=218&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="MockTest Image 4">
    </div>
    <h2>Our Vision for Learning</h2>
    
    <p>We envision a world where learning knows no boundaries. That's why we offer our content free of charge to anyone seeking to learn and grow. We believe that access to knowledge should be inclusive and readily available to all, regardless of geographical location or financial status.</p>
    
    <p>Our user-friendly website is designed to provide a seamless browsing experience on both desktop and mobile devices. We understand the importance of responsive design, ensuring that you can access our content anytime, anywhere.</p>
    <div class="image-container">
        
        <img class="image" src="https://www.practicemock.com/blog/wp-content/uploads/2022/08/Info_Mock_Tests_051021-1-1-1170x1170-1.jpg" alt="MockTest Image 9">
        <img class="image" src="https://th.bing.com/th/id/OIP.3sUX5HNu_0shro9WzBFCLQHaHa?pid=ImgDet&w=1024&h=1024&rs=1" alt="MockTest Image 10">
        <img class="image" src="https://th.bing.com/th/id/OIP.xl7l3rWw_pWfZjL0DsRjNwHaEW?pid=ImgDet&rs=1" alt="MockTest Image 11">
    </div>
    
    <p>Thank you for choosing Our Knowledge Hub as your source of information and inspiration. We invite you to explore our vast collection of articles, engage in meaningful discussions, and embark on a journey of lifelong learning with us. Together, we can unlock the endless possibilities that knowledge brings.</p>
    <div class="image-container">
        <img class="image" src="https://th.bing.com/th/id/OIP.Bzlpc6y6hhQMjpgfq0B-PgHaEH?w=262&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="MockTest Image 5">
        <img class="image" src="https://th.bing.com/th/id/OIP.baCqH9R7dv0JS4UagPrkngHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="MockTest Image 6">
        <img class="image" src="https://th.bing.com/th/id/OIP.PETGbDUGUkm7xyuYa7SsBQHaDz?w=314&h=179&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="MockTest Image 7">
    </div>
    
    <!-- Add more paragraphs and content here to reach your desired word count -->
    
</main>

<!-- Footer Section -->
<footer>
    <div class="footer-content">
        <div class="footer-logo">
            <a href="#">MockTest</a>
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-social">
        <ul>
            <li><a href="#"><i class="material-icons">facebook</i></a></li>
            <li><a href="#"><i class="material-icons">twitter</i></a></li>
            <li><a href="#"><i class="material-icons">linkedin</i></a></li>
        </ul>
    </div>
</footer>
    </header>
</body>

</html>
