function submitData(name, email){
    return fetch('http://localhost:3000/users', {
     method: "POST",
     headers: {
         "Content-Type": "application/json",
         Accept: "application/json",
     },
     body: JSON.stringify({
         name: name, 
         email: email,
         })
    })
    .then(res => res.json())
    .then(user => console.log(user))

 .catch(error => {
     let err = document.createElement("p");
     err.textContent = error.message;
     document.body.appendChild(er);
 });
 
 }
 submitData('harry', "harry@gmail.com")
