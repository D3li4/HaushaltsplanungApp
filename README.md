# Gemeinsame Haushaltsplanung
## Inhaltsverzeichnis
1. [Beschreibung](#Beschreibung)
2. [Voraussetzungen](#voraussetzungen)
3. [Installation](#installation)
4. [Verwendung](#verwendung)
5. [Dokumentation](#dokumentation)
6. [Lizenz](#lizenz)

---
## Beschreibung

Das Programm dient als Plattform für das Managen von Haushaltsaufgaben. Es können vorgängig Aufgaben vordefiniert werden. Die Aufgaben können vom Administrator nachträglich bearbeitet werden.  
Für die Verwaltung muss ein Administrator bestimmt werden welcher auch den gesammten verlauf von abgeschlossenen Aufgaben einsehen kann.  
Die einzelnen User aus einem Haushalt können ausstehende aufgaben markieren welche sie erledigen wollen und nach beendigung als erledigt markieren. 

---
## Voraussetzungen
Um das Haushaltsplaner-System zu verwenden, müssen bestimmte Voraussetzungen erfüllt sein:

- Node.js und npm:
Stellen Sie sicher, dass Node.js und npm auf Ihrem System installiert sind. Sie werden für die Ausführung des Frontend-Teils React mit Vite benötigt.

- Java Development Kit (JDK):
Installieren Sie das JDK, da es für den Betrieb des Backend-Teils (Spring Boot mit JPA) erforderlich ist.

- Datenbank:
Konfigurieren Sie eine Datenbank, die von JPA unterstützt wird. In unserem fall MySQL.

- Git:
Sie müssen Git installiert haben, um das Projekt von GitHub zu klonen.  

Weiter unten finden Sie die detailierte [Installation](#installation).

---
## Installation

Die Installation des Haushaltsplaner-Systems erfordert die folgenden Schritte. Stellen Sie sicher, dass Sie die erforderliche Software gemäss den Voraussetzungen (siehe unten) installiert haben, bevor Sie fortfahren.

1. Voraussetzungen überprüfen:
Vergewissern Sie sich, dass folgende Software auf Ihrem System installiert ist:

- __Node.js und npm:__  
[Node.js herunterladen und installieren](https://nodejs.org/en)  

- __Java Development Kit (JDK):__  
[JDK herunterladen und installieren](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)

- __Datenbank:__  
[MySQL herunterladen und Konfigurieren](https://dev.mysql.com/downloads/installer/)

- __Git:__  
[Git herunterladen und installieren](https://git-scm.com/)

2. Projekt klonen: 
```bash
git clone https://github.com/D3li4/HaushaltsplanungApp.git
cd HaushaltsplanungApp
```
3. Frontend-Abhängigkeiten installieren:
```bash
cd Frontend
npm install
```

4. Backend konfigurieren:  
Passen Sie die Datenbankkonfiguration in der Datei Backend/src/main/resources/application.properties an.

---
## Verwendung
Nach erfolgreicher Installation können Sie die HaushaltsplanungApp verwenden:

1. Frontend starten:  
Navigieren Sie zum Frontend-Verzeichnis:
```bash
 cd HaushaltsplanungApp/Frontend.
 ```
Starten Sie die Entwicklungsserver mit: 
```bash
npm run dev
```
Die Anwendung ist jetzt unter http://localhost:5173 verfügbar.

2. Administratorrolle:  
Bestimmen Sie einen Administrator, der die Plattform verwalten kann.
Der Administrator kann vordefinierte Aufgaben bearbeiten und den gesamten Verlauf von abgeschlossenen Aufgaben einsehen.

3. Benutzerinteraktion:  
Benutzer aus einem Haushalt können ausstehende Aufgaben markieren, die sie erledigen wollen, und sie nach Beendigung als erledigt markieren.

4. Datenbankzugriff:  
Bei Bedarf können Sie auf die Datenbank zugreifen, um sicherzustellen, dass alle Daten ordnungsgemäss gespeichert werden.

5. Backend starten:  
Dies können Sie in Ihrer IDE tun. Dafür muss nur die Hauptklasse ausgeführt werden.  
Dies startet die Anwendung auf http://localhost:8080.

---
## Dokumentation
Hier gelangen Sie zur [Dokumentation](Dokumentation/Dokumentation.md).  
Das [Sicherheitskonzept](Dokumentation/SECURITY.md) können Sie hier einsehen.

---
## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die Datei [LICENSE](LICENSE) für Details.