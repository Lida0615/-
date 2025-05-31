document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", maskPhone);
    phoneInput.addEventListener("focus", maskPhone);
    phoneInput.addEventListener("blur", maskPhone);
    phoneInput.addEventListener("keydown", maskPhone);

    function maskPhone(event) {
      let keyCode;
      event.keyCode && (keyCode = event.keyCode);
      let pos = phoneInput.selectionStart;

      if (pos < 3) event.preventDefault();

      let matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = phoneInput.value.replace(/\D/g, ""),
          newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) : a;
          });

      i = newValue.indexOf("_");
      if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = new RegExp("^" + matrix.substr(0, phoneInput.value.length)
        .replace(/_+/g, "\\d{1," + "$&".length + "}")
        .replace(/[+()]/g, "\\$&") + "$");

      if (!reg.test(phoneInput.value) || phoneInput.value.length < 5 || keyCode > 47 && keyCode < 58) {
        phoneInput.value = newValue;
      }
      if (event.type === "blur" && phoneInput.value.length < 16) {
        phoneInput.value = "";
      }
    }
  });