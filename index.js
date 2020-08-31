//THE ADD TO CHAT (on clicking send or pressing enter) FEATURE IS NOT IMPLEMENTED YET

let x = "This is not available yet. Sorry I need more time to code it :(";

//js code to disable enter to avoid overflow and to present the text
$('div[contenteditable]').keydown(function(e) {

    if (e.keyCode === 13) {
        if(document.getElementById('message-box').textContent != ""){
            myFunc();
        }
        document.execCommand('insertHTML', false, '<br/>');
        return false;
    }
});

// get element inside div dynamically?
let sendButton = document.querySelector("#submit-button");
let t = document.getElementById('message-box').textContent;

//send alert on pressing the send button
sendButton.addEventListener("click", function(){
    if(document.getElementById('message-box').textContent != ""){
        myFunc();
    } else {
        return;
    }
    
});

document.getElementById("message-box").addEventListener("input", function() {
    t = document.getElementById('message-box').textContent;
}, false);


    //function to prepend a new div in the conversation-list id
const myFunc = () => {
    let chat = document.createElement('div');
    let chatDiv = document.createElement('div');
    let messageText = document.createTextNode(t);
    let timediv = document.createElement('div');
    let messageTime = document.createTextNode("11:09");

    chat.appendChild(chatDiv);
    chat.appendChild(timediv);
    chatDiv.appendChild(messageText);
    timediv.appendChild(messageTime);

    chat.classList.add('message-row');
    chat.classList.add('you-message');

    chatDiv.classList.add('message-text');
    timediv.classList.add('message-time');

    document.getElementById("chat-message-list").prepend(chat);

    document.getElementById('message-box').textContent = "";
}


