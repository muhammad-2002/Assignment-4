function calculateMoney(ticketSale) {

    if( typeof ticketSale === 'number'){
    
    if(ticketSale>=0){
    
    return ( ticketSale * 120) - ( 500 + (8 * 50) )
    
    }else{
    
    return "Please Enter Positive Number"
    
    }
    
    }else{
    
    return "Please Provide a Number"
    
    }
    
    }







function checkName(name) {
   
    if( typeof name === 'string'){
    const lastLetter=['a', 'y', 'i' , 'e', 'o' , 'u', 'w'];
    for(let i of lastLetter){
       if(lastLetter.includes(name.charAt(name.length-1).toLowerCase())){
        return "good Name"
       }else{
        return 'Bad Name'
       }
    }      
    }else{
        return 'invalid'
    }

}



function deleteInvalids(array) {
    if(Array.isArray(array)){
        let validArray =[]
        for(let i of array){
           
            if(!isNaN(i) && typeof i === 'number'){
                validArray.push(i)
                
            }
        }
        return validArray;

    }else{
        return "Please Enter an array"
    }  
}




function password(obj) {
    const objKey = Object.keys(obj)
    const stringYear= String(obj.birthYear)
    
    if(objKey.includes('name')&& objKey.includes('birthYear')&&objKey.includes('siteName')&& stringYear.length ===4 ){
        const password = obj.siteName[0].toUpperCase()+obj.siteName.slice(1)+"#"+obj.name+'*'+obj.birthYear

    return password
        

    }else{
        return "invalid"
    }
    
}


problem 5:

function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr)&& typeof livingCost === 'number'){
        let savings=0;
        for(let i of arr){
            
            if(i>=3000){
                const task = i - (i*(20/100))
                
                
                savings+=task
            }else{
                savings+=i               
            }       
        }
        const result= savings-livingCost
        if(result<0){
            return "earn more"

        }else{
            return result
        }
    }else{
        return "Invalid input"
    }

}



















