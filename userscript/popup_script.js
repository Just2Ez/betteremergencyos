'use strict';

let currentConfig = undefined



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

    if (loadedConfig.Parameter) {await GM.setValue("beos_parameter", loadedConfig.Parameter)}
    if (loadedConfig.Akten) {await GM.setValue("beos_akten", loadedConfig.Akten)}
    if (loadedConfig.Settings) {await GM.setValue("beos_settings", loadedConfig.Settings)}

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