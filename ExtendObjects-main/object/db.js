var db=[ [],[],[],[],[] ];


class GetData{
	static go(url){
		return new Promise( function (resolve,reject)  {
			let xml=new XMLHttpRequest();
			xml.open('get',url);
			xml.onreadystatechange=()=>{
				if(xml.status==200 && xml.readyState==4){
					resolve( xml.responseText  )
				}
			}

			xml.send();

		})
	}

}

/// ovje mi je dosao zahtijev koji sam dobio od githuba text
let texts=GetData.go(' https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt ');

var AllObj;

//onda text koji sam dobio 
texts.then( (res) =>  {

	AllObj=res.split('\n');	///rastavi sav text koji sam dobio i stavi ga u var AllObj
	setTimeout(Extra,500 );		///funkcija koja ceka 500 mils da se odradi pa ce se pogrenuti funckcija Extra

})

var word=" ";
var loopArrey=3;
var loop=0;


///Funkcija Extra 
function Extra(){
	
	for(let i=0;i<AllObj.length;i++){

		if(i == loopArrey){
			word=AllObj[i];
			db[loop].push(word);////Loopam kroz Allboj i saljem svaki podatak u arrey db to jest u bazu podataka 
			loop++;				
			loopArrey+=4;		///Ako zelis izracunaj sebi svaki podatak saljem po jedan dog i ==4 kada bude jednak cetri uzmi i puni arrey db na pozicija npr prvo pini db[0],pa onda db[1],db[2]
		}else{
			word=AllObj[i];
			db[loop].push(word);
			

		}


	}

}

///kada se ovo zavrsi mi imamo podatke u db sve rastavljeno kako treba svi podaci su nam u db 

///ukucaj ovdje console.log(db);  pa ce viditi podatke 

///sada treba da napravimo ovjekte koji ce se pokazivati 







