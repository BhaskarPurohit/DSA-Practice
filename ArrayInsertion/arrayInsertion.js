
//insert new value at a particular index

const arrayInsertion = ()=>{
    let newElement = document.getElementById("element").value
    let position = document.getElementById("position").value
    let nums = [60,30,10,67]
    for(let i= nums.length-1; i>=0; i--){
        // console.log(i);
        // console.log(nums[i]);
        if(i>=position){
           nums[i+1] = nums[i]
           if(i== position){
            nums[i] = newElement
           }
        }
        
        // console.log(nums);
        // console.log("new nums");
        
    
    }
    return alert(nums)


}

