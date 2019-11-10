let doSubmit = function()
{
    $(".chosen-select").val(0);
    $('.chosen-select').trigger("chosen:updated");
}

$(document).ready(function()
{
    $(".chosen-select").chosen({
        disable_search_threshold: 10,
        width: "25%"
    });

    $("#submit").on("click", doSubmit);
});