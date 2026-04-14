function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success = true
            if(success){
                resolve("Data Fetched Successfully")
            }else{
                reject("Failed to fetch data")
            }
        },2000)
    })
}

let resp = fetchData()
console.log(resp);
