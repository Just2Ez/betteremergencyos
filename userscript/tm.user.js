// ==UserScript==
// @name BetterEmergencyOS
// @namespace https://github.com/Just2Ez/betteremergencyos
// @icon https://www.google.com/s2/favicons?sz=64&domain=emergencyos.de
// @description Quality of Life changes for EmergencyOS.
// @author _just2ez
// @version 1.0
// @match *://*.emergencyos.de/*
// @grant GM.getValue
// @grant GM.setValue
// @grant GM.getResourceText
// @resource settings https://pastebin.com/raw/x8ukRiek
// ==/UserScript==



const techConfig = {
  selectorAkteDropdown: "body > form > div > div.app-inner-body > div > div:nth-child(2) > div:nth-child(2) > div > div > div.selectize-input.items.required.not-full.has-options", // akte dropdown
  selectorTicketDropdown: "body > form > div > div.app-inner-body > div > div.cal-form > div:nth-child(2) > div > div > div > div.selectize-input.items.required.not-full.has-options", // ticket dropdown

  selectorAkteTextField: ["#editor > div.ql-editor.ql-blank", "#editor > div.ql-editor"], // akte editors
  selectorAkteField: "body > form > div > div.app-inner-body > div > div:nth-child(3) > div > div > div", // akte buttonrow
  selectorAkteViolationInput: "body > form > div > div.app-inner-body > div > div:nth-child(2) > div:nth-child(2) > div > div > div.selectize-input.items.required.not-full.has-options > input[type=text]", // akte violation input
  selectorAkteViolationList: "body > form > div > div.app-inner-body > div > div:nth-child(2) > div:nth-child(2) > div > div > div.selectize-dropdown.multi.plugin-remove_button > div",

  selectorAkteCopyButtons: "body > div.app-inner > div.app-inner-body > div > div:nth-child(8)", // created akte reporttext
  selectorAkteEditor: "body > div.app-inner > div.app-inner-body > div > div.ql-snow > div", // created akte editor
  selectorAkteViolations: "body > div.app-inner > div.app-inner-body > div > div.report-header.d-flex > div.report-tags", // created akte violations

  selectorDienstnummer: "body > form > div > div.app-inner-body > div > div:nth-child(4) > div:nth-child(2) > div > input[type=text]", // dienstnummer

  allowedPathnames: [
    "/Functions/Police/Function_NOL/AddCrime.php",
    "/Functions/Police/Function_Ticket/index.php",
    "/Functions/Police/Function_NOL/OffenderDetail.php",
    "/Functions/Police/Function_NOL/Detail2.php",
    "/App/index.php",
    "/App/",
  ],
}

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



// Create Settings PopUp
async function createSettings() {
  const checkExist = document.getElementById('settingsPOPUP')
  if(checkExist) {return console.log("SETTINGS-POPUP ALREADY OPEN.");}
  
  const element = document.createElement("div")
  element.id = "settingsPOPUP"

  // HTML
  element.innerHTML = `
    <!-- CLOSE BUTTON -->
    <button id="close">X</button>

    <!-- PARAMETER -->
    <h1><u>Parameter</u></h1>
    <!-- Permanent Parameter -->
    <div id="parameter">
      <input type="text" disabled="true" id="parameter_placeholder" value="{datum}">
      <input type="text" disabled="true" id="parameter_value" value="DD.MM.YYYY">
      <button disabled="true">X</button>
    </div>
    <div id="parameter">
      <input type="text" disabled="true" id="parameter_placeholder" value="{zeit}">
      <input type="text" disabled="true" id="parameter_value" value="hh:mm">
      <button disabled="true">X</button>
    </div>
    <div id="parameter">
      <input type="text" disabled="true" id="parameter_placeholder" value="{suspectName}">
      <input type="text" disabled="true" id="parameter_value" value="Vorname Nachname">
      <button disabled="true">X</button>
    </div>
    <div id="parameter">
      <input type="text" disabled="true" id="parameter_placeholder" value="{suspectBirth}">
      <input type="text" disabled="true" id="parameter_value" value="DD.MM.YYYY">
      <button disabled="true">X</button>
    </div>

    <!-- Custom Parameter -->
    <div id="allParameter">
    </div>
    <button id="addParameter">+</button>
    
    <!-- AKTENVORLAGEN -->
    <h1><u>Aktenvorlagen</u></h1>
    <!-- Custom Aktenvorlagen -->
    <div id="allAkten">
    </div>
    <button id="addAkte">+</button>

    <!-- EINSTELLUNGEN -->
    <h1><u>Einstellungen</u></h1>
    <!-- Checkbox -->
    <div id="settingsDiv">
      <p>Parameter aktiviert:</p>
      <input type="checkbox" id="replaceParameter">
    </div>

    <!-- Import/Export Configuration -->
    <input id="importfield" type="text" placeholder="Konfiguration hier einfügen...">
    <div id="configDiv">
      <button id="import">LOAD FROM INPUT</button>
      <button id="export">EXPORT TO CLIPBOARD</button>
    </div>

    <!-- Save/Reset Configuration -->
    <div id="buttonsDiv">
      <button id="save">SAVE</button>
      <button id="resetdefault">RESET TO DEFAULT</button>
    </div>
  `
  // Styling
  const style = document.createElement("style")
  style.innerHTML = `
    #settingsPOPUP {
    color: black;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 600px;
    height: 600px;
    border-radius: 5px;
    border: 2px solid black;
    overflow: auto;
    z-index: 1000;
    text-align: center;
    transform: translateX(-50%) translateY(-50%);
    }

    #settingsPOPUP * {
    all: revert;
    z-index: 1000;
    }

    #settingsPOPUP button {
    margin: 5px;
    outline: none;
    }

    #settingsPOPUP h1 {
    margin-bottom: 0;
    }
    
    #importfield {
    width: 40%
    }

    #close {
    position: absolute;
    top: 5px;
    right: 5px;
    }

    #buttonsDiv {
    padding-top: 1vh;
    padding-bottom: 1vh;
    }

    #settingsDiv {
    display: flex;
    justify-content: center;
    }

    #configDiv {
    display: flex;
    justify-content: center;
    }

    #parameter {
    display: flex;
    justify-content: center;
    }

    #parameter_placeholder {
    width: 25%;
    margin: 5px;
    }

    #parameter_value {
    width: 25%;
    margin: 5px;
    }

    #akte {
    display: flex;
    justify-content: center;
    }

    #akte_buttonName {
    width: 25%;
    margin: 5px;
    }

    #akte_template {
    width: 60%;
    margin: 5px;
    }
  `
  element.appendChild(style)

  // Script
  const scriptText = await GM.getResourceText("settings");
  eval(scriptText)

  document.body.append(element)
}

function createSettingsButton() {
  const element = document.getElementById("user")
  if (element) {
    const a = document.createElement("a")
    a.onclick = createSettings
    a.innerHTML = `<i class="fas fa-cog"></i>`
    element.appendChild(a)
  } else {
    setTimeout(createSettingsButton, 300)
  }
}

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
    // Save suspect
    await GM.setValue("beos_suspect", {
      name: suspectNameElement.innerText, birth: suspectBirthElement.innerText
    });
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
  const beos_suspect = await GM.getValue("beos_suspect", {
    name: permanentParameter["{suspectName}"], birth: permanentParameter["{suspectBirth}"]
  });
  permanentParameter["{suspectName}"] = beos_suspect.name
  permanentParameter["{suspectBirth}"] = beos_suspect.birth
  console.log("LOADED SUSPECT", `${permanentParameter["{suspectName}"]} - ${permanentParameter["{suspectBirth}"]}`)
}

// Insert template in editor
function insertAkte(template) {
  const element1 = document.querySelector(techConfig.selectorAkteTextField[0])
  const element2 = document.querySelector(techConfig.selectorAkteTextField[1])
  if (element1) {
    element1.innerHTML = template
    console.log("TEMPLATE INSERTED IN EDITOR. [element1]")
  } else if (element2) {
    element2.innerHTML = template
    console.log("TEMPLATE INSERTED IN EDITOR. [element2]")
  } else {
    setTimeout(insertAkte, 300, template)
  }
}

// Add a button for template
function addTemplateButton(label, template) {
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
      insertAkte(template);
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING TEMPLATEBUTTON.")
  }
}

// Add a button for copying current template
function addTemplateCopyButton() {
  const element = document.querySelector(techConfig.selectorAkteField)
  if (element) {
    const newButton = document.createElement('h1');
    newButton.textContent = "COPY TEMPLATE";
    newButton.classList.add("app-btn")
    newButton.style.marginTop = "7px"
    newButton.style.marginLeft = "5px"
    newButton.style.padding = "8px 5px"
    newButton.style.userSelect = "none"
    newButton.style.float = "right"
    newButton.addEventListener('click', async function () {
      const element = document.querySelector(techConfig.selectorAkteTextField[1])
      navigator.clipboard.writeText(element.innerHTML)
      console.log("COPIED TEMPLATE TO CLIPBOARD.", element.innerHTML)
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING COPYBUTTON.")
  }
}

// Add a button for inserting akte from storage
async function addTemplateInsertButton() {
  const beos_copycase = await GM.getValue("beos_copycase", undefined)
  if (!beos_copycase) { return; }

  const element = document.querySelector(techConfig.selectorAkteField)
  if (element) {
    const newButton = document.createElement('h1');
    newButton.textContent = "INSERT";
    newButton.classList.add("app-btn")
    newButton.style.marginTop = "7px"
    newButton.style.marginLeft = "5px"
    newButton.style.padding = "8px 5px"
    newButton.style.userSelect = "none"
    newButton.style.float = "right"
    newButton.addEventListener('click', function () {
      if (beos_copycase) {
        // Insert template in editor
        insertAkte(beos_copycase.template)
        console.log("INSERTED COPYCASE TEMPLATE.", element.innerHTML)

        // Add violations
        const violationClick = document.querySelector(techConfig.selectorAkteViolationInput)
        //violationClick.click()

        for (let violation in beos_copycase.violations) {
          const currViolation = beos_copycase.violations[violation]
          for (let i = 0; i < currViolation.amount; i++) {
            const violationList = document.querySelector(techConfig.selectorAkteViolationList)
            const elements = violationList.querySelectorAll('.option'); // select all akten clickables
            console.log("LENGTH:", elements.length)


            // Loop all found elements
            let targetElement
            elements.forEach(element => {
              if (element.innerText === currViolation.violation) {
                targetElement = element;
              }
            });

            // Check if element was found
            if (targetElement) {
              console.log('VIOLATION ELEMENT FOUND.', targetElement);
              //Selectize.prototype.onOptionSelect({currentTarget: targetElement})
              console.log("INSERTED VIOLATION.", currViolation.violation)
            } else {
              console.log('VIOLATION ELEMENT NOT FOUND.');
            }
          }
        }

      } else {
        console.log("NO COPYCASE FOUND. NOT CREATING INSERT BUTTON.")
      }
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING INSERTBUTTON.")
  }
}

function addAkteCopyButton() {
  const element = document.querySelector(techConfig.selectorAkteCopyButtons)
  if (element) {
    const newButton = document.createElement('h1');
    newButton.textContent = "COPY";
    newButton.classList.add("app-btn")
    newButton.style.padding = "8px 5px"
    newButton.style.userSelect = "none"
    newButton.style.float = "right"
    newButton.addEventListener('click', async function () {
      // Template from editor
      const editor = document.querySelector(techConfig.selectorAkteEditor)

      // Parse violations
      let parsedViolations = []
      const violations = document.querySelector(techConfig.selectorAkteViolations)
      for (let i = 0; i < violations.children.length; i++) {
        const violation = violations.children[i].innerText;
        const parsedAmount = violation.substring(0, violation.indexOf(" ")).slice(0, -1)
        const parsedViolation = violation.substring(violation.indexOf(" ") + 1)
        parsedViolations.push({ amount: parseInt(parsedAmount), violation: parsedViolation })
      }

      await GM.setValue("beos_copycase", { violations: parsedViolations, template: editor.innerHTML.trim() })
      console.log("COPIED AKTE TO STORAGE.", { violations: parsedViolations, template: editor.innerHTML.trim() })
    });
    element.appendChild(newButton);
  } else {
    alert("ERROR ADDING AKTE COPYBUTTON.")
  }
}

(async function () {
  'use strict';

  console.log(`PATHNAME: ${window.location.pathname}`)
  if (techConfig.allowedPathnames.includes(window.location.pathname)) {
    console.log(`BetterEmergencyOS RUNNING IN '${window.location.pathname}'.`)

    // Load Configuration
    const loadedParameter = await GM.getValue("beos_parameter", defaultConfig.Parameter)
    const loadedAkten = await GM.getValue("beos_akten", defaultConfig.Akten)
    const loadedSettings = await GM.getValue("beos_settings", defaultConfig.Settings)
    console.log("CONFIGURATION LOADED.")

    switch (window.location.pathname) {
      // Aktensystem
      case "/Functions/Police/Function_NOL/AddCrime.php":
        drowdownHeight(techConfig.selectorAkteDropdown)
        editorHeight()
        await getUniqueInformation()
        for (let akte in loadedAkten) {
          // Load Template
          let template = loadedAkten[akte].template

          if (loadedSettings.replaceParameter) {
            // Replace currentConfig.Parameter
            for (let para in loadedParameter) {
              template = template.replaceAll(loadedParameter[para].placeholder, loadedParameter[para].value)
            }

            // Replace permanentParameter
            for (let para in permanentParameter) {
              template = template.replaceAll(para, permanentParameter[para])
            }
          }

          // Add Button
          addTemplateButton(loadedAkten[akte].buttonName, template)
        }
        addTemplateInsertButton()
        addTemplateCopyButton()
        break;
      // Ticketsystem
      case "/Functions/Police/Function_Ticket/index.php":
        drowdownHeight(techConfig.selectorTicketDropdown)
        break;
      // Strafregister
      case "/Functions/Police/Function_NOL/OffenderDetail.php":
        getSuspectInformation()
        break;
      // Strafakte
      case "/Functions/Police/Function_NOL/Detail2.php":
        addAkteCopyButton()
        break;
      // Settings PopUp
      case "/App/index.php":
      case "/App/":
        createSettingsButton()
        break;
    }
  }
})();