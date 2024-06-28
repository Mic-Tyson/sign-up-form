document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const pwMatchMessage = document.getElementById('pw-match');
  const submitButton = document.getElementById('submit-button');
  const form = document.getElementById('odin-form');

  function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {
      confirmPassword.style.borderColor = 'red';
      confirmPassword.setAttribute('invalid', '');
      pwMatchMessage.classList.add('show');
    } else {
      confirmPassword.style.borderColor = '#D6D9DC';
      confirmPassword.removeAttribute('invalid');
      pwMatchMessage.classList.remove('show');
    }
  }

  password.addEventListener('input', checkPasswordMatch);
  confirmPassword.addEventListener('input', checkPasswordMatch);

  submitButton.addEventListener('click', (event) => {
    const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (element.tagName === 'INPUT' && element.hasAttribute('required') && !element.value.trim()) {
        alert(`Please fill in the ${element.name} field.`);
        element.focus(); 
        event.preventDefault();
        return;
      }
    }
  });
});
