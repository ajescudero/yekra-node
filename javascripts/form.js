$(document).ready(function(e) {
$("#order_form").on("submit", function(e) {
        e.preventDefault();
    var $this = $(this);
    $('#send.purchase_btn').click(function() {
        $(this).prop('value', 'Processing ...');
    });
    var frmValues = $this.serialize();
    $.ajax({
            type: $this.attr('method'),
            url: $this.attr('action'),
            data: frmValues,
            statusCode: {
                500: function() {
                    $(".message").text("* There's been an error");
                }
            }
        })
        .success(function(data) {
            $("#order_form :input").prop("disabled", true);
            $(".purchase_section").html("<span>Thanks for your purchase.</span>");
        })
        .fail(function(req, status, err) {
            console.log('something went wrong', status, err);
            event.preventDefault();
        });
    });
});