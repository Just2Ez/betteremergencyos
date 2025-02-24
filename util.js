'use strict';

const techConfig = {
    selectorAkteDropdown: "body > form > div > div.app-inner-body > div > div:nth-child(2) > div:nth-child(2) > div > div > div.selectize-input.items.required.not-full.has-options",
    selectorAkteTextField: ["#editor > div.ql-editor.ql-blank", "#editor > div.ql-editor"],
    selectorAkteField: "body > form > div > div.app-inner-body > div > div:nth-child(3) > div > div > div",
    selectorTicketDropdown: "body > form > div > div.app-inner-body > div > div.cal-form > div:nth-child(2) > div > div > div > div.selectize-input.items.required.not-full.has-options",
    allowedPathnames: ["/Functions/Police/Function_NOL/AddCrime.php", "/Functions/Police/Function_Ticket/index.php", "/Functions/Police/Function_NOL/OffenderDetail.php"],
    selectorDienstnummer: "body > form > div > div.app-inner-body > div > div:nth-child(4) > div:nth-child(2) > div > input[type=text]"
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
        template: `<h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);"><img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcMHCZ2QGeBjVF-Fz57xoG_JLciyJtzReYxzxD4uDubMUISBZfSGFfVXsEBM8Fiio2KWLxhxZzg7dsmFowXIOrlJaIQtQPaUc1_xdQSIRC4-lqndu98RE9aR1K8BelWTr-dWMJ4bBGmMKuB0jhhFm9Sl-rN?key=4zvMuNh2FEQyWr85ICzYIg" height="115" width="639.5142941646583"></span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">Federal Investigation Bureau</span></h2><h2 class="ql-align-center"><span style="background-color: transparent; color: rgb(7, 55, 99);">{dienstnummer}</span></h2><p class="ql-align-center"><span style="background-color: transparent; color: rgb(255, 0, 0);">Kollektivakte</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatort:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">PLZ XXXX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Tatzeitraum:</strong></p><p><span style="color: rgb(0, 0, 0);">{zeit} - {datum}</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Weitere beteiligte Einheiten / Zeugen:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">FIB-XX</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Beschuldigte Person(-en):</strong></p><p><br></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Sachverhalt aus Sicht des FIB:</strong></p><p><em>Möglichst detaillreich, jedoch dennoch kurz halten.</em></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Abgenommene Gegenstände </strong><span style="background-color: transparent; color: rgb(0, 0, 0);">(von [FIB-XX])</span><strong style="background-color: transparent; color: rgb(0, 0, 0);">:</strong></p><p>1x Handy</p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">Bemerkung:</strong></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Rechte wurden von FIB-XX, im Beisein der FIB-XX vorgelesen und verstanden.</span></p><p><span style="background-color: transparent; color: rgb(0, 0, 0);">Die Kollektivakte wurde von der DOJ-XX genehmigt.</span></p><p><br></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">gez.</strong></p><p><strong style="background-color: transparent; color: rgb(0, 0, 0);">[{dienstnummer}] [{rang}] [Federal Investigation Bureau]</strong></p>`
      },
    ],
    replaceParameter: true
}

// Wird automatisch in getUniqueInformation() aktualisiert.
const permanentParameter = {
  "{datum}": undefined,
  "{zeit}": undefined,
  "{suspectName}": "Vorname Nachname",
  "{suspectBirth}": "DD.MM.YYYY"
}

// LocalStorage -> Get Values from LocalStorage
const getStorageData = key =>
    new Promise((resolve, reject) =>
      chrome.storage.local.get(key, result =>
        chrome.runtime.lastError
            ? reject(Error(chrome.runtime.lastError.message))
            : resolve(result)
      )
    )

// LocalStorage -> Set Values for Key
const setStorageData = data =>
    new Promise((resolve, reject) =>
      chrome.storage.local.set(data, () =>
        chrome.runtime.lastError
            ? reject(Error(chrome.runtime.lastError.message))
            : resolve()
      )
    )

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
  currentConfig.replaceParameter = replaceParameterInput.checked

  // Save to LocalStorage
  await setStorageData({ beos_config: currentConfig})
  console.log("SAVED CONFIGURATION.", currentConfig)
  window.close()
}

// Load Configuration from LocalStorage
async function loadConfiguration() {
    let { beos_config } = await getStorageData("beos_config")
    if (typeof beos_config === "undefined") {
        // No Config found -> Adding to Storage
        await setStorageData({ beos_config: defaultConfig })
        currentConfig = defaultConfig
        console.log("NO CONFIGURATION FOUND. SETTING DEFAULT.")
    } else {
        // Config found
        currentConfig = beos_config
        console.log("LOADED CONFIGURATION", currentConfig)
    }
}