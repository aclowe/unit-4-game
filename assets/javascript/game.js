
$(document).ready(function() {

    var userScore = 0;
    var targetScore= 1;
    var wins = 0;
    var losses = 0;

    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    //function to reset game
    function reset(){
        //generate random number between 19-120, hold in var for targetScore
        targetScore = Math.floor(Math.random() * (120-19) + 19);
        console.log("targetScore: " + targetScore);
        $("#targetScore").html(targetScore);
        
        //generate random number between 1-12, hold in var for each crystal
        crystal1 = Math.floor(Math.random() * (12-1) + 1);
        crystal2 = Math.floor(Math.random() * (12-1) + 1);
        crystal3 = Math.floor(Math.random() * (12-1) + 1);
        crystal4 = Math.floor(Math.random() * (12-1) + 1);
        console.log("crystal1= " , crystal1);
        console.log("crystal2= " , crystal2);
        console.log("crystal3= " , crystal3);
        console.log("crystal4= " , crystal4);
        
        //change userScore to 0
        userScore = 0;
        console.log("userScore: " + userScore);
        $("#userScore").html(0);
       
    };
    reset();

    //when user clicks crystal1, add that value to userScore
    $("#crystal1").on("click", function() {
        userScore = parseInt(userScore) + parseInt(crystal1);
        $("#userScore").html(userScore);
        console.log("userScore: " + userScore);
        console.log("targetScore: " + targetScore);
        guessCheck();
    });
    //when user clicks crystal2, add that value to userScore
    $("#crystal2").on("click", function() {
        userScore = userScore + parseInt(crystal2);
        $("#userScore").html(userScore);
        console.log("userScore: " + userScore);
        console.log("targetScore: " + targetScore);
        guessCheck();
    });
    //when user clicks crystal3, add that value to userScore
    $("#crystal3").on("click", function() {
        userScore = userScore + parseInt(crystal3);
        $("#userScore").html(userScore);
        console.log("userScore: " + userScore);
        console.log("targetScore: " + targetScore);
        guessCheck();
    });

    //when user clicks crystal4, add that value to userScore
    $("#crystal4").on("click", function() {
        userScore = userScore + parseInt(crystal4);
        $("#userScore").html(userScore);
        console.log("userScore: " + userScore);
        console.log("targetScore: " + targetScore);
        guessCheck();
    });
    
    function guessCheck(){
    //if userScore = targetScore, 
    if (userScore === targetScore) {
        //add one to wins
        wins++;
        console.log("wins: " + wins);
        $("#wins").html("Wins: " + wins);
        reset();
    }

    //if userScore > targetScore
    if (userScore > targetScore) {
        //add 1 to losses
        losses++;
        console.log("losses: " + wins);
        $("#losses").html("Losses: " + losses);
        reset();
    }
}
})
