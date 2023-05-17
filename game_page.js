player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
player_question=player1_name;
player_answer=player2_name;

function send(){
    get_word=document.getElementById("word").value;
    console.log(get_word);
    word=get_word.toLowerCase();
    console.log(word);
    char1=word.charAt(1);
    console.log(char1);
    length=word.length;
    middle_char=Math.floor(length/2);
    char2=word.charAt(middle_char);
    console.log(char2);
    char3=word.charAt(length-1);
    console.log(char3);
    remove_char1=word.replace(char1,"_");
    remove_char2=remove_char1.replace(char2,"_");
    remove_char3=remove_char2.replace(char3,"_");
    console.log(remove_char3);
    question="<h4 id='word_display'>Question: "+remove_char3+"</h4><br>";
    answer="<h4>Answer: <input id='input_check_box' class='form-control' type='text'></h4><br>";
    button="<button class='btn btn-info' onlcick='check()'>Check</button><br>";
    row=question+answer+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

}