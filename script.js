function getContas() {
  return JSON.parse(localStorage.getItem("contas")) || [];
}
function setContas(contas) {
  localStorage.setItem("contas", JSON.stringify(contas));
}

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

/* =======================
   CRIAR CONTA
======================= */

function createaccont() {
  const user = document.getElementById("username");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const senha2 = document.getElementById("senha2");

  const contas = getContas();

  if (user.value.trim() === "") {
    user.value = "";
    user.placeholder = "Insira um nome de usuário válido";
    user.classList.add("erro");
    return;
  } else user.classList.remove("erro");

  if (!emailValido(email.value)) {
    email.value = "";
    email.placeholder = "Insira um email válido";
    email.classList.add("erro");
    return;
  } else email.classList.remove("erro");

  if (senha.value === "") {
    senha.value = "";
    senha.placeholder = "Insira uma senha válida";
    senha.classList.add("erro");
    return;
  } else senha.classList.remove("erro");

  if (senha.value !== senha2.value) {
    senha2.value = "";
    senha2.placeholder = "As senhas não coincidem!";
    senha2.classList.add("erro");
    return;
  } else senha2.classList.remove("erro");

  for (let i in contas) {
    if (user.value === contas[i].cuser) {
      user.value = "";
      user.placeholder = "Esse nome de usuário já existe!";
      user.classList.add("erro");
      return;
    }

    if (email.value === contas[i].cemail) {
      email.value = "";
      email.placeholder = "Esse email já está cadastrado!";
      email.classList.add("erro");
      return;
    }
  }

  contas.push({
    cuser: user.value,
    cemail: email.value,
    csenha: senha.value,
  });

  setContas(contas);

  user.value = "";
  email.value = "";
  senha.value = "";
  senha2.value = "";

  window.location.href = "socialmedia/index.html"
}

function login() {
  const emaill = document.getElementById("emaill");
  const senhal = document.getElementById("senhal");

  const contas = getContas();

  if (isEmail(emaill.value)) {
    for (let i in contas) {
      if (emaill.value === contas[i].cemail) {
        if (senhal.value === contas[i].csenha) {
          localStorage.setItem("usuarioLogado", contas[i].cuser);
          window.location.href = "socialmedia/index.html";
          return;
        } else {
          senhal.value = "";
          senhal.placeholder = "A senha está incorreta!";
          senhal.classList.add("erro");
          return;
        }
      }
    }

    emaill.value = "";
    emaill.placeholder = "O Email não está cadastrado";
    emaill.classList.add("erro");
  } else {
    for (let i in contas) {
      if (emaill.value === contas[i].cuser) {
        if (senhal.value === contas[i].csenha) {
          localStorage.setItem("usuarioLogado", contas[i].cuser);
          window.location.href = "socialmedia/index.html";
          return;
        } else {
          senhal.value = "";
          senhal.placeholder = "A senha está incorreta!";
          senhal.classList.add("erro");
          return;
        }
      }
    }

    emaill.value = "";
    emaill.placeholder = "O Usuário não está cadastrado";
    emaill.classList.add("erro");
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

function mostrarContas() {
  const lista = document.getElementById("listaContas");
  const contas = getContas();

  lista.innerHTML = "";

  if (contas.length === 0) {
    lista.innerHTML = "<p>Nenhuma conta cadastrada</p>";
    return;
  }

  contas.forEach((conta, index) => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "8px";
    div.style.marginBottom = "8px";

    div.innerHTML = `
      <strong>#${index + 1}</strong><br>
      Usuário: ${conta.cuser}<br>
      Email: ${conta.cemail}<br>
      Senha: ${conta.csenha}
    `;

    lista.appendChild(div);
  });

  lista.style.display = "block";
  document.getElementById("criar").style.display = "none";
  document.getElementById("entrar").style.display = "none";
  document.getElementById("limparContas").style.display = "block";
}

function limparContas() {
  if (confirm("Tem certeza que deseja apagar todas as contas?")){
  localStorage.removeItem("contas");

  document.getElementById("listaContas").innerHTML = "";
  document.getElementById("listaContas").style.display = "none";
  document.getElementById("limparContas").style.display = "none";
}
}