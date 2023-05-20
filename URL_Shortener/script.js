async function shortenfun(){
    const url = document.getElementById("input-url").value;
    
    const response= await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
     if(response.ok){
        const data= await response.text();
        document.getElementById('output').innerHTML= `shortened URL :<a a href="${data}" target="_blank">${data}</a>`;
     }
     else{
        document.getElementById('output').innerHTML="Error shortening Url";
     }
    console.log(response);
}