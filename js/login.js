/**
 * Created by star-chen on 2016/12/1.
 */
$(document).ready(function(){

    $("#submit").click(function(){

    $.ajax({

    url:"login",
    type:"POST",
    data:{
        "user":$("#username").value,
        "passwd":$("#password").value
    },
    success:function(data){
        console.log(data);
        location.href="index";
    },
    onerror:function(data){
        console.log(data);
    }
    });
});

});
