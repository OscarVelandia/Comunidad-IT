let f = 0;
let f1 =-1;
let f2 = 1;
let vueltas = 0;

while(f<=986){
    f=f1+f2;
    f1=f2;
    f2=f;
    console.log(f)
    vueltas++    
    //formula que compartió nico.
}

