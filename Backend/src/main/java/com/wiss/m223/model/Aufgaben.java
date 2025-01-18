package com.wiss.m223.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Aufgaben {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String description;
    private String username;
    private String status; // Annahme: Status der Aufgabenliste (z.B. "aktiv", "inaktiv")

    public Aufgaben() {
        // Standardkonstruktor
    }

    public Aufgaben(String name, String description, String username, String status) {
        this.name = name;
        this.description = description;
        this.username = username;
        this.status = status;
    }
    // Getter und Setter Autogeneriert.
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
