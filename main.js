canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 50;

rover_width2 = 120;
rover_height2 = 200;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg";

rover_image = "https://lh3.googleusercontent.com/proxy/7lgx2a5NogyKPRb3RU487OpR_tJ7v4j-UcsEz5GbWox8BiNxTazX5jFCDAceYp9-WMKoKRlDUNeOgmewmVuzdTXnBqSMsblKv6350b_BmoS6BoN3nt5V6o4X_cQHKcaZGYUuqfuik8h8p_QnocSAEsObgKw5xjc37P-yGoJC9cpgp3U";
rover_image2 = "https://images.vexels.com/media/users/3/139441/isolated/preview/b779109e8e69df289e6629fc7a72f0ee-race-car-racing-side-view-by-vexels.png";

rover_x = 10;
rover_y = 10;
rover_x2 = 10;
rover_y2 = 40;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadRover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
  
  rover_imgTag2 = new Image(); //defining a variable with a new image
	rover_imgTag2.onload = uploadRover2; // setting a function, onloading this variable
	rover_imgTag2.src = rover_image2;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
function uploadRover2() {
	ctx.drawImage(rover_imgTag2, rover_x2, rover_y2, rover_width2, rover_height2);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(keyPressed == '87')
		{
			up2();
			console.log("car 2 up");
		}
		if(keyPressed == '83')
		{
			down2();
			console.log("car 2 down");
		}
		if(keyPressed == '65')
		{
			left2();
			console.log("car 2 left");
		}
		if(keyPressed == '68')
		{
			right2();
			console.log("car 2 right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadRover();
		 uploadRover2();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadRover();
		 uploadRover2();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadRover();
		 uploadRover2();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadRover();
		uploadRover2();
   }
}



function up2()
{
	if(rover_y2 >=0)
	{
		rover_y2 = rover_y2 - 10;
		console.log("When up arrow is pressed,  x = " + rover_x2 + " | y = " +rover_y2);
		 uploadBackground();
		 uploadRover2();
		 uploadRover();
	}
}
function down2()
{
	if(rover_y2 <=500)
	{
		rover_y2 =rover_y2+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x2 + " | y = " +rover_y2);
		uploadBackground();
		 uploadRover2();
		 uploadRover();
	}
}
function left2()
{
	if(rover_x2 >= 0)
	{
		rover_x2 =rover_x2 - 10;
		console.log("When left arrow is pressed,  x = " + rover_x2 + " | y = " +rover_y2);
		uploadBackground();
		 uploadRover2();
		 uploadRover();
	}
}
function right2()
{
	if(rover_x2 <= 700)
	{
		rover_x2 =rover_x2 + 10;
		console.log("When right arrow is pressed,  x = " + rover_x2 + " | y = " +rover_y2);
		uploadBackground();
		uploadRover2();
		uploadRover();
   }
}