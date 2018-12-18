var cataloger = require('./Cataloger.js');
var reminder = require('./Reminder.js');

/**
 * @name  Controller
 * @class Engine for movias. Assigns correct information to entries and passes them to the correct location
 */
class Controller {

    constructor(properties) {
        this.cataloger = new cataloger();
        this.reminder = new reminder();

        this.reminder.on('reminder', (reminder) => {
            this.getEntry(reminder.ID, (error, entry) => {
                console.log(toString(entry));
            });
        });


        Controller.prototype.createEntry = function(entry, callback) {
            entry = addLastUpdatedField(entry);
            return callback(this.cataloger.createEntry(entry, (error, entry) => {
                if (error) return callback(error);
                reminderEntry = {
                    ID: entry.ID;
                    reminders: entry.reminders
                };
                this.reminder.addNewReminders(reminderEntry, (error, status) => {
                    if (error) return callback(error);
                    return callback('Successfully added entry to mongo and added reminders');
                });
            }));
        };

        Controller.prototype.getEntry = function(entryID, callback) {
            this.cataloger.getEntry(entryID, (error, entry) => {\
                return callback(entry);
            });
        };

    }

    function toString(entry) {
        if(!entry) return "Error: Invalid Entry"
        return entry.message;
    }


}
module.export = new Controller();