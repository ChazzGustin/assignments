function countCode (str) {
    var i = str.match(/co\we/gi);
    console.log(i);
  }
  countCode("aaacodebbb");
  countCode("codexxcode");
  countCode("cozexxcope");