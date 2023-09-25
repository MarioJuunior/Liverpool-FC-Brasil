window.onload = function() {
    setTimeout(function() {
      document.querySelector('.loading-screen').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 1000);
  };
  
  function mostraBotao() {
    document.getElementById("btn_login").style.display = "block";
  };

  function mostraHome() {
    document.getElementById("home_login").style.display = "flex";
  };

  function mostraDirecionarAoCadastro() {
    document.getElementById("cadastro_login").style.display = "flex";
  };
  
  setTimeout(mostraBotao, 1000)
  setTimeout(mostraHome, 1000)
  setTimeout(mostraDirecionarAoCadastro, 1000)