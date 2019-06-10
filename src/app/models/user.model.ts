export class User {
     uid?: string;  // unique for every user as id stored in database 
     email?: string;
     userName?: string;
     password?: string;
     status?: string; // status of the user whether online offline, idle, dnd
 }