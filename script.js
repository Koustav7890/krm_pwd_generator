const lengthField = document.getElementById("length");

lengthField.addEventListener("invalid", function (e) {
  e.target.setCustomValidity("Pick a number between 8 and 20");
});

lengthField.addEventListener("input", function (e) {
  e.target.setCustomValidity("");
});

function copyFunction() {
  let copyText = document.getElementById("pwd");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  Snackbar.show({ text: "Password Copied", pos: "bottom-center" });
}

document
  .getElementsByTagName("form")[0]
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const len = lengthField.value;
    let set = new Set();

    let pd = "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("num").checked) pd += "0123456789";
    if (document.getElementById("cap").checked)
      pd += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("spl").checked) pd += "~!@#$%^&*()_+,.<>?/:;[]{}-/*";

    let result = "";
    let i = 0;

    while (i < len) {
      const ch = pd[Math.floor(Math.random() * pd.length)];

      if (document.getElementById("unique").checked) {
        if (set.has(ch)) continue;
        set.add(ch);
      }
      i++;
      result += ch;
    }
    document.getElementById("pwd").value = result;
  });
