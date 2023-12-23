# Dokumentation Haushaltsplanner
## Inhaltsverzeichnis
1. [User Stories](#user-stories)
2. [Backend](#backend)
3. [Backend Tests](#backend-tests)
4. [Frontend](#frontend)
5. [Frontend Tests](#frontend-tests)
6. [Github](#github)

## User Stories
Wer: User  
Was: Aufgabe annehmen  
Warum: Um die anstehenden Aufgaben zu erledigen  
| Akzeptanzkriterien |  
| :--- |  
| 1. User kann eine Aufgabe auswählen. |
| 2. User kann die Aufgabe annehmen. | 
| 3. Die Aufgabe ist für die anderen nicht mehr verfügbar. |
| 4. User kann die Aufgabe auch ablehnen. |

Wer: Admin  
Was: Erstellen von Aufgaben  
Warum: Damit die Hausarbeiten aufgeteilt werden können  
| Akzeptanzkriterien |  
| :--- |  
| 1. Admin kann einzelne Aufgaben erstellen. |  
| 2. Admin kann auswählen, ob sich die Aufgabe wiederholt werden kann oder einzigartig ist. |  
| 3. Admin kann die fertig erstellte Aufgabe für die User freischalten. |   

Wer: Admin  
Was: Bearbeiten von Aufgaben  
Warum: Damit die Aufgaben bei bedarf überarbeitet oder sogar entfernt werden können. 
| Akzeptanzkriterien |  
| :--- |  
| 1. Admin kann einzelne, bereits erstelle Aufgaben nochmal bearbeiten. |  
| 2. Admin kann die geänderte Aufgabe speichern. |  
| 3. Admin kann die Aufgabe auch wieder löschen. |  

---
## Backend
### Technologien

- __Java:__  
Die Anwendung nutzt Java als Programmiersprache.

- __Spring Boot:__  
Spring Boot bietet eine einfache und effiziente Möglichkeit, Java-Anwendungen zu erstellen, zu konfigurieren und zu starten. Es erleichtert auch die Integration von Spring-Anwendungen mit anderen Bibliotheken und Frameworks.

- __Datenbank-Transaktionen:__  
Das Backend verwendet Transaktionen, um die Datenintegrität sicherzustellen. Dies ist besonders wichtig, wenn mehrere Datenbankoperationen als eine logische Einheit behandelt werden müssen.

---
## Backend Tests


| Testfall                    | Beschreibung                             | Erwartetes Ergebnis               |
|-----------------------------|------------------------------------------|-----------------------------------|
| Authentifizierungstest | Überprüft, ob ein Benutzer erfolgreich authentifiziert werden kann. | Die Authentifizierung ist erfolgreich, und der Benutzer erhält einen gültigen Token. |
| Aufgabenbearbeitungstest | Überprüft, ob ein Administrator Aufgaben erfolgreich bearbeiten kann. | Der Administrator kann Aufgaben erfolgreich aktualisieren und speichern. |

---
## Frontend
### Technologie

- __React:__  
React ist eine leistungsstarke JavaScript-Bibliothek für die Entwicklung von Benutzeroberflächen. Sie ermöglicht die Erstellung von wiederverwendbaren UI-Komponenten und fördert eine effiziente Aktualisierung der Benutzeroberfläche.

- __Vite:__  
Vite ist ein Build-Tool, das speziell für moderne JavaScript-Frameworks wie React entwickelt wurde. Es zeichnet sich durch schnelle Entwicklung und Hot Module Replacement (HMR) aus, was die Entwicklungszeit verkürzt.

---
## Frontend Tests


| Testfall                    | Beschreibung                              | Erwartetes Ergebnis               |
|-----------------------------|------------------------------------------|-----------------------------------|
|  Benutzerinteraktionstest | Überprüft, ob Benutzer erfolgreich mit der Benutzeroberfläche interagieren können, indem sie Aufgaben als erledigt markieren. |  Benutzer können Aufgaben erfolgreich markieren und den Status ändern. |
| Anzeigetest | Überprüft, ob die Benutzeroberfläche korrekt aktualisiert wird, wenn neue Daten verfügbar sind. | Die Benutzeroberfläche zeigt aktualisierte Daten nach erfolgreichem Backend-Aufruf an. |

---
## Github

Hier geht es direkt zum Github Repository: [Haushaltsplanung](https://github.com/D3li4/HaushaltsplanungApp)