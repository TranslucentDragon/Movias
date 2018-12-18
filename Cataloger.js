// TODO: add mongo references

/**
 * @name  Cataloger
 * @class Adds entries into database
 */
class Cataloger {

    constructor() {
        Cataloger.prototype.createEntry = function(entry, callback) {
            entry = updateLastUpdatedField(entry);
            // TODO implement actual mongo input/output
            return callback(database.insertOne(entry));
        }
        Cataloger.prototype.getEntry = function(ID, callback) {
            // TODO implement actual mongo input/output
            return database.find({'ID': ID});
        };
    }

    function updateLastUpdatedField(entry) {
        if (!entry || entry.hasOwnProperty('lastUpdated')) {
            entry = Object.assign({'lastUpdated': Date.now()}, entry);
        } else {
            entry['lastUpdated'] = Date.now();
        }
        return entry;
    }
}
module.export = Cataloger;