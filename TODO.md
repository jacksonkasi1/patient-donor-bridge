# BloodConnect UI Development TODO

This document outlines the UI development tasks for the BloodConnect application prototype. The focus is on creating the user interface screens based on the provided designs, without implementing backend logic.

## High Priority: Core Donation Flow

-   [ ] **Patient List Screen (`/patients`)**
    -   [ ] Create a list item component for each patient (`PatientCard`).
    -   [ ] Display a list of patients with their name, blood type, and a "Connect" button.
    -   [ ] Implement the bottom navigation bar (`BottomNavBar`).
    -   [ ] Style based on `Stitch Design.png`.

-   [ ] **Patient Profile Screen (`/patients/[id]`)**
    -   [ ] Create the main layout for the patient profile page.
    -   [ ] **Profile Header:** Display patient's photo, name, blood type, and age.
    -   [ ] **Compatibility Section:**
        -   [ ] Add the blood bag graphic.
        -   [ ] List compatible blood types.
    -   [ ] **Timeline Section:**
        -   [ ] Create a component for timeline events (Diagnosis, Treatment Start, etc.).
        -   [ ] Display the timeline with icons and dates.
    -   [ ] **Patient Story Section:** Display the patient's personal narrative.
    -   [ ] **Donate Now Button:** A prominent call-to-action button.
    -   [ ] Integrate the `BottomNavBar`.
    -   [ ] Style based on `Stitch Design-1.png`.

-   [ ] **Book Appointment Screen (`/donate/[patientId]/book`)**
    -   [ ] Create the main layout for the appointment booking page.
    -   [ ] **Map View:** Add a placeholder image for the map.
    -   [ ] **Location Selection:**
        -   [ ] Create a component for location items.
        -   [ ] Display a list of donation centers.
        -   [ ] Add "Use Current Location" and "Next Available" buttons.
    -   [ ] **Time Selection:**
        -   [ ] Create a grid of available time slots.
        -   [ ] Allow the user to select a time.
    -   [ ] **Book Appointment Button:** The final call-to-action.
    -   [ ] Style based on `Stitch Design-2.png`.

## Medium Priority: Secondary Screens & Navigation

-   [ ] **Voice Call Screen (`/call/[patientId]`)**
    -   [ ] Display avatars for the patient and donor.
    -   [ ] Show "Connecting..." status text.
    -   [ ] Add "Mute" and "End Call" buttons.
    -   [ ] Style based on `Stitch Design-3.png`.

-   [ ] **Navigation Flow**
    -   [ ] Connect the "Patient List" screen to the "Patient Profile" screen.
    -   [ ] Connect the "Donate Now" button on the profile to the "Book Appointment" screen.
    -   [ ] Implement the routing for the bottom navigation bar (Home, Patients, Profile).

## Low Priority: Additional Features (for later)

-   [ ] **Donor Profile Screen (`/profile`)**
-   [ ] **Home/Dashboard Screen (`/`)**
-   [ ] **Pre-Donation & Donation Day informational screens.**
-   [ ] **WhatsApp notification placeholder screens.**
-   [ ] **User engagement and impact tracking screens.**
-   [ ] **Emergency alert screens.**
