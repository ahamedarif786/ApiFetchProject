document.getElementById("btn1").addEventListener("click", getText);
document.getElementById("btn2").addEventListener("click", getJSON);
document.getElementById("btn3").addEventListener("click", getAPI);


function getText(){
    const fetchFile = fetch("./sample.txt");
    fetchFile.then((response)=>{
        return response.text()
    }).then((data)=>{
        document.querySelector(".output").innerText = data;
    })
}


function getJSON(){
    const fetchjson = fetch("./sampleJson.json");
    fetchjson.then((r)=>{

        return r.json();
    }).then((data)=>{
        let output ="";
        data.forEach(e => {
            output+=`<li>${e.name}</li>`
        });
        document.querySelector(".output").innerHTML = output;

        
    })
}


function getAPI(){
    const fetchjson = fetch("https://api.github.com/users");
    fetchjson.then((r)=>{
        return r.json();
    }).then((data)=>{
        let output ="";
        data.forEach(e => {
            output+=`<li>${e.login}</li>`
        });
        document.querySelector(".output").innerHTML = output;

        
    })
}