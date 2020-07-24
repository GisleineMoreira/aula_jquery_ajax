//alert("funcionou");

function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" +  cep + "/json/";
    
    console.log(url);
   //$.ajax é uma função do jquery
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
           $("#uf").html(response.uf);
           $("#localidade").html(response.localidade);
           $("#bairro").html(response.bairro);
           $("#titulo_cep").html("cep " + response.cep);
        }
    })
}
