# BetterEmergencyOS

Quality of Life Updates für [**EmergencyOS**](https://emergencyos.de). Behebt diverse Stylefehler und fügt Aktenvorlagen hinzu.

Ursprünglich erstellt für [**NarcoCity**](https://discord.gg/narcocity), jedoch verwendbar auf sämtliche Server, welche EmergencyOS verwenden. 

## Installation

1. **[Download](https://github.com/Just2Ez/emergencyos_addon/archive/refs/heads/main.zip)** dieses Repository als ZIP-Datei.
2. Entpacke die ZIP-Datei.
3. Installiere die Extension in deinem Browser. **[chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world?hl=de#load-unpacked)** **[opera](https://help.opera.com/en/extensions/testing/)**

## Features

### <ins>Aktensystem</ins>

- Fügt Buttons hinzu, welche Aktenvorlagen automatisch einfügen.

<img src="https://i.imgur.com/kv2zYb8.png" width="50%">

- Auswahlliste für Straftaten skaliert nun richtig.

<img src="https://i.imgur.com/vALoLWe.png" width="50%">

### <ins>Ticketsystem</ins>

- Auswahlliste für Straftaten skaliert nun richtig.

<img src="https://i.imgur.com/zU00nKD.png" width="50%">

## Konfiguration

Die Konfiguration findet über das integrierte PopUp statt.

**1.  Das Menü öffnet sich durch einen Klick auf die Extension.**

<img src="https://i.imgur.com/t1LcaaV.png" width="20%">

***TIPP:*** *Das anpinnen der Erweiterung vereinfacht die Benutzung.*

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
