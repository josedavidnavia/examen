

function calificacion (){
    const califica = [100, 50, 65, 70, 85, 96, 45]
   
    return{
     A: i=90<100, 
     
      B: i=80<89,

       C: i=70<79 ,

        D: i=60<69,
        
       F: i<60,

    }

}
const result = calificacion(califica)
console.log(result)