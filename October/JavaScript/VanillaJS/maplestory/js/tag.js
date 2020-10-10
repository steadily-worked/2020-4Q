// /* JavaScript markdown editor SimpleMDE */
// var simplemde = new SimpleMDE({ element: document.getElementById("MyID") });


/* add Tag by click or press enter, comma, space */
var elements = document.getElementById('element');
var taskSubmit = document.getElementById('btn_add_task');
var taskBox = document.querySelector('#text_task');
var taskList = document.getElementById('list_tasks');

/* Prevent input other than Korean, English and numbers */
taskBox.addEventListener('keyup',  removeSpecial);
function removeSpecial (e) {
   e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9+#]/gi,"");
}
$(document).ready(function(){
    $('#text_task').keyup(function(){
        if ($(this).val().length > $(this).attr('maxlength')) {
            alert('제한길이 초과');
            $(this).val($(this).val().substr(0, $(this).attr('maxlength')));
        }
    });
});

/* click */
document.addEventListener('click', clickFunction, false);
function clickFunction(e) {
    var task = taskBox.value.trim();
    var newLI = document.createElement('li');
    var removeBtn = document.createElement('button');
    var element = newLI.appendChild(document.createTextNode(task));
    if (taskBox.value != "") {
        e.preventDefault();
        taskList.appendChild(newLI);
        taskList.appendChild(removeBtn);
        taskBox.value = '';
    }
}

/* keyup */
document.addEventListener('keyup', keyupFunction, false);
function keyupFunction(e) {
    var keyCode = e.keyCode;
    var task = taskBox.value.trim();
    var newLI = document.createElement('li');
    var removeBtn = document.createElement('button');
    var element = newLI.appendChild(document.createTextNode(task));
    if ((taskBox.value != "") && (keyCode === 188 || keyCode === 13 || keyCode === 32))  {
        e.preventDefault();
        taskList.appendChild(newLI);
        taskList.appendChild(removeBtn);
        taskBox.value = '';
        removeBtn.addEventListener('click', function() {
            removeBtn.parentNode.removeChild(removeBtn);
            newLI.parentNode.removeChild(newLI);
        });
    }
}

/* Autocomplete using jQuery*/
$(function() {
	var languages = [
		"ActionScript", "AppleScript", "Asp","BASIC", "C",
		"C++", "Clojure", "COBOL", "ColdFusion", "Erlang",
		"Fortran", "Groovy", "Haskell", "Java", "JavaScript",
		"Lisp", "Perl", "PHP", "Python", "Ruby",
		"Scala", "Scheme"
	];

	$( "#text_task" ).autocomplete({
        source: languages
	});
});




// 중복 태그 방지, 최대 글자수 제한, 삭제버튼 li 안에 넣기