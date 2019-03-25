/* A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey); */

/* installed `nvm install 8.1.3` 
    enter node environment using `node` in terminal
    `Object.keys(global)` to view keys and set them to const currentKeys */

    var currentKeys = Object.keys(this);
    var validKeys = [
      'console',
      'DTRACE_NET_SERVER_CONNECTION',
      'DTRACE_NET_STREAM_END',
      'DTRACE_HTTP_SERVER_REQUEST',
      'DTRACE_HTTP_SERVER_RESPONSE',
      'DTRACE_HTTP_CLIENT_REQUEST',
      'DTRACE_HTTP_CLIENT_RESPONSE',
      'global',
      'process',
      'Buffer',
      'clearImmediate',
      'clearInterval',
      'clearTimeout',
      'setImmediate',
      'setInterval',
      'setTimeout',
      'module',
      'require'];
    var wire; // Find the wire.
    for (i = 0; i < currentKeys.length; i++) {
      if (!validKeys.includes(currentKeys[i])) {
        wire = currentKeys[i];
      }
    }
    CutTheWire(this[wire]);

// best practice

var wire = Object.keys(this).pop()
CutTheWire(this[wire]);