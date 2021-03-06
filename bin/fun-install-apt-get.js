'use strict';

const program = require('commander');

const handler = require('../lib/exception-handler');

program.command('install')
  .usage('[options] [packages...]')
  .description('Install apt packages')
  .option('-t, --target <target>', 'path to install')
  .arguments('[packages...]')
  .action((packages) => {
    require('../lib/commands/apt-get')(packages, program.commands[0]).catch(handler);
  });

require('../lib/utils/command').registerCommandChecker(program);

program.parse(process.argv);
