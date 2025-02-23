/////////////////////////////////////////////////////
///////////////// HIER NICHT ÄNDERN /////////////////
/////////////////////////////////////////////////////

// IFRAMES:
// /Functions/Police/Function_NOL/AddCrime.php -> Akte erstellen
// /Functions/Police/Function_Ticket/index.php -> Ticketsystem

let currentConfig = undefined

const permanentParameter = {
  "{datum}": undefined, // Wird automatisch in getUniqueInformation() aktualisiert.
  "{zeit}": undefined // Wird automatisch in getUniqueInformation() aktualisiert.
}

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

function editorHeight() {
  const element = document.getElementById("editor")
  if (element) {
    element.style.height = "100%"
  } else {
    setTimeout(editorHeight, 300)
  }
}

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
}

function insertAkte(templateAkte) {
  const element1 = document.querySelector(techConfig.selectorAkteTextField[0])
  const element2 = document.querySelector(techConfig.selectorAkteTextField[1])
  if (element1) {
    element1.innerHTML = templateAkte
    console.log("BetterEmergencyOS: Akte erfolgreich eingefügt. [element1]")
  } else if (element2) {
    element2.innerHTML = templateAkte
    console.log("BetterEmergencyOS: Akte erfolgreich eingefügt. [element2]")
  } else {
    setTimeout(insertAkte, 300, templateAkte)
  }
}

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
      console.log(element.innerHTML)
      console.log("COPIED TO CLIPBOARD.")
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING COPYBUTTON.")
  }
}

async function init() {
  if (techConfig.allowedPathnames.includes(window.location.pathname)) {
    // Load Configuration from LocalStorage
    console.log("LOADING CONFIGURATION")
    await loadConfiguration()

    console.log("BetterEmergencyOS: RUNNING")
    console.log(window.location.pathname)

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
    }
  }
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init()
  }
}