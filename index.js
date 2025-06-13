const { exec } = require('child_process');

exec('n8n start', (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao iniciar n8n: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
