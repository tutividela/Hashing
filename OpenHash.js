const fs=require('fs');

let node=function(){
this.key='';
this.word='';

this.getKey=function(){
	return this.key;
}
this.getWord=function(){
	return this.word;
}
this.setKey=function(key){
	this.key=key;
}
this.setWord=function(word){
	this.word=word;
}

}
/*this is a comment*/

let a=5;
let b=10;

function hash(word){
	let key=[],i,j=0;
	key[j]=word[0];
	j++;
	for(i=1;i<word.length && j<4;i++){
		if(word[i]=='b' || word[i]=='p' || word[i]=='f' || word[i]=='v'){
			key[j]='1';
			j++;
		}else{
			if(word[i]=='c' || word[i]=='g' || word[i]=='j' || word[i]=='k' || word[i]=='q' || word[i]=='s' || word[i]=='x' || word[i]=='z'){
				key[j]='2';
				j++;
			}else{
				if(word[i]=='d' || word[i]=='t'){
					key[j]='3';
					j++;
				}else{
					if(word[i]=='l'){
						key[j]='4';
						j++;
					}else{
						if(word[i]=='m'|| word[i]=='n'){
							key[j]='5';
							j++;
						}else{
							if(word[i]=='r'){
								key[j]='6';
								j++;
							}
						}

					}
				}
			}
		}
	}
	if(key.length<4){
		for(i=key.length;i<4;i++){key[i]='0';}
	}
let ans=key.join('');
return ans;
}

function insert(obj){
	let key=obj.getKey();
    let i;
	if(table.length==0){
		table[0]=new Array(1);
		table[0][0]=obj;
	}else{

		for(i=0;i<table.length;i++){
			if(table[i][0].getKey()==key){
				break;
			}
		}
		if(i==table.length){
			insert_in_array(obj);
		}else{
			insert_in_bucket(obj,i);
		}
	}
	
}

function insert_in_bucket(obj,pos){
	let l=table[pos].length;
	table[pos][l]=obj;
}
function insert_in_array(obj){
	let l=table.length;
	table[l]=new Array(1);
	table[l][0]=obj;
}



let table=[];
let Node;
let pal=['Departamento','Almacenero','Deporte','Exequiel','Deportacion','Almacen','Dedo','Computadora','Companiero','Telefono','Televisor'];
for(let i=0;i<pal.length;i++){
    Node=new node();
	Node.setWord(pal[i]);
	Node.setKey(hash(pal[i]));
	insert(Node);
}

for(let j=0;j<table.length;j++){
	console.log('Nodes from Bucket: ',j);
	for(let k=0;k<table[j].length;k++){
		console.log(table[j][k].getWord(),table[j][k].getKey());
	}
	console.log('End of Bucket ',j);
}