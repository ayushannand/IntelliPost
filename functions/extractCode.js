function extractCode(rawCode) {
    let code = '';
    codeElements.forEach(element => {
      code += element.textContent + '\n';
    });
    return code;
  }