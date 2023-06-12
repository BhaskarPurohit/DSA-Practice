// ques: reverse the order of words 
//input: "the sky is blue"   output: "blue is sky the"
//input: "hello world"   output:"world hello"
//input: "a good example"    output: "example good a"


//"the sky is blue"  => [the, sky, is, blue]
//[] => [the, sky, is, blue] => blue is sky the

const reverseWords = (s)=>{
    const splits = s.split(" ")
    const stack = []

    for(let i of splits){
        stack.push(i)
    }

    let finalS = "";

    while (stack.length){
        const current = stack.pop()

        if(current){
            finalS += " " + current
        }
    }


    return finalS

}

console.log(reverseWords("my name is bhaskar"))

//Time complexity, space complexity = O(n)