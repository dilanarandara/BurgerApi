const async = require('async');
const loggerModule = require('../utils/logger');

class OrderService {

    /**
     * @constructor
     */
    constructor() {
        let self = this;

        self.logger = new loggerModule().getLogger(module);
    }

    /**
     * Create order.
     *
     * @param {Object} data - Order Object
     * @param {Function} cb - Callback function
     */
    create(data, cb) {
        let self = this;

        let orderItemCount = data.count;
        let orderNumber = new Date().getTime();

        let count = 0;
        async.whilst(
            () => {
                return count < orderItemCount;
            },
            (cb) => {
                self.logger.info('Order created. Version 2 *****. Order Number : ' + orderNumber);
                count++;
                cb(null);
            },
            (err) => {
                if (err) {
                    self.logger.error('Order Item create error.' + JSON.stringify(err));
                    return cb(err);
                }
                return cb(null, orderNumber);
            }
        );
    }
}

module.exports = new OrderService();