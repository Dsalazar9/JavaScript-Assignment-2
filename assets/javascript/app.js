$("#end").hide();

$('#start').on('click', function () {
    game.start();

})
//$('#subwrapper').remove();
// console.log("YOU CLICKED ME!")

$('#end').on('click', function(){
    console.log("button");
    game.done();
})

var questions = [{
    question: "Who is the best soccer player in the world?",
    answers: ["Messi", "Ronaldo", "Chicharito", "Harry Kane"],
    correctAnswer: "Messi"
}, {
    question: "When is the next world cup?",
    answers: ["2021","2046","2022","2028"],
    correctAnswer: "2022"   
}, {
    question: "What team does Salah play for?",
        answers: ["Liverpool", "Manchester City", "Real Madrid", "Barcelona"],
            correctAnswer: "Liverpool" 
}, {
    question: "Where will the world cup be held in 2026?",
        answers: ["Russia", "China", "North America", "iceland"],
            correctAnswer: "North America"   
}];
var game = {
    correct: 0,
    incorrect: 0,
    counter: 15,
    countDown: function () {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter <= 0) {
            console.log("Time is up!");
            clearInterval(timer);
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countDown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">15</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + " ' value=' " + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }


        $('#subwrapper').append('<br> <button id="end">DONE</button>')


    },

    done: function () {
        $.each($('input[name="question-0]":checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]": checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2]': checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3]': checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
       
  

    game.result();
    },

    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>All Done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

    }
}