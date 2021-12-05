
let sum=function(a){
    let b=function(b){
        let c=function(c){
          let add=a+b+c;
          console.log(add);
        }
        return c
        
    }
   return b  
    
}
sum(10)(20)(30);
