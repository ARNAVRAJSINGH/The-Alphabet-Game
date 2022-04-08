player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");

player1score = 0;
player2score = 0;
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

function send() {
    console.log("send");
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log(word);


    charAt1 = word.charAt(1);
    console.log(charAt1);
    lengthby2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(lengthby2);
    console.log(charAt2);

    lengthminus1 = word.length - 1;
    charAt3 = word.charAt(lengthminus1);
    console.log(charAt3);


    removecharAt1 = word.replace(charAt1, "_");
    removecharAt2 = removecharAt1.replace(charAt2, "_");
    removecharAt3 = removecharAt2.replace(charAt3, "_");


    console.log(removecharAt3);
    questionword = "<h4 id='word_display'>Q." + removecharAt3 + "</h4>";
     

    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check </button>";


    row=questionword + input_box + check_button;
    document.getElementById('output').innerHTML=row;


    document.getElementById('word').value="";
}

question_turn="player1";
answer_turn="player2";
function check(){
    getAnswer=document.getElementById('input_check_box').value;
    Answer=getAnswer.toLowerCase();


    console.log('answer='+Answer);
    if(Answer==word){
        if(answer_turn=='player1'){
            player1score=player1score+1;
            document.getElementById('player1_score').innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById('player2_score').innerHTML=player2score;
        }
    }
    if(question_turn=='player1'){
        question_turn='player2';
        document.getElementById('player_question').innerHTML="question turn ="+player2name;
        
    }
    else{
        question_turn="player1";
        document.getElementById('player_question').innerHTML='question_turn ='+player1name;

    }
    if(answer_turn=='player1'){
        answer_turn='player2';
        document.getElementById('player_answer').innerHTML="answer turn ="+player2name;
        
    }
    else{
        answer_turn="player1";
        document.getElementById('player_answer').innerHTML='answer_turn ='+player1name;

    }
    document.getElementById('output').innerHTML="";
}