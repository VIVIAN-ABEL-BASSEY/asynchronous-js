function checks(){
    return new Promise((resolve,reject)=>{
        numbers= Math.floor(Math.random()*6)
        console.log("number is: ",numbers)
        if (numbers>=3){
            console.log("sucess number")
            resolve()
        }else{
            console.log("failed number")
            reject()
        }
    })
}
 checks()