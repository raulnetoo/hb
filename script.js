document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    
    fetch('https://script.google.com/macros/s/AKfycbzxRpHEjYcuLH1dgRI0YiXS8Ed99Kcc8uYRea0MO6okxtMuSUhIQVZJ4eaeDKTC9a9vVw/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'name=' + encodeURIComponent(name),
    })
    .then(response => {
      if (response.ok) {
        alert("Nome enviado com sucesso para a planilha do Google Sheets!");
      } else {
        alert("Erro ao enviar o nome para a planilha do Google Sheets.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao enviar o nome para a planilha do Google Sheets.");
    });
  });
  