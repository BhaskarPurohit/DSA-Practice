const searchElement=()=>{
    let nums = [23,2,12,5,77,39]
    let index = document.getElementById("index").value
    
    for(let i=0; i<nums.length-1; i++){
        if(i == index){
            console.log(nums[i])
        }
    }
    
    
    
    }
    


    
    

// }

const searchIndex = () =>{
    
    let nums = [23,2,12,5,77,39]
    let element = document.getElementById("element").value
    for(let i=0; i<nums.length-1; i++){
        if (nums[i] == element){
            console.log(i)
        }
        
    }

    
}