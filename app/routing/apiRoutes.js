var friendsArray = require("../data/friends");

module.exports = function(app)
{
  
    app.get("/api/friends", function(req, res)
    {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res)
    {
        let lowestDif = 1000;
        let lowestIndex = 0;
        let thisDif;

        friendsArray.push(req.body);

        //Calculate the best match. Last element is the new one - do not check.
        for(let i = 0; i < friendsArray.length - 1; i++)
        {
            thisDif = 0;
            for(let j = 0; j < friendsArray[i].scores.length; j++)
            {
                thisDif += Math.abs(friendsArray[i].scores[j] - req.body.scores[j]);
            }

            if(thisDif < lowestDif)
            {
                lowestIndex = i;
                lowestDif = thisDif;
            }
        }

        res.json(friendsArray[lowestIndex]);
    });

    app.get("/api/clear", function(req, res)
    {
        while(friendsArray.length > 4)
        {
            friendsArray.pop();
        }

        res.redirect("/");
    });
}