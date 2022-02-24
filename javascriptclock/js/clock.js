

  function showTime() {
    let person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("myName").innerHTML =
      person;
    }
    setInterval(()=>{
        document.getElementById("myClock").innerHTML = new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString();
    },1000)
  }
  
  