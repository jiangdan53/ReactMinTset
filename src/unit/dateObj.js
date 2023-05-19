export default function  utlDate(date,newdate){
    for (let i in date) {
      if(!Object.is(date[i],newdate[i]) ){
        console.log(!Object.is(date[i],newdate[i]))
          return false
      }
      
    }
    return true

}