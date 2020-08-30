let x = "This function is not available yet. Sorry I need more time to code it";

//js code to disable enter to avoid overflow
$('div[contenteditable]').keydown(function(e) {

    if (e.keyCode === 13) {
        alert(x);
        document.execCommand('insertHTML', false, '<br/>');
        return false;
    }
});


let sendButton = document.querySelector("#submit-button");
let chatMessageList = document.querySelector("#chat-message-list");
let t = document.getElementById('message-box').textContent;


sendButton.addEventListener("click", function(){
        alert(x);
});


{/* <div class="message-row you-message">
                <div class="message-text">
                    To sure calm much most long me mean. Able rent long in do we.
                    Uncommonly no it announcing melancholy an in. Mirth learn it he given.
                Secure shy favour length all twenty denote. He felicity no an at packages answered opinions juvenile. 

                    Pasture he invited mr company shyness. But when shot real her.
                    Chamber her observe visited removal six sending himself boy.
                    At exquisite existence if an oh dependent excellent. Are gay head need down draw. 
                    Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her
                     had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. 
                </div> */}
