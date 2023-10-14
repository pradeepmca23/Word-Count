var paragraph=` "Bob hit a ball, the hit BALL flew far after it was hit.",bob hit a ball hit `
paragraph=paragraph.toLowerCase();

paragraph=paragraph.replace(/[,.!#$@%&""]/g,'')

paragraph=paragraph.split(" ");

var newarray=[]
var number=8;
var count=1;
for(let i=0;i<paragraph.length;i++){
    if(paragraph[i]!=number){
        for(let j=i+1;j<paragraph.length;j++){
            if(paragraph[i]==paragraph[j]){
                count++;
                paragraph[j]=number;
            }
        }
        newarray.push([paragraph[i],count]);
        count=1;
    }
}
for(let k=0;k<newarray.length;k++){
for(let m=k+1;m<newarray.length;m++){
    if(newarray[k][1]<newarray[m][1]){
        let temp=newarray[k];
        newarray[k]=newarray[m];
        newarray[m]=temp;
    }
}
}
var textarray=newarray.slice(0,3);
var text=""

for(let z=0;z<textarray.length;z++){
    console.log(textarray[z]);
    text=text+"<h1>"+textarray[z][0]+"---->" +textarray[z][1] + "times occurs"+"</h1>"
}
document.getElementById('count').innerHTML=text;

