document.querySelector('#range').onchange = ()=>{
    var range = document.getElementById('range').value
   var rangeA=`${range}`
   if( rangeA ==='100')
   {
    document.getElementById('rs').style.display="none"
   }
   else{
    document.getElementById('rs').style.display="inline"

   }
}
         
         
         
        
  

