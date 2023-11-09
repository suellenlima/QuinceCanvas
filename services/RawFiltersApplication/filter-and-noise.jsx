// Função para aplicar a redução de ruído usando Gaussian Blur
function applyNoiseReduction(doc, radius) {
    doc.activeLayer.applyGaussianBlur(radius);
  }
  
  // Função para aplicar o filtro Camera Raw
  function applyCameraRawFilter(doc) {
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    desc.putPath(idnull, doc.fullName);
    executeAction(stringIDToTypeID("Adobe Camera Raw Filter"), desc, DialogModes.NO);
  }

  // Cria um novo CameraRAWOpenOptions
    var options = new CameraRAWOpenOptions();

    // Define as opções personalizadas
    options.saturation = -20;
    options.shadows = -30;
    options.exposure = -0,30
    options.contrast = +10
    // options.openAsSmartObject = true;
  
  // Função de tratamento de resposta do Adobe Bridge
  function handleBridgeResponse(response) {

      // Abre o arquivo no Photoshop
      var doc = app.open(new File(response), options);
  
      // Aplica a redução de ruído usando Gaussian Blur com um raio de 5 pixels
      applyNoiseReduction(doc, 1);
  
      // Aplica o filtro Camera Raw
    //   applyCameraRawFilter(doc);
  
    var saveOptions = new JPEGSaveOptions();
    saveOptions.quality = 12;  // Define a qualidade da imagem (de 0 a 12)

    // Salva o documento com as opções personalizadas
    doc.saveAs(new File("C:/Users/2017200628/Desktop/MilenaXV/Principaisv2"), saveOptions);

      // Salva o documento modificado
      doc.save();
  
      // Fecha o documento
      doc.close(SaveOptions.DONOTSAVECHANGES);
  
    // Imprima uma mensagem de confirmação
    $.writeln("As fotos foram processadas com sucesso!");
  }
  
  var fileList = Folder("C:/Users/2017200628/Desktop/MilenaXV/Principais").getFiles("*.jpg");
  for (var i = 0; i < fileList.length; i++) {
      var file = fileList[i];
      handleBridgeResponse(file)
  }
  