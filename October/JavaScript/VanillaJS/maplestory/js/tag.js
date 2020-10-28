// /* JavaScript markdown editor SimpleMDE */
// var simplemde = new SimpleMDE({ element: document.getElementById("MyID") });


/* add Tag by click or press enter, comma, space */
var elements = document.getElementById('element');
var taskSubmit = document.getElementById('btn_add_task');
var taskBox = document.querySelector('#text_task');
var taskList = document.getElementById('list_tasks');
var taskLi = document.querySelectorAll('ul li');

/* Prevent input other than Korean, English and numbers */
taskBox.addEventListener('keyup',  removeSpecial);
function removeSpecial (e) {
   e.target.value = e.target.value.replace(/[^ㄱ-힣a-zA-Z0-9+#]/gi,"");
}

/* Prevent duplicate tags */

/* click */
taskSubmit.addEventListener('click', clickFunction, false);
function clickFunction(e) {
    var task = taskBox.value.trim().toLowerCase();
    var newSpan = document.createElement('span');
    var removeBtn = document.createElement('button');
    var element = newSpan.appendChild(document.createTextNode(task));
    if (taskBox.value != "") {
        e.preventDefault();
        taskList.appendChild(newSpan);
        newSpan.appendChild(removeBtn);
        removeBtn.innerHTML = "X";
        taskBox.value = '';
        removeBtn.addEventListener('click', function() {
            removeBtn.parentNode.removeChild(removeBtn);
            newSpan.parentNode.removeChild(newSpan);
        });
    }
}

/* keyup */
document.addEventListener('keyup', keyupFunction, false);
function keyupFunction(e) {
    var keyCode = e.keyCode;
    var task = taskBox.value.trim().toLowerCase();
    var newSpan = document.createElement('span');
    var removeBtn = document.createElement('button');
    var element = newSpan.appendChild(document.createTextNode(task));
    if ((taskBox.value != "") && !(taskLi.includes(taskBox.value)) && (keyCode === 188 || keyCode === 13 || keyCode === 32))  {
        e.preventDefault();
        taskList.appendChild(newSpan);
        newSpan.appendChild(removeBtn);
        removeBtn.innerHTML = "X";
        taskBox.value = '';
        removeBtn.addEventListener('click', function() {
            removeBtn.parentNode.removeChild(removeBtn);
            newSpan.parentNode.removeChild(newSpan);
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


// 중복 태그 방지만 하면 끝
// if문에 조건을 넣는 건 아닌 것 같다.. 왜냐면.. !(taskLi.includes(taskBox.value)) 자체가
// 'taskBox.value가 taskLi에 들어있지 않은 경우' 인데..