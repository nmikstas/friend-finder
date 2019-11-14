let doSubmit = function()
{
    let valid = true;

    //Validate the input.
    $(".chosen-select").each(function()
    {
        let id = $(this).attr("val");

        if ($(this).val() === "")
        {   
            $("#" + id).addClass("invalid");
            valid = false;
        }
        else
        {
            $("#" + id).removeClass("invalid");
        }
    });

    $(".form-control").each(function()
    {
        let id = $(this).attr("val");

        if ($(this).val() === "")
        {
            $("#" + id).addClass("invalid");
            valid = false;
        }
        else
        {
            $("#" + id).removeClass("invalid");
        }
    });

    if(valid)
    {
        $(".error").css("display", "none");

        // Create an object for the user's data
        var userData =
        {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores:
            [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        }
       
        console.log(userData);

        //POST the data.
        $.post("/api/friends", userData, function(data)
        {
            console.log(data);

            $("#myModal").css("display", "block");
            $("#match-photo").attr("src", data.photo);
            $("#name-div").html("<h2>" + data.name + "</h2>");
        });

        //Clear the form.
        $(".form-control").val("");
        $(".chosen-select").val(0);
        $('.chosen-select').trigger("chosen:updated");
    }
    else
    {
        $(".error").css("display", "inline");
    }
}

let doClose = function()
{
    $("#myModal").css("display", "none");
}

$(document).ready(function()
{
    $(".chosen-select").chosen(
    {
        disable_search_threshold: 10,
        width: "25%"
    });

    $("#submit").on("click", doSubmit);
    $("#close").on("click", doClose);
});