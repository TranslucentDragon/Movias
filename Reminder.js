/**
 * @name  Reminder
 * @class Reminds controller of upcoming events
 */
class Reminder extends EventEmitter {

    constructor() {

        Controller.prototype.addNewReminder = function(reminderEntry, callback) {
            reminderEntry.reminders.forEach((reminderTime) => {
                //reminder time is in seconds, convert to milliseconds
                remainderMillisec = reminderTime * 1000;
                setTimeout(() => {
                    this.emit('reminder', reminder)
                }, reminderTime);
            });
        };
    }

}
module.export = Reminder;