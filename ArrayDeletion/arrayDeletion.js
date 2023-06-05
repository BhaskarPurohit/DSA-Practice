const arrayDeletion = ()=>{
    
    let nums = [30,20,45,76,80]
    let index = parseInt(document.getElementById("index").value)
    // alert(index)
    for(let i=index; i<nums.length-1; i++){
        // alert(nums)
        // console.warn(nums[i])
        nums[i] = nums[i+1]

    }
    nums.length = nums.length-1
    alert(nums);

}