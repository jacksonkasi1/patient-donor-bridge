# BloodConnect UI Development TODO

This document outlines the UI development tasks for the BloodConnect application prototype. The focus is on creating the user interface screens for AI-powered virtual patient conversations that inspire real blood donations.

**Core Concept:** Virtual AI patients with realistic voices (ElevenLabs v3) have personal conversations with donors to create emotional connections that motivate real-world blood donations.

## High Priority: Core Screens & Patient Flow

-   [ ] **Home/Dashboard Screen (`/`)**
    -   [ ] Create the main dashboard layout with patient overview.
    -   [ ] **Patient Cards with Urgency Status:**
        -   [ ] Display patient cards with urgency indicators (green, yellow, red colors).
        -   [ ] Add bell icon for urgent notifications.
        -   [ ] Show patient name, blood type, and urgency level.
    -   [ ] **Quick Stats:** Display donation statistics and impact metrics.
    -   [ ] Implement the bottom navigation bar (`BottomNavBar`).

-   [ ] **AI Patient List Screen (`/patients`)**
    -   [ ] Create a list item component for each AI patient (`PatientCard`).
    -   [ ] Display AI-generated patients with name, blood type, urgency status colors, and "Connect" button.
    -   [ ] **Urgency Visual Indicators:**
        -   [ ] Red: Critical/Urgent AI patients
        -   [ ] Yellow: Moderate urgency
        -   [ ] Green: Stable/Less urgent
        -   [ ] Bell icon for high-priority cases
    -   [ ] **AI Patient Authenticity Indicators:**
        -   [ ] Realistic profile photos (AI-generated)
        -   [ ] Personality hints or conversation previews
    -   [ ] Implement the bottom navigation bar (`BottomNavBar`).
    -   [ ] Style based on `Stitch Design.png`.

-   [ ] **AI Patient Profile Screen (`/patients/[id]`)**
    -   [ ] Create the main layout for the AI patient profile page.
    -   [ ] **Profile Header:** Display AI patient's photo, name, blood type, age, and urgency status.
    -   [ ] **Compatibility Section:**
        -   [ ] Add the blood bag graphic.
        -   [ ] List compatible blood types with clear visual indicators.
    -   [ ] **AI Patient Timeline Section:**
        -   [ ] Create timeline component for AI-generated medical events (Diagnosis, Treatment Start, etc.).
        -   [ ] Display timeline with icons, dates, and status indicators.
    -   [ ] **AI Patient Story Section:** 
        -   [ ] Display AI-generated personal narrative and backstory.
        -   [ ] Show conversation preview or personality traits.
        -   [ ] Highlight emotional connection points.
    -   [ ] **Action Buttons:**
        -   [ ] "Talk to [Patient Name]" button - prominent call-to-action for voice conversation.
        -   [ ] "Donate Now" button - after conversation CTA.
    -   [ ] Integrate the `BottomNavBar`.
    -   [ ] Style based on `Stitch Design-1.png`.

## High Priority: Donation Flow

-   [ ] **Book Appointment Screen (`/donate/[patientId]/book`)**
    -   [ ] Create the main layout for the appointment booking page.
    -   [ ] **Google Maps Integration:**
        -   [ ] Integrate Google Maps API for location display.
        -   [ ] Show nearby donation centers with markers.
        -   [ ] Display real-time location and directions.
    -   [ ] **Location Selection:**
        -   [ ] Create location item components with address and distance.
        -   [ ] Display list of available donation centers.
        -   [ ] Add "Use Current Location" and "Next Available" buttons.
    -   [ ] **Time Selection:**
        -   [ ] Create time slot grid with availability indicators.
        -   [ ] Show available time slots for selected date.
        -   [ ] Allow multi-date selection for flexibility.
    -   [ ] **Blood Donation Options:**
        -   [ ] Display different donation types (Whole Blood, Platelets, Plasma).
        -   [ ] Show donation duration and requirements for each type.
    -   [ ] **Book Appointment Button:** Final confirmation call-to-action.
    -   [ ] Style based on `Stitch Design-2.png`.

-   [ ] **Donation Reminders Screen (`/reminders/[appointmentId]`)**
    -   [ ] **Pre-Donation Reminder (2 Days Before):**
        -   [ ] Display preparation instructions and dietary guidelines.
        -   [ ] Show appointment details and location.
    -   [ ] **Day Before Reminder:**
        -   [ ] Final preparation checklist.
        -   [ ] Confirm appointment and provide contact information.
    -   [ ] **Day of Donation:**
        -   [ ] Real-time directions to donation center.
        -   [ ] Check-in instructions and what to bring.
        -   [ ] Emergency contact information.

## Medium Priority: Communication & Navigation

-   [ ] **AI Voice Conversation Screen (`/call/[patientId]`)**
    -   [ ] Display avatars for AI patient and donor.
    -   [ ] Show "Connecting to [Patient Name]..." status with loading animation.
    -   [ ] **AI Conversation Controls:**
        -   [ ] "Mute" and "End Call" buttons.
        -   [ ] Real-time conversation transcript display (optional).
        -   [ ] Emotional indicators showing AI patient's current mood/tone.
    -   [ ] **ElevenLabs v3 Integration UI:**
        -   [ ] Voice quality indicator.
        -   [ ] Speaking/listening visual feedback.
    -   [ ] **Post-Conversation UI:**
        -   [ ] Thank you message from AI patient.
        -   [ ] Smooth transition to donation booking.
    -   [ ] Style based on `Stitch Design-3.png`.

-   [ ] **AI Chat/Messaging Screen (`/chat/[patientId]`)**
    -   [ ] Create messaging interface for AI patient-donor communication.
    -   [ ] Display message history with AI-generated responses.
    -   [ ] **AI Conversation Features:**
        -   [ ] Typing indicators with realistic AI response timing.
        -   [ ] Quick response options and emoji support.
        -   [ ] Voice message option to hear AI patient's voice (ElevenLabs).

-   [ ] **Navigation Flow & Routing**
    -   [ ] Connect Home screen to AI Patient List and Profile screens.
    -   [ ] Link AI Patient List to individual AI Patient Profile screens.
    -   [ ] Connect "Talk to [Patient Name]" button to AI Voice Conversation screen.
    -   [ ] Create smooth flow from AI conversation to "Donate Now" booking.
    -   [ ] Link "Start Conversation" to AI Chat/Call screens.
    -   [ ] Implement bottom navigation routing (Home, Patients, Profile).

## Low Priority: Profile & Additional Features

-   [ ] **Donor Profile Screen (`/profile`)**
    -   [ ] Display donor's personal information and donation history.
    -   [ ] Show donation statistics and impact metrics.
    -   [ ] Provide settings and preferences options.

-   [ ] **Donation History Screen (`/history`)**
    -   [ ] Display past donations with dates and recipients.
    -   [ ] Show impact stories and thank you messages.

-   [ ] **Notification Center (`/notifications`)**
    -   [ ] List all app notifications and reminders.
    -   [ ] Show urgent patient requests and system updates.
