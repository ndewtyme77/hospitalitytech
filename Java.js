const scriptURL = 'https://script.google.com/u/0/home/projects/1zLh0551FtGLPKMdDCOWqzfDlVcEKJjdEN5IRTUaLT2G2Q57drXtxz8N5/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {

  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message));
});
