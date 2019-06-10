export class ChatMessage {
   $key?: string;  // unique for every user as id stored in database 
    email?: string;
    userName?: string;
    message?: string;
    timeSent?: Date = new Date(); // time at which message was sent
}