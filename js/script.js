document.getElementById("copyBtn").addEventListener("click", function(e) {
    e.preventDefault(); 
    var textarea = document.getElementById("exampleTextArea");
    textarea.select();
    document.execCommand("copy");
    alert("Text copied!");
    return false; 
});

document.getElementById("copyBtn2").addEventListener("click", function(e) {
    e.preventDefault(); 
    var textarea = document.getElementById("exampleTextArea2");
    textarea.select();
    document.execCommand("copy");
    alert("Text copied!");
    return false; 
});

document.getElementById("copyBtn3").addEventListener("click", function(e) {
    e.preventDefault(); 
    var textarea = document.getElementById("exampleTextArea3");
    textarea.select();
    document.execCommand("copy");
    alert("Text copied!");
    return false; 
});

document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
  });
  
  document.addEventListener('click', function(event) {
    var loginForm = document.getElementById('loginForm');
    var loginButton = document.getElementById('loginButton');
  
    if (event.target !== loginForm && event.target !== loginButton) {
      loginForm.style.display = 'none';
    }
  });