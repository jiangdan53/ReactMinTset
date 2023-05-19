 
let SumTool = {
    CeilSum:(data1,data2,TheOperator)=>{
        let sum =  null;
        if(TheOperator === '/'){
            sum =  Math.ceil(data1/data2)
        }else if(TheOperator === '*'){
            sum =  Math.ceil(data1*data2)
        }
        else if(TheOperator === '+'){
            sum =  Math.ceil(data1+data2)
        }else if(TheOperator === '-'){
            sum =  Math.ceil(data1-data2)
        }
        
        return sum;
    },
    FloorSum:(data1,data2,TheOperator)=>{
        let sum =  null;
        if(TheOperator === '/'){
            sum =  Math.floor(data1/data2)
        }else if(TheOperator === '*'){
            sum =  Math.floor(data1*data2)
        }
        else if(TheOperator === '+'){
            sum =  Math.floor(data1+data2)
        }else if(TheOperator === '-'){
            sum =  Math.floor(data1-data2)
        }
        
        return sum;
    }
}

export default SumTool;
