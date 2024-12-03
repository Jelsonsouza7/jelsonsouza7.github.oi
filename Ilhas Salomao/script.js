// Função para validar o formulário
function form() {
  const feedbackForm = document.getElementById('feedbackForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  // Função para validar o formulário
  feedbackForm.addEventListener('submit', (event) => {
    // Impede o envio do formulário
    event.preventDefault();

    let isValid = true;

    // Valida o campo Nome
    if (nameInput.value.trim() === '') {
      nameError.textContent = 'O nome é obrigatório.';
      isValid = false;
    } else {
      nameError.textContent = ''; // Limpa a mensagem de erro se válido
    }

    // Valida o campo E-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'O e-mail é obrigatório.';
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Insira um e-mail válido.';
      isValid = false;
    } else {
      emailError.textContent = ''; // Limpa a mensagem de erro se válido
    }

    // Valida o campo Mensagem
    if (messageInput.value.trim() === '') {
      messageError.textContent = 'A mensagem é obrigatória.';
      isValid = false;
    } else {
      messageError.textContent = ''; // Limpa a mensagem de erro se válido
    }

    // Se todos os campos forem válidos, exibe uma mensagem de sucesso
    if (isValid) {
      alert('Obrigado pelo seu feedback!');
      feedbackForm.reset(); // Limpa o formulário
    }
  });
}
// Chama a função de validação quando a página for carregada
document.addEventListener('DOMContentLoaded', form);

// Função para validar os clicks nas imagens

// Função que abre o modal com a imagem
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImg.src = imgElement.src; // Define o src da imagem no modal para a imagem clicada

  // Fecha o modal quando clicar no "x"
  const closeModal = document.querySelector(".close");
  closeModal.onclick = function () {
    modal.style.display = "none";
  }

  // Fecha o modal ao clicar fora da imagem
  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
}

// Função para adicionar os eventos de clique às imagens
function addClickEvents() {
  const images = document.querySelectorAll(".container img");
  images.forEach(image => {
    image.addEventListener("click", function () {
      openModal(image);
    });
  });
}

// Chama a função para adicionar os eventos quando a página for carregada
document.addEventListener("DOMContentLoaded", addClickEvents);

// Função colocar informações nas imagens
function toggleInfo(buttonId, infoId) {
  const button = document.getElementById(buttonId);
  const info = document.getElementById(infoId);

  button.addEventListener('click', () => {
      info.classList.toggle('show');
      if (info.classList.contains('show')) {
          button.textContent = 'Ocultar Informações';
      } else {
          button.textContent = 'Mostrar Informações';
      }
  });
}

// Chamando a função para cada seção
toggleInfo('toggleButton1', 'info1');
toggleInfo('toggleButton2', 'info2');
toggleInfo('toggleButton3', 'info3');
toggleInfo('toggleButton4', 'info4');
toggleInfo('toggleButton5', 'info5');
toggleInfo('toggleButton6', 'info6');
toggleInfo('toggleButton7', 'info7');
toggleInfo('toggleButton8', 'info8');


// Função para abrir o modal com a imagem clicada
function abrirModal(imagem) {
  var modal = document.getElementById("modal");
  var modalImagem = document.getElementById("imagem-modal");
  modal.style.display = "flex"; // Torna o modal visível
  modalImagem.src = imagem.src; // Define a imagem no modal
}

// Função para fechar o modal
function fecharModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none"; // Oculta o modal
}
