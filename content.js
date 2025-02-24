/////////////////////////////////////////////////////
///////////////// HIER NICHT ÄNDERN /////////////////
/////////////////////////////////////////////////////

// IFRAMES:
// /Functions/Police/Function_NOL/AddCrime.php -> Akte erstellen
// /Functions/Police/Function_Ticket/index.php -> Ticketsystem
// /Functions/Police/Function_NOL/OffenderDetail.php -> OffenderDetails

let currentConfig = undefined

// Modify height of dropdown for chosing laws
function drowdownHeight(selector) {
  const element = document.querySelector(selector)
  if (element) {
    if (element.style.height != "50%") {
      element.style.height = "50%"
    }
  } else {
    setTimeout(drowdownHeight, 300, selector)
  }
}

// Modify height of editor, so it scales with length of case
function editorHeight() {
  const element = document.getElementById("editor")
  if (element) {
    element.style.height = "100%"
  } else {
    setTimeout(editorHeight, 300)
  }
}

// Modify height of dropdown for chosing laws
async function getSuspectInformation() {
  const suspectNameElement = document.querySelector("#myModal > div > div > div.modal-body > a > b")
  const suspectBirthElement = document.querySelector("body > div.app-inner > div.app-inner-body > div > div:nth-child(1) > div.col > div:nth-child(3) > div > a.normalAncer")
  if (suspectNameElement && suspectBirthElement) {
    // Save suspect data to LocalStorage
    await setStorageData({ beos_suspect: {
      name: suspectNameElement.innerText, birth: suspectBirthElement.innerText
    }})
    console.log("SAVED SUSPECT.", `${suspectNameElement.innerText} - ${suspectBirthElement.innerText}`)
  } else {
    setTimeout(getSuspectInformation, 300)
  }
}

// Refresh permanent Parameters
async function getUniqueInformation() {
  const date = new Date();

  // Datum
  permanentParameter["{datum}"] = date.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'numeric', year: 'numeric'
  }).replaceAll('/', '.');

  // Zeit
  let stunden = date.getHours();
  let minuten = date.getMinutes();
  stunden = stunden.toString().padStart(2, '0');
  minuten = minuten.toString().padStart(2, '0');
  permanentParameter["{zeit}"] = `${stunden}:${minuten}`;

  // Suspect
  let { beos_suspect } = await getStorageData("beos_suspect")
  if (typeof beos_suspect === "undefined") {
      // No Suspect found -> Adding default to Storage
      await setStorageData({ beos_suspect: {
        name: "Vorname Nachname",
        birth: "DD.MM.YYYY"
      }})
      permanentParameter["{suspectName}"] = "Vorname Nachname"
      permanentParameter["{suspectBirth}"] = "DD.MM.YYYY"
      console.log("NO SUSPECT FOUND. SETTING DEFAULT.")
  } else {
      // Suspect found
      permanentParameter["{suspectName}"] = beos_suspect.name
      permanentParameter["{suspectBirth}"] = beos_suspect.birth
      console.log("LOADED SUSPECT", `${permanentParameter["{suspectName}"]} - ${permanentParameter["{suspectBirth}"]}`)
  }
}

// Insert template in editor
function insertAkte(templateAkte) {
  const element1 = document.querySelector(techConfig.selectorAkteTextField[0])
  const element2 = document.querySelector(techConfig.selectorAkteTextField[1])
  if (element1) {
    element1.innerHTML = templateAkte
    console.log("TEMPLATE INSERTED IN EDITOR. [element1]")
  } else if (element2) {
    element2.innerHTML = templateAkte
    console.log("TEMPLATE INSERTED IN EDITOR. [element2]")
  } else {
    setTimeout(insertAkte, 300, templateAkte)
  }
}

// Add a button for template
function addTemplateButton(label, akte) {
  const element = document.querySelector(techConfig.selectorAkteField)
  if (element) {
    const newButton = document.createElement('h1');
    newButton.textContent = label;
    newButton.classList.add("app-btn")
    newButton.style.marginTop = "7px"
    newButton.style.marginRight = "5px"
    newButton.style.padding = "8px 20px"
    newButton.style.userSelect = "none"
    newButton.addEventListener('click', function () {
      insertAkte(akte);
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING TEMPLATEBUTTON.")
  }
}

// Add a button for copying current template
function addCopyButton() {
  const element = document.querySelector(techConfig.selectorAkteField)
  if (element) {
    const newButton = document.createElement('h1');
    newButton.textContent = "📋 COPY 📋";
    newButton.classList.add("app-btn")
    newButton.style.marginTop = "7px"
    newButton.style.padding = "8px 5px"
    newButton.style.userSelect = "none"
    newButton.style.float = "right"
    newButton.addEventListener('click', function () {
      const element = document.querySelector(techConfig.selectorAkteTextField[1])
      navigator.clipboard.writeText(element.innerHTML)
      console.log("COPIED TEMPLATE TO CLIPBOARD.", element.innerHTML)
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING COPYBUTTON.")
  }
}

// INITIATE
async function init() {
  if (techConfig.allowedPathnames.includes(window.location.pathname)) {
    console.log(`BetterEmergencyOS RUNNING IN '${window.location.pathname}'.`)

    // Load Configuration from LocalStorage
    await loadConfiguration()
    console.log("CONFIGURATION LOADED.")

    switch (window.location.pathname) {
      // Aktensystem
      case "/Functions/Police/Function_NOL/AddCrime.php":
        drowdownHeight(techConfig.selectorAkteDropdown)
        editorHeight()
        getUniqueInformation()
        for (let akte in currentConfig.Akten) {
          // Load Template
          template = currentConfig.Akten[akte].template

          if(currentConfig.replaceParameter) {
            // Replace currentConfig.Parameter
            for (let para in currentConfig.Parameter) {
              template = template.replaceAll(currentConfig.Parameter[para].placeholder,currentConfig.Parameter[para].value)
            }

            // Replace permanentParameter
            for (let para in permanentParameter) {
              template = template.replaceAll(para,permanentParameter[para])
            }
          }
          
          // Add Button
          addTemplateButton(currentConfig.Akten[akte].buttonName, template)
        }
        addCopyButton()
        break;
      // Ticketsystem
      case "/Functions/Police/Function_Ticket/index.php":
        drowdownHeight(techConfig.selectorTicketDropdown)
        break;
      case "/Functions/Police/Function_NOL/OffenderDetail.php":
        getSuspectInformation()
        break;
    }
  }
}

// Initate, when site is fully loaded
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init()
  }
}