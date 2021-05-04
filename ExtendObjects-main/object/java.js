	/// napravit cu klassu koja ce praviti objekta a mozes i ti runco napraviti objekte 


	class Studenti{
			constructor( Name,Adresa,Telefon,Kurs ){

				this.Name=Name;
				this.Adresa=Adresa;
				this.Telefon=Telefon;
				this.Kurs=Kurs;
				
			}

		}



		///sada cu ovje napraviti jedno dugme koje kada se klikne ono ce uzeti podatak od prvog 

		//db[0].   pa cemo ih ispisati 



	var body=$('body');
	    body.append('<div id="holder">Click me</div> ');
	    var holder=$('#holder');
	    holder.css({ width:'100px',height:'80px',border:"black solid 3px",background:'orange',marginTop:'20px'
	, marginLeft:'auto',marginRight:"auto"   }); 


	    ///globalna var koja ce uzeti podatke od prvog arreya db[0]; uzet ce sve podatke 
	    //i sacuvati je u var nestonovo.

	    var nestonovo;
	    var student1;
	    holder.on('click',function xx(){

	    	nestonovo=db[0];

	    	//napravit cemo backup funkciju koja ce se pokreniti kasnije da moze da uzme sve pdoatke 

	    	setTimeout ( ()=>{

	    		/// ovo uzima podatke i pravi objekat sada imamo objekat treba ga samo prikazati na necemu ja cu ga prikati onako samo bezveze
	    		student1=new Studenti( nestonovo[0],nestonovo[1],nestonovo[2],nestonovo[3],nestonovo[4] );


	    		////napravit cu samo jos jednu funkciju koja ce samo prikazati ovje podatke o prvom objektu 

	    		setTimeout( PrikaziOjekat,1000 );


	    	},200 )

	    } )

	







	    var del;


	   

	    /// moram ubaciti marginu ovje za loop da ne mijenam nista 
	    var loop1=0;
	    var mar1=[30,80,150,180];

	function PrikaziOjekat(){

		console.log('dada')

		console.log(student1);	
		//ovje pravimo oblik div koji ce dobiti te podatke 
		body.append('<div id="studentholder"></div>  ');
		var studentholder=$('#studentholder');
		$(studentholder).css({ display: "inline-block",border:'1px solid black',height:250,width:'250px',background:'gray',
			marginTop:'30px',marginLeft:"15px",	

			})

		///	 sad dole loopa korz objekat i pravi kao paragrafe koji ce biti ispisani

		//ovo je loop kroz objekat prvi objekat loopa koji smo napravili njga lupa i pravi slicno paragrafima i prikazuje ih
		for(let prop in student1 ){

				$(studentholder).append( '<div class="dec dec-'+loop1+'">'+prop+' :  '+student1[prop]+' </div>  ')
				del=$('.dec-'+loop1+' ');
				del.css({position:'absolute', marginTop:mar1[loop1],marginLeft:'5px',color:'gold' })
				loop1++;
			}//end of for


			///uzima u svakom loop po jednu proporciju i prikazuje je 

			/// unutra loopa mozes samo napisati 

			//console.log(prop) pa da vidis sta je to a mozes i vako da vidist sta je to student1[prop]
			

	}

