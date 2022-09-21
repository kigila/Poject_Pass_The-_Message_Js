// Project Pass The Messager JS 

(function(){
    //select the input element
    const form = document.querySelector('#message-form');
    
    

    // Set up submit button
    form.addEventListener('submit', function(e){
        e.preventDefault(); //  preventDefault  
        //Get user input field        
        const feedback = document.querySelector('.feedback');
        const message = document.querySelector('#message');
        const messageContent = document.querySelector('.message-content');
    
        // Relaying back the input message
        if (message.value ===""){
            feedback.classList.add("show"); //  show feedback button
            setTimeout(function(){
                feedback.classList.remove("show"); // hide feedback button
            },2000); // show feedback button after 2000   
        }else{
            //change message content and clear the message input
           
            messageContent.textContent = message.value;          
        }  
        message.value = "";         
    
    });
})()

