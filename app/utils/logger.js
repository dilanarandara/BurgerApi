const log4js = require('log4js');

class Logger {

    /**
     * Configure log4js logger.
     *
     * @param {String} moduleName - Module Name
     * @private
     */
    _configureLogger(moduleName) {
        let self = this;

        let config = {
            "appenders": [
                {
                    "filename": '/home/BurgerStoreLogs/BurgerStore.log',
                    "type": "dateFile",
                    "pattern": "-yyyy-MM-dd",
                    "alwaysIncludePattern": false,
                    "layout": {
                        "type": "pattern",
                        "pattern": "[%d], %p, %x{fileName} - %m",
                        "tokens": {
                            "fileName": function () {
                                let parts = moduleName.filename.split('/');
                                let fileName = parts[parts.length - 1];
                                return fileName;
                            }
                        }
                    },
                    category: 'file-appender'
                }
            ]
        };


        log4js.configure(config, {});
        self.logger = log4js.getLogger('file-appender');
        self.logger.setLevel('INFO');
    }

    /**
     * Get Logger
     *
     * @param {String} moduleName - Module Name
     * @returns {Logger|*}
     */
    getLogger(moduleName) {
        let self = this;
        self._configureLogger(moduleName);
        return self.logger;
    }
}

module.exports = Logger;