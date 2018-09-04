require 'logger'

# https://ruby-doc.org/stdlib-2.1.0/libdoc/logger/rdoc/Logger.html

logger = Logger.new(STDOUT)
# logger = Logger.new('out.log')
logger.level = Logger::WARN

logger.debug('hello')
logger.info('hello')
logger.warn('hello')
