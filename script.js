const contas = [
  {
    cuser: "Vitor",
    cemail: "vitormalaspini@outlook.com",
    csenha: "Vi12022010",
  },
];

function emailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

document.getElementById("login").addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});

function createaccont() {
  const user = document.getElementById("username");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const senha2 = document.getElementById("senha2");

  if (user.value.trim() === "") {
    user.value = "";
    user.placeholder = "Insira um nome de usuário válido";
    user.classList.add("erro");
    user.focus();
    return;
  } else {
    user.classList.remove("erro");
  }

  if (!emailValido(email.value)) {
    email.value = "";
    email.placeholder = "Insira um email válido";
    email.classList.add("erro");
    email.focus();
    return;
  } else {
    email.classList.remove("erro");
  }

  if (senha.value === "") {
    senha.value = "";
    senha.placeholder = "Insira uma senha válida";
    senha.classList.add("erro");
    senha.focus();
    return;
  } else {
    senha.classList.remove("erro");
  }

  if (senha.value !== senha2.value) {
    senha2.value = "";
    senha2.placeholder = "As senhas não coincidem!";
    senha2.classList.add("erro");
    senha2.focus();
    return;
  } else {
    senha2.classList.remove("erro");
  }

  for (let i in contas) {
    if (user.value === contas[i].cuser) {
      user.value = "";
      user.placeholder = "Esse nome de usuário já existe!";
      user.classList.add("erro");
      user.focus();
      return;
    }

    if (email.value === contas[i].cemail) {
      email.value = "";
      email.placeholder = "Esse email já está cadastrado!";
      email.classList.add("erro");
      email.focus();
      return;
    }
  }

  contas.push({
    cuser: user.value,
    cemail: email.value,
    csenha: senha.value,
  });

  user.value = "";
  email.value = "";
  senha.value = "";
  senha2.value = "";
  window.location.href = "site.html";
}

function login() {
  const emaill = document.getElementById("emaill");
  const senhal = document.getElementById("senhal");
  if (isEmail(emaill.value)) {
    for (let i in contas) {
      if (emaill.value === contas[i].cemail) {
        if (senhal.value === contas[i].csenha) {
          senhal.classList.remove('erro')
          emaill.classList.remove('erro')
          window.location.href = "site.html";
        } else {
          emaill.classList.remove('erro')
          senhal.placeholder = "A senha esta incorreta!";
          senhal.value = "";
          senhal.classList.add("erro");
        }
      } else {
        emaill.placeholder = "O Email não esta cadastrado";
        emaill.value = "";
        emaill.classList.add("erro");
      }
    }
  } 
  else {
    for (let i in contas) {
      if (emaill.value === contas[i].cuser) {
        if (senhal.value === contas[i].csenha) {
          senhal.classList.remove('erro')
          emaill.classList.remove('erro')
          window.location.href = "site.html";
        } else {
          emaill.classList.remove('erro')
          senhal.placeholder = "A senha esta incorreta!";
          senhal.value = "";
          senhal.classList.add("erro");
        }
      } else {
        emaill.placeholder = "O Usuario não esta cadastrado";
        emaill.value = "";
        emaill.classList.add("erro");
      }
    }
  }
}

function japossui() {
  document.getElementById("criar").style.display = "none";
  document.getElementById("entrar").style.display = "block";
}

function naopossui() {
  document.getElementById("emaill").value = "";
  document.getElementById("senhal").value = "";
  document.getElementById("criar").style.display = "block";
  document.getElementById("entrar").style.display = "none";
}
