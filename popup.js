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

// Clear Configuration from LocalStorage
async function resetConfiguration() {
  chrome.storage.local.clear()
  console.log("CLEARING CONFIGURATION.")
  window.close()
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
    await setStorageData({ beos_config: loadedConfig})
    console.log("SAVED IMPORTED CONFIGURATION.", loadedConfig)
    window.close()
  } else {
    console.log("IMPORT NOT VALID.",importfield.value)
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
  replaceParameterInput.checked = currentConfig.replaceParameter
}

// INITIATE
async function init() {
  await loadConfiguration() // Load Configuration from LocalStorage
  await createElements() // Create Elements from loaded Configuration

  // Einstellungen Buttons
  document.getElementById('save').addEventListener('click', saveConfiguration);
  document.getElementById('resetdefault').addEventListener('click', resetConfiguration);

  document.getElementById('export').addEventListener('click', exportConfiguration);
  document.getElementById('import').addEventListener('click', importConfiguration);

  // Hinzufügen von Vorlage
  document.getElementById('addParameter').addEventListener('click', () => {
    addParameter("{platzhalter}", "Dieser Text ersetzt den Platzhalter.")
  });
  document.getElementById('addAkte').addEventListener('click', () => {
    addAkte("Name des Buttons", `Aktenvorlage -> Strg + V nach COPY-Button`)
  });
}

// Initate, when site is fully loaded
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init()
  }
}