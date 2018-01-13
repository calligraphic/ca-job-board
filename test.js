const fs = require('fs');

fs.readFile('config/.storybook/storybook-config.json', (err, data) => {
  if (err) throw err;
  console.log('our callback:', data.toString());
});
