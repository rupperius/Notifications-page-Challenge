const mark = document.getElementById("mark");
const notifications = document.querySelectorAll(".notifications");
const unread_number = document.querySelector("#unread_number");
const unread_messages = document.querySelectorAll(".unread") 
unread_number.innerHTML=unread_messages.length;

mark.addEventListener('click', () => {
    notifications.forEach(remover => remover.classList.remove("unread")); 
    const unread_messages_new = document.querySelectorAll(".unread");
    unread_number.innerHTML=unread_messages_new.length;
})
