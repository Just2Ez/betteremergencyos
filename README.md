# BetterEmergencyOS

Quality of Life Updates für **[EmergencyOS](https://emergencyos.de)**. Behebt diverse Stylefehler und fügt Aktenvorlagen hinzu.\
Ursprünglich erstellt für **[NarcoCity](https://discord.gg/narcocity)**, jedoch verwendbar auf sämtliche Server, welche EmergencyOS verwenden. 

## Installation

1. Aktiviere den **Entwicklermodus** in deinem Browser. **[chrome](https://support.google.com/chrome/a/answer/2714278?hl=de#:~:text=Rufen%20Sie%20chrome%3A%2F%2Fextensions,Sie%20rechts%20oben%20den%20Entwicklermodus.)** **[opera](https://help.opera.com/en/extensions/testing/#developer-mode)**
2. Installiere die Erweiterung **[Tampermonkey](https://www.tampermonkey.net/)**.
3. Installiere **[BetterEmergencyOS](https://raw.githubusercontent.com/Just2Ez/betteremergencyos/refs/heads/main/userscript/beos.user.js)**.

## Changelog

**v1.0 - 04.03.2025:** Umstieg von Extension auf Userscript. Ermöglicht automatische Aktualisierungen und vereinfacht die Installation. Konfigurationen bitte vor dem Wechsel exportieren, um Verlust zu vermeiden.

*(veraltete Erweiterung -> Branch: beos_extension)*\
v1.8 - 24.02.2025: Implementieren von {suspectName} und {suspectBirth}.\
v1.7 - 23.02.2025: Akteneditor skaliert nun korrekt mit der Länge der Akte.\
v1.6 - 20.02.2025: Importieren und Exportieren der Konfiguration ermöglicht Teilen mit Nutzern.\
v1.5 - 19.02.2025: Implementierung eines PopUp zur einfachen Konfiguration der Erweiterung.\
v1.4 - 16.02.2025: Deutliche Verbesserung der Benutzerfreundlichkeit durch vollständigen Rework.\
v1.0 - 23.11.2024: Initiierung von BetterEmergencyOS.

## Features

### <ins>Aktensystem</ins>

- Fügt Buttons hinzu, welche Aktenvorlagen automatisch einfügen.
  
<img src="https://i.imgur.com/kv2zYb8.png" width="50%">

- Auswahlliste für Straftaten skaliert nun richtig.

<img src="https://i.imgur.com/vALoLWe.png" width="50%">

- Akteneditor skaliert nun korrekt mit der Länge der Akte.

<img src="https://i.imgur.com/W52tQri.png" width="50%">

- Button zum Kopieren und Einfügen von erstellten Akten.

### <ins>Ticketsystem</ins>

- Auswahlliste für Straftaten skaliert nun richtig.

<img src="https://i.imgur.com/zU00nKD.png" width="50%">

## Konfiguration

Die Konfiguration findet über das integrierte PopUp statt.

**1. Öffnen der Einstellungen über das Kronensymbol.**

<img src="https://i.imgur.com/t1LcaaV.png" width="20%">

<img src="https://i.imgur.com/aXKFtYy.png" width="20%">

**2. Das Menü ermöglicht diverse Anpassungen.**

<img src="https://i.imgur.com/VlFdJzk.png" width="50%">

### <ins>Akten</ins>
Aktenvorlagen können erstellt und anschließend als Vorlage abgespeichert werden.

**`buttonName`**: Der Name des Buttons. (Beispiel: *"FIB Schnellakte"*)

<img src="https://i.imgur.com/JIOaeMv.png" width="15%">

**`template`**: Die Vorlage, welche im Aktensystem kopiert wurde.

<img src="https://i.imgur.com/mUZwS8e.png" width="15%">

> [!NOTE]
> Weitere Aktenvorlagen können nach belieben erstellt werden und können sämtliche Parameter enthalten.

### <ins>Parameter</ins>
Parameter sind innerhalb der Aktenvorlagen (mehrfach) verwendbar und werden mit dem hinterlegten Wert ersetzt.

**`{dienstnummer}`**: Der Platzhalter für den Parameter. (Beispiel: *"Meine Dienstnummer ist {dienstnummer}."* -> *"Meine Dienstnummer ist FIB-XX."*)

Folgende Parameter sind dauerhaft verwendbar und werde automatisch aktualisiert:

- **`{datum}`**: Aktuelles Datum. Format: "DD.MM.YYYY"
- **`{zeit}`**: Aktuelle Uhrzeit. Format: "hh:mm"
- **`{suspectName}`**: Name des Tatverdächtigen. Format: "Vorname Nachname"
- **`{suspectBirth}`**:Geburtsdatum des Tatverdächtigen. Format: "DD.MM.YYYY"

> [!NOTE]
> Weitere Parameter können nach belieben erstellt werden und sind anschließend in den Aktenvorlagen verwendbar.

### <ins>Einstellungen</ins>

- **`Parameter aktiviert`**: Falls aktiviert, werden die Parameter in einer Aktenvorlage mit den oben hinterlegten Werten ersetzt. Hilfreich für das Erstellen von eigenen Aktenvorlagen.
- **`LOAD FROM INPUT`**: Lädt die darüber eingefügte Konfiguration. Ermöglicht das Laden einer Konfiguration eines anderen Nutzer.\
  (***ACHTUNG**: Ausschließlich über `EXPORT TO CLIPBOARD` exportierte Konfigurationen sind einfügbar.*)
- **`EXPORT TO CLIPBOARD`**: Kopiert die aktuell gespeicherte Konfiguration in die Zwischenablage. Ermöglicht das Teilen der Konfiguration mit anderen Nutzern.

## Contact

**Fehler entdeckt? Fehlende Features? Fragen?**

<ins>Discord</ins>: **`_just2ez`**
