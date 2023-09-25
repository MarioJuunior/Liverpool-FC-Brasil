window.onload = function() {
    setTimeout(function() {
      document.querySelector('.loading-screen').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 1000);
  };
  
  function mostraBotao() {
    document.getElementById("btn_cadastro").style.display = "block";
  };

  function mostraHome() {
    document.getElementById("home_cadastro").style.display = "flex";
  };

  function mostraRedirecionarAoLogin() {
    document.getElementById("login_cadastro").style.display = "flex";
  };

  setTimeout(mostraBotao, 1000)
  setTimeout(mostraHome, 1000)
  setTimeout(mostraRedirecionarAoLogin, 1000)