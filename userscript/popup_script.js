'use strict';

let currentConfig = undefined

let defaultConfig = {
  Parameter: [
    {
      placeholder: "{dienstnummer}",
      value: "FIB-XX"
    },
    {
      placeholder: "{rang}",
      value: "Junior Agent"
    }
  ],
  Akten: [
    {
      buttonName: "FIB Schnellakte",
      template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdpcOCvqU8yWEzrha9Qx5u9oaV6JMAkRthxBbZ8O0MlrkpE7dvxx1BmGzqFXpf7u9eLxBB79vyuijoMrh4AassxhGJUKnHJvZA0h9sS7PC5wXaefd1bkXMlP0GTnOGq5KaST11B84y_U7zqr576SSodZWq4?key=mwQ9ohSnXMTXw-JODAKBdg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Schnellakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">{zeit} - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">- Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="color: rgb(0, 0, 0);">- Der Beschuldigte forderte einen Anwalt.</span><span style="background-color: transparent; color: rgb(0, 0, 0);"> </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Der Beschuldigte verzichtet auf einen Anwalt. </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</span></p><p><span style="color: rgb(0, 0, 0);">- </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Eilverfahren abgelehnt durch: DOJ-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
    },
    {
      buttonName: "FIB Strafakte",
      template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcQRa7U9S9IGRvfBah0Ty6p6PY_D5feAI51OKGSLraPsBDBYaIUQmgqKdBz9gQsOhNAljkK7B4URoyoo3iLQrM8FUF2sUvpH67dPLVJkzheJPind7uTSBt5TvwPNYAMX0Cx3IBmPsAD_5q5oeLQrgsC6H-D?key=vQ1odk3uQ0ufP-Xk6tkTRg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Strafakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">{zeit} - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person:</strong></p><p>{suspectName} - {suspectBirth}</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">- Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="color: rgb(0, 0, 0);">- Der Beschuldigte forderte einen Anwalt.</span><span style="background-color: transparent; color: rgb(0, 0, 0);"> </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Der Beschuldigte verzichtet auf einen Anwalt. </span><strong style="background-color: transparent; color: rgb(0, 0, 0);">ODER </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</span></p><p><span style="color: rgb(0, 0, 0);">- </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Eilverfahren abgelehnt durch: DOJ-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
    },
    {
      buttonName: "FIB Kollektivakte",
      template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMHCZ2QGeBjVF-Fz57xoG_JLciyJtzReYxzxD4uDubMUISBZfSGFfVXsEBM8Fiio2KWLxhxZzg7dsmFowXIOrlJaIQtQPaUc1_xdQSIRC4-lqndu98RE9aR1K8BelWTr-dWMJ4bBGmMKuB0jhhFm9Sl-rN?key=4zvMuNh2FEQyWr85ICzYIg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Kollektivakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">{zeit} - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Personen:</strong></p><p>Vorname Nachname - DD.MM.YYYY</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände:</strong></p><p>Handy</p><p>GPS</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">-</span><span style="color: rgb(0, 0, 0);"> </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und von allen Beschuldigten verstanden.</span></p><p>- Der Beschuldigte forderte einen Anwalt. <strong>ODER</strong> Der Beschuldigte verzichtet auf einen Anwalt. <strong>ODER</strong> Es wurde ein Anwalt gefordert, konnte aber keiner gestellt werden.</p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">-</span><span style="color: rgb(0, 0, 0);"> </span><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Kollektivakte wurde von der DOJ-XX genehmigt.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
    },
  ],
  Settings: {
    replaceParameter: true
  }
}

// Wird automatisch in getUniqueInformation() aktualisiert.
const permanentParameter = {
  "{datum}": undefined,
  "{zeit}": undefined,
  "{suspectName}": "Vorname Nachname",
  "{suspectBirth}": "DD.MM.YYYY"
}



// Add Parameter to PopUp
async function addParameter(placeholder, value) {
  const element = document.getElementById("allParameter")
  if (element) {
    const newParameter = document.createElement("div");
    newParameter.id = "parameter"

    const placeholderInput = document.createElement("input")
    placeholderInput.id = "parameter_placeholder"
    placeholderInput.value = `${placeholder}`
    placeholderInput.type = "text"
    newParameter.appendChild(placeholderInput)

    const valueInput = document.createElement("input")
    valueInput.id = "parameter_value"
    valueInput.value = `${value}`
    valueInput.type = "text"
    newParameter.appendChild(valueInput)

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.addEventListener('click', () => {
      newParameter.remove()
    });
    newParameter.appendChild(deleteButton)

    element.appendChild(newParameter);
  } else {
    alert("ERROR CREATING PARAMETER.")
  }
}

// Add Akte to PopUp
async function addAkte(buttonName, template) {
  const element = document.getElementById("allAkten")
  if (element) {
    const newAkte = document.createElement("div");
    newAkte.id = "akte"

    const buttonNameInput = document.createElement("input")
    buttonNameInput.id = "akte_buttonName"
    buttonNameInput.value = `${buttonName}`
    buttonNameInput.type = "text"
    newAkte.appendChild(buttonNameInput)

    const templateInput = document.createElement("input")
    templateInput.id = "akte_template"
    templateInput.value = `${template}`
    templateInput.type = "text"
    newAkte.appendChild(templateInput)

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "X"
    deleteButton.addEventListener('click', () => {
      newAkte.remove()
    });
    newAkte.appendChild(deleteButton)

    element.appendChild(newAkte);
  } else {
    alert("ERROR CREATING AKTE.")
  }
}

// Load Configuration from LocalStorage
async function loadConfiguration() {
  const loadedParameter = await GM.getValue("beos_parameter", defaultConfig.Parameter)
  const loadedAkten = await GM.getValue("beos_akten", defaultConfig.Akten)
  const loadedSettings = await GM.getValue("beos_settings", defaultConfig.Settings)

  currentConfig = {
    Parameter: loadedParameter,
    Akten: loadedAkten,
    Settings: loadedSettings
  }

  console.log("LOADED CONFIGURATION", currentConfig)
}

// Save Configuration in LocalStorage
async function saveConfiguration() {
  // Convert Parameter Elements to currentConfig
  const allParameterDiv = document.getElementById("allParameter")
  currentConfig.Parameter = []
  for (let i = 0; i < allParameterDiv.children.length; i++) {
    const parameter = allParameterDiv.children[i];
    currentConfig.Parameter.push({
      placeholder: parameter.querySelector("#parameter_placeholder").value,
      value: parameter.querySelector("#parameter_value").value
    })
  }

  // Convert Akten Elements to currentConfig
  const allAktenDiv = document.getElementById("allAkten")
  currentConfig.Akten = []
  for (let i = 0; i < allAktenDiv.children.length; i++) {
    const akte = allAktenDiv.children[i];
    currentConfig.Akten.push({
      buttonName: akte.querySelector("#akte_buttonName").value,
      template: akte.querySelector("#akte_template").value
    })
  }

  // Get Checkbox for replaceParameter
  const replaceParameterInput = document.getElementById("replaceParameter")
  currentConfig.Settings.replaceParameter = replaceParameterInput.checked

  // Save to LocalStorage
  await GM.setValue("beos_parameter", currentConfig.Parameter)
  await GM.setValue("beos_akten", currentConfig.Akten)
  await GM.setValue("beos_settings", currentConfig.Settings)

  console.log("SAVED CONFIGURATION.", currentConfig)
  window.parent.document.getElementById('settingsPOPUP').remove();
}

// Clear Configuration from LocalStorage
async function resetConfiguration() {
  await GM.setValue("beos_parameter", defaultConfig.Parameter)
  await GM.setValue("beos_akten", defaultConfig.Akten)
  await GM.setValue("beos_settings", defaultConfig.Settings)

  console.log("RESETTING CONFIGURATION.")
  window.parent.document.getElementById('settingsPOPUP').remove();
}

// Export Configuration to Clipboard
async function exportConfiguration() {
  let exportConfig = JSON.stringify(currentConfig)
  navigator.clipboard.writeText(exportConfig)
  console.log("COPIED CONFIGURATION TO CLIPBOARD.", exportConfig)
}

// Import Configuration from Input
async function importConfiguration() {
  const importfield = document.getElementById("importfield")
  if (importfield.value != "" && importfield.value.startsWith("{")) {
    let loadedConfig = JSON.parse(importfield.value)

    await GM.setValue("beos_parameter", loadedConfig.Parameter)
    await GM.setValue("beos_akten", loadedConfig.Akten)
    await GM.setValue("beos_settings", loadedConfig.Settings)

    console.log("SAVED IMPORTED CONFIGURATION.", loadedConfig)
    window.parent.document.getElementById('settingsPOPUP').remove();
  } else {
    console.log("IMPORT NOT VALID.", importfield.value)
  }
}

// Generate all Elements for PopUp
async function createElements() {
  // Generate Parameter Elements
  for (let parameter in currentConfig.Parameter) {
    let currentParameter = currentConfig.Parameter[parameter]
    await addParameter(currentParameter.placeholder, currentParameter.value)
  }

  // Generate Akten Elements
  for (let akte in currentConfig.Akten) {
    let currentAkte = currentConfig.Akten[akte]
    await addAkte(currentAkte.buttonName, currentAkte.template)
  }

  // Set correct value for Checkbox
  const replaceParameterInput = document.getElementById("replaceParameter")
  replaceParameterInput.checked = currentConfig.Settings.replaceParameter
}

// Initate, when site is fully loaded
(async function () {
  await loadConfiguration() // Load Configuration from LocalStorage
  await createElements() // Create Elements from loaded Configuration

  // Buttons
  document.getElementById('close').addEventListener('click', function () {
    console.log("CLOSING SETTINGS.")
    window.parent.document.getElementById('settingsPOPUP').remove();
  });

  document.getElementById('export').addEventListener('click', exportConfiguration);
  document.getElementById('import').addEventListener('click', importConfiguration);

  document.getElementById('save').addEventListener('click', saveConfiguration);
  document.getElementById('resetdefault').addEventListener('click', resetConfiguration);

  // Hinzufügen von Vorlage
  document.getElementById('addParameter').addEventListener('click', () => {
    addParameter("{platzhalter}", "Dieser Text ersetzt den Platzhalter.")
  });
  document.getElementById('addAkte').addEventListener('click', () => {
    addAkte("Name des Buttons", `Aktenvorlage -> Strg + V nach COPY-Button`)
  });
})();