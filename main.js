function getPagamenti() {
    
    $.ajax({
        type: "GET",
        url: "getPagamenti.php",
        success: function (data) {
            console.log(data);
            var target = $("#target");
            for (const pagamenti of data) {
                target.append("<li>" + pagamenti + "</li>")
            }
        },
        error: function (err) {
            console.error(err);
            
        }
    });
}




function init() {
    getPagamenti();    
}
$(document).ready(init);