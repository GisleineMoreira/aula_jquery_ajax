//alert("funcionou");

function consultaCep(){
   //$.ajax é uma função do jquery
    $.ajax({
        url: "https://viacep.com.br/ws/71593385/json/",
        type: "GET",
        success: function(response){
            console.log(response);
        }
    })
}