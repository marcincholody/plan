var data;
var dzien;
var godz;
var min;

function start() 
{
	data = new Date();
	dzien = data.getDay()+1;
	godz  = data.getHours();
	min = data.getMinutes();
	if(dzien == 2){pon();}
	if(dzien == 3){wto();}
	if(dzien == 4){sro();}
	if(dzien == 5){czw();}
	if(dzien == 6){pia();}
	if(dzien == 1 || dzien == 7){weekend();}
	
}

function pon() 
{
	if (godz < 8) 
	{
		var ileg = 7 - godz;
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do początku lekcji:<br><br>"+ileg+"h "+ilem+"min<br><br>Pierwsza lekcja:<br><br>WF";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >= 20)
	{
		document.getElementById('main').innerHTML = "<br>Już po lekcjach, miłego dnia";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 35 || godz >=13 & min >= 0)
	{
		if(godz == 12) {var ilem = 60 - min + 20;}
		if(godz == 13) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 25) 
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Linux 304";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >= 40 || godz >=12 & min >= 0)
	{
		if(godz == 11) {var ilem = 60 - min + 25;}
		if(godz == 12) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >=20)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Linux 304";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >= 35 || godz >=11 & min >= 0)
	{
		if(godz == 10) {var ilem = 60 - min + 20;}
		if(godz == 11) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >=25)
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Fizyka 406";
		setTimeout(start,1000);
	}

	else if (godz >= 9 & min >= 40 || godz >=10 & min >= 0)
	{
		if(godz == 9) {var ilem = 60 - min + 25;}
		if(godz == 10) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
	else if (godz >= 9 & min >=35)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Angielski 205";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 50 || godz >=9 & min >= 0)
	{
		if(godz == 8) {var ilem = 60 - min + 35;}
		if(godz == 9) {var ilem = 35 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >=45)
	{
		var ilem = 50 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Angielski 205";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 0)
	{
		if(godz == 8) {var ilem = 45 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
}

function wto() 
{
	if (godz < 8) 
	{
		var ileg = 7 - godz;
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do początku lekcji:<br><br>"+ileg+"h "+ilem+"min<br><br>Pierwsza lekcja:<br><br>Matematyka 213";
		setTimeout(start,1000);
	}

	else if (godz >= 15 & min >= 0)
	{
		document.getElementById('main').innerHTML = "<br>Już po lekcjach, miłego dnia";
		setTimeout(start,1000);
	}

	else if (godz >= 14 & min >= 15)
	{
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 14 & min >=10)
	{
		var ilem = 15 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Ilustrator 300";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >= 25 || godz >=14 & min >= 0)
	{
		if(godz == 13) {var ilem = 60 - min + 10;}
		if(godz == 14) {var ilem = 10 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >=20)
	{
		var ilem = 25 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Ilustrator 300";
		setTimeout(start,1000);
	}

		else if (godz >= 12 & min >= 35 || godz >=13 & min >= 0)
	{
		if(godz == 12) {var ilem = 60 - min + 20;}
		if(godz == 13) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 25) 
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Polski 208";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >= 40 || godz >=12 & min >= 0)
	{
		if(godz == 11) {var ilem = 60 - min + 25;}
		if(godz == 12) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >=20)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Polski 208";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >= 35 || godz >=11 & min >= 0)
	{
		if(godz == 10) {var ilem = 60 - min + 20;}
		if(godz == 11) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >=25)
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Usterki 412";
		setTimeout(start,1000);
	}

	else if (godz >= 9 & min >= 40 || godz >=10 & min >= 0)
	{
		if(godz == 9) {var ilem = 60 - min + 25;}
		if(godz == 10) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
	else if (godz >= 9 & min >=35)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Usterki 412";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 50 || godz >=9 & min >= 0)
	{
		if(godz == 8) {var ilem = 60 - min + 35;}
		if(godz == 9) {var ilem = 35 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >=45)
	{
		var ilem = 50 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Fizyka 406";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 0)
	{
		if(godz == 8) {var ilem = 45 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
}

function sro() 
{
	if (godz < 8) 
	{
		var ileg = 7 - godz;
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do początku lekcji:<br><br>"+ileg+"h "+ilem+"min<br><br>Pierwsza lekcja:<br><br>Historia 313";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >= 20)
	{
		document.getElementById('main').innerHTML = "<br>Już po lekcjach, miłego dnia";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 35 || godz >=13 & min >= 0)
	{
		if(godz == 12) {var ilem = 60 - min + 20;}
		if(godz == 13) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 25) 
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Polski 208";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >= 40 || godz >=12 & min >= 0)
	{
		if(godz == 11) {var ilem = 60 - min + 25;}
		if(godz == 12) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >=20)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Niemiecki 417";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >= 35 || godz >=11 & min >= 0)
	{
		if(godz == 10) {var ilem = 60 - min + 20;}
		if(godz == 11) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >=25)
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Angielski 205";
		setTimeout(start,1000);
	}

	else if (godz >= 9 & min >= 40 || godz >=10 & min >= 0)
	{
		if(godz == 9) {var ilem = 60 - min + 25;}
		if(godz == 10) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
	else if (godz >= 9 & min >=35)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Usterki 412";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 50 || godz >=9 & min >= 0)
	{
		if(godz == 8) {var ilem = 60 - min + 35;}
		if(godz == 9) {var ilem = 35 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >=45)
	{
		var ilem = 50 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Usterki 412";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 0)
	{
		if(godz == 8) {var ilem = 45 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
}

function czw() 
{
	if (godz < 8) 
	{
		var ileg = 7 - godz;
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do początku lekcji:<br><br>"+ileg+"h "+ilem+"min<br><br>Pierwsza lekcja:<br><br>Wychowawcza 213";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >= 20)
	{
		document.getElementById('main').innerHTML = "<br>Już po lekcjach, miłego dnia";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 35 || godz >=13 & min >= 0)
	{
		if(godz == 12) {var ilem = 60 - min + 20;}
		if(godz == 13) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 25) 
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Matematyka 213";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >= 40 || godz >=12 & min >= 0)
	{
		if(godz == 11) {var ilem = 60 - min + 25;}
		if(godz == 12) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >=20)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Windows Server 412";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >= 35 || godz >=11 & min >= 0)
	{
		if(godz == 10) {var ilem = 60 - min + 20;}
		if(godz == 11) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >=25)
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Windows Server 412";
		setTimeout(start,1000);
	}

	else if (godz >= 9 & min >= 40 || godz >=10 & min >= 0)
	{
		if(godz == 9) {var ilem = 60 - min + 25;}
		if(godz == 10) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
	else if (godz >= 9 & min >=35)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Java Script 400";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 50 || godz >=9 & min >= 0)
	{
		if(godz == 8) {var ilem = 60 - min + 35;}
		if(godz == 9) {var ilem = 35 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >=45)
	{
		var ilem = 50 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>BHP 318";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 0)
	{
		if(godz == 8) {var ilem = 45 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
}

function pia() 
{
	if (godz < 8) 
	{
		var ileg = 7 - godz;
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do początku lekcji:<br><br>"+ileg+"h "+ilem+"min<br><br>Pierwsza lekcja:<br><br>Windows Server 412";
		setTimeout(start,1000);
	}

	else if (godz >= 15 & min >= 0)
	{
		document.getElementById('main').innerHTML = "<br>Piątek, piąteczek, piątunio!!!";
		setTimeout(start,1000);
	}

	else if (godz >= 14 & min >= 15)
	{
		var ilem = 60 - min;
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 14 & min >=10)
	{
		var ilem = 15 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Windows Server 412";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >= 25 || godz >=14 & min >= 0)
	{
		if(godz == 13) {var ilem = 60 - min + 10;}
		if(godz == 14) {var ilem = 10 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 13 & min >=20)
	{
		var ilem = 25 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>WF";
		setTimeout(start,1000);
	}

		else if (godz >= 12 & min >= 35 || godz >=13 & min >= 0)
	{
		if(godz == 12) {var ilem = 60 - min + 20;}
		if(godz == 13) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 12 & min >= 25) 
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>WF";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >= 40 || godz >=12 & min >= 0)
	{
		if(godz == 11) {var ilem = 60 - min + 25;}
		if(godz == 12) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 11 & min >=20)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Matematyka 213";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >= 35 || godz >=11 & min >= 0)
	{
		if(godz == 10) {var ilem = 60 - min + 20;}
		if(godz == 11) {var ilem = 20 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 10 & min >=25)
	{
		var ilem = 35 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Matematyka 213";
		setTimeout(start,1000);
	}

	else if (godz >= 9 & min >= 40 || godz >=10 & min >= 0)
	{
		if(godz == 9) {var ilem = 60 - min + 25;}
		if(godz == 10) {var ilem = 25 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
	else if (godz >= 9 & min >=35)
	{
		var ilem = 40 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Berkaman 300";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 50 || godz >=9 & min >= 0)
	{
		if(godz == 8) {var ilem = 60 - min + 35;}
		if(godz == 9) {var ilem = 35 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >=45)
	{
		var ilem = 50 - min;
		document.getElementById('main').innerHTML = "<br>Do końca przerwy:<br><br>"+ilem+" min<br><br>Następna lekcja:<br><br>Berkman 300";
		setTimeout(start,1000);
	}

	else if (godz >= 8 & min >= 0)
	{
		if(godz == 8) {var ilem = 45 - min;}
		document.getElementById('main').innerHTML = "<br>Do końca lekcji:<br><br>"+ilem+" min";
		setTimeout(start,1000);
	}
}

function weekend() 
{
			document.getElementById('main').innerHTML = "<br>Odpoczywaj<br><br>( ;";
}