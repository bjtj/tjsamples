const pm2 = require('pm2');


function run_with_env(env) {
  pm2.connect(() => {
    pm2.start({
      name: 'myproc',
      env: env
    }, (err) => {
      if (err) {
        console.error(err);
        pm2.disconnect();
        return;
      }
      console.log('STARTED!');
      pm2.disconnect();
    });
  });
}


run_with_env({ MYMSG: process.argv[2] || 'hello' });
