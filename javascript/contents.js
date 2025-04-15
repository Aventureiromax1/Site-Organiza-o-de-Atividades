function toggleAside() {
  const aside = document.querySelector('aside');
  if (aside.style.display === 'none' || !aside.style.display) {
    aside.style.display = 'block';
    aside.style.maxWidth = '10rem';
    aside.style.backgroundColor = 'var(--bg-aside)';
  } else {
    aside.style.display = 'none';
  }
}

function filtrarIframe() {
  const iframe = document.querySelectorAll(".iframe");
  iframe.forEach((ifram) => {
    const doc = ifram.contentDocument || ifram.contentWindow.document;
    const mainContent = doc.querySelector("#introducao");


    if (mainContent) {
      const novoHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Conteúdo filtrado</title>
          <style>
            body { margin: 0; font-family: sans-serif; }
          </style>
        </head>
        <body style = "padding: 20px; background-color: var(--bg-default); color: white; font-family: Arial;  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); font-size: medium;">
          ${mainContent.outerHTML}
        </body>
      </html>
    `;

      doc.open();
      doc.write(novoHtml);
      doc.close();
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {

  const iframeSubjects = document.querySelectorAll(".iframeSubject");
  const iframe = document.querySelectorAll(".iframe");
  // animação do container de cada iframe em "contents.html"
  iframeSubjects.forEach((iframeSubject) => {
    iframeSubject.addEventListener("click", () => {
      iframeSubject.classList.toggle("expandido");
    });
  });

  function verificarTamanho() {
    iframeSubjects.forEach((container) => {
      const iframe = container.querySelector('iframe')
      const containerHeight = container.offsetHeight;


      if (containerHeight < 51) {
        iframe.style.display = 'none';
      } else {
        iframe.style.display = 'block';
      }
    });
  }


  // adiciona um verificador de tamanho e associa a um Observer
  verificarTamanho();

  window.addEventListener('resize', verificarTamanho);

  iframeSubjects.forEach((container) => {
    const resizeObserver = new ResizeObserver(() => {
      verificarTamanho();
    });
    resizeObserver.observe(container);
  });
});

