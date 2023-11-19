window.onload = () => {
    let header = document.getElementById('header');
  
    let ulHeader = document.createElement('ul');
  
    ulHeader.classList.add('ulHEADER');
  
    let optionInicio = document.createElement('a');
    let optionForum = document.createElement('a');
  
    optionInicio.classList.add('link-HEADER');
    optionInicio.href = "./main.html";
    optionInicio.innerText = "Início";
  
    optionForum.classList.add('link-HEADER-Here');
    optionForum.href = "./forum.html";
    optionForum.innerText = "Fórum";
  
    let headerText = document.createElement('style');
  
    headerText.innerText = "";
    headerText.classList.add('nomeDaClasse');
  
    ulHeader.appendChild(optionInicio);
    ulHeader.appendChild(optionForum);
    ulHeader.appendChild(headerText);
  
    header.appendChild(ulHeader);
  }