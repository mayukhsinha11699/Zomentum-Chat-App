//THE ADD TO CHAT (on clicking send or pressing enter) FEATURE IS NOT IMPLEMENTED YET

let x = "This is not available yet. Sorry I need more time to code it :(";

//js code to disable enter to avoid overflow and to present the text
$('div[contenteditable]').keydown(function(e) {

    if (e.keyCode === 13) {
        alert(x);
        document.execCommand('insertHTML', false, '<br/>');
        return false;
    }
});

// get element inside div dynamically?
let sendButton = document.querySelector("#submit-button");
let chatMessageList = document.querySelector("#chat-message-list");
let t = document.getElementById('message-box').textContent;

//send alert on pressing the send button
sendButton.addEventListener("click", function(){
    alert(x);
});


