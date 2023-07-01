(function(Scratch) {
  'use strict';

  /* globals PackagerSuperpowers */

  class PackagerSuperpowersExtension {
    getInfo () {
      return {
        id: 'packagerpowers',
        name: 'Packager Superpowers',
        blocks: [
          {
            blockType: Scratch.BlockType.COMMAND,
            opcode: 'maximize',
            text: 'maximize window'
          },
          {
            blockType: Scratch.BlockType.COMMAND,
            opcode: 'minimize',
            text: 'minimize window'
          }
        ]
      };
    }

    maximize () {
      PackagerSuperpowers.BrowserWindow('maximize');
    }

    minimize () {
      PackagerSuperpowers.BrowserWindow('minimize');
    }
  }

  Scratch.extensions.register(new PackagerSuperpowersExtension());
}(Scratch));
