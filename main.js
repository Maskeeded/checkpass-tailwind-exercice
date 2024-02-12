


function checkPassword() {
    var password = document.getElementById('password').value;
    
    var lengthCheck = password.length >= 8;
    var uppercaseCheck = /[A-Z]/.test(password);
    var numberCheck = /\d/.test(password);
    var symbolCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
}

    /<script type="text/javascript">
function checkPassword ()
{
    var birth = document.getElementById('bday')
    if(birth != "")
    {

        var record=document.getElementById('bday').value.trim();
        var currentdate=new Date();    
        var day1 = currentdate3.getDate();   
        var month1 = currentdate3.getMonth();
        month1++;     
        var year11 = currentdate3.getFullYear()-17;
        var year2= currentdate3.getFullYear()-100;   
        var record_day1=record.split("/");
        var sum=record_day1[1]+'/'+record_day1[0]+'/'+record_day1[2];  
        var current= month1+'/'+day1+'/'+year11;
        var current1= month1+'/'+day1+'/'+year2;
        var d1=new Date(current)
        var d2=new Date(current1)
        var record1 = new Date(sum);      
        if(record1 > d1)
        {

            alert("Désolé vous êtes trop jeune");
            document.getElementById('bday').blur();
            document.getElementById('bday').value="";
            document.getElementById('bday').focus();
            return false;
        }
    } 
}
</script>

if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                resultDiv.textContent = "Validation !";
                resultDiv.style.color = "green";
                setTimeout(function () {
                    window.location.href = ""; // Remplacez par l'URL de redirection souhaitée
                }, 2000);
            } else {
                resultDiv.textContent = "Veuillez remplir tous les critères du mot de passe.";
                resultDiv.style.color = "yellow";
     }