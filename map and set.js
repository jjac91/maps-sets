//[1,2,3,4]
//"ref
//m = {[1,2,3]:true,[1,2,3]:false}

let hasDuplicate = (arr) => new Set(arr).length !== arr.length

function isVowel(letter) {
    return aeiou.includes(letter)
}

function vowelCount(string) {
    let answer = new Map()
    for(let char of string){
        if (isVowel(char)){
            if (answer.has(char)){
                answer.set(char, answer.get(char) + 1)
            }
        }
        else{
            answer.set(char, 1)
        }
    }
    return answer
}