document.getElementById("applicationForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("fullname").value;
    
    document.getElementById("result").innerHTML = 
        "Application Submitted Successfully!<br>Thank you, " + "Samita" + ".";

    // Optional: clear form
    document.getElementById("applicationForm").reset();
});