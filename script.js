// Array containing the contacts
const contacts = ["Ama", "Kofi", "Simi", "Eben", "Lydia"];

// Each inner array stores one contact's messages
const messages = [
    [
        { text: "Hey Nana! How are you?", type: "received" },
        { text: "I'm good. How about you?", type: "sent" },
        { text: "I'm doing great!", type: "received" }
    ],
    [
        { text: "Bro, the assignment is due tomorrow.", type: "received" }
    ],
    [
        { text: "Thanks! 🙏", type: "received" }
    ],
    [
        { text: "Cool. I'll check it out.", type: "received" }
    ],
    [
        { text: "That's true.", type: "received" }
    ]
];

let selectedContact = 0;

const contactList = document.getElementById("contactList");
const messagesArea = document.getElementById("messages");
const chatName = document.getElementById("chatName");
const messageInput = document.getElementById("messageInput");
const messageForm = document.getElementById("messageForm");

function displayContacts() {
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const div = document.createElement("div");
        div.className = "contact";

        if (index === selectedContact) {
            div.classList.add("active");
        }

        div.textContent = contact;
        div.addEventListener("click", () => {
            selectedContact = index;
            displayContacts();
            displayMessages();
        });

        contactList.appendChild(div);
    });
}

function displayMessages() {
    chatName.textContent = contacts[selectedContact];
    messagesArea.innerHTML = "";

    messages[selectedContact].forEach(message => {
        const div = document.createElement("div");
        div.classList.add("message", message.type);
        div.textContent = message.text;
        messagesArea.appendChild(div);
    });

    messagesArea.scrollTop = messagesArea.scrollHeight;
}

messageForm.addEventListener("submit", event => {
    event.preventDefault();

    const text = messageInput.value.trim();
    if (text === "") return;

    // push() adds the new message to the selected contact's array
    messages[selectedContact].push({
        text: text,
        type: "sent"
    });

    displayMessages();
    messageInput.value = "";
    messageInput.focus();
});

displayContacts();
displayMessages();
