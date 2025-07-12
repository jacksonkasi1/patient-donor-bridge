# BloodConnect UI Development TODO

This document outlines the UI development tasks for the BloodConnect application prototype. The focus is on creating the user interface screens for AI-powered virtual patient conversations that inspire real blood donations.

**Core Concept:** Virtual AI patients with realistic voices (ElevenLabs v3) have personal conversations with donors to create emotional connections that motivate real-world blood donations.

**Design Inspiration:** Following **Globos Voice-First Social Media Application** design principles - ultra-minimalist, clean, voice-first interface with large circular profiles and tiny status indicators.

**MOBILE-ONLY DESIGN:** This application supports **mobile view only** with a maximum width of **480px**. No desktop or tablet responsive design required - the screen will not expand beyond mobile dimensions.

**UI LIBRARY:** Uses **shadcn/ui exclusively** - no custom UI components or other UI libraries allowed. All components must use shadcn/ui with Tailwind CSS styling.

## **Design System Reference**
📋 **See `DESIGN_SYSTEM.md` for complete design specifications, component layouts, and styling guidelines.**

## High Priority: Core Screens & Patient Flow

-   [ ] **Home/Dashboard Screen (`/`)**
    -   [ ] Create minimalist dashboard layout following Globos design principles.
    -   [ ] **AI Patient Grid (shadcn/ui + Globos-style):**
        -   [ ] 3-column grid layout (mobile-only design, max-width: 480px)
        -   [ ] Use shadcn/ui **Avatar** component for profile images (120px diameter)
        -   [ ] Use shadcn/ui **Badge** component for status indicators (12px)
        -   [ ] Patient names with shadcn/ui typography (16px, medium weight)
        -   [ ] Status colors: 🔴 Critical, 🟡 Moderate, 🟢 Stable
        -   [ ] Lucide React bell icon overlay for highest priority cases
    -   [ ] **Ultra-clean layout:** Abundant white space, no visual clutter
    -   [ ] **Minimal navigation:** Voice-first approach with large touch targets

-   [ ] **AI Patient List Screen (`/patients`)**
    -   [ ] **shadcn/ui Grid Layout:**
        -   [ ] Use shadcn/ui **Card** component for patient containers
        -   [ ] Use shadcn/ui **Avatar** component for profile images (120px)
        -   [ ] Use shadcn/ui **Badge** component for status indicators (12px)
        -   [ ] Clean typography: patient names with shadcn/ui text styles (16px, medium)
        -   [ ] Equal spacing between cards (16px gaps)
        -   [ ] Fixed 3-column grid (mobile-only, max-width: 480px)
    -   [ ] **Minimalist Status System:**
        -   [ ] 🔴 Red circle: Critical/Urgent patients  
        -   [ ] 🟡 Yellow circle: Moderate urgency
        -   [ ] 🟢 Green circle: Stable patients
        -   [ ] Bell icon overlay for emergencies
    -   [ ] **Voice-First Interaction:**
        -   [ ] Use shadcn/ui **Button** component for "Talk to [Name]" actions
        -   [ ] Minimal text, maximum visual clarity
        -   [ ] Gesture-based navigation where possible

-   [ ] **AI Patient Profile Screen (`/patients/[id]`)**
    -   [ ] **Globos-Style Profile Layout:**
        -   [ ] Extra-large circular profile image (200px) centered at top
        -   [ ] Status circle (16px) at bottom-right of main profile
        -   [ ] Patient name below image (24px, medium weight)
        -   [ ] Minimal information display - only essentials
    -   [ ] **Clean Information Hierarchy:**
        -   [ ] Blood type and urgency status prominently displayed
        -   [ ] AI-generated story in clean, readable format
        -   [ ] Personality hints subtly integrated
        -   [ ] No visual clutter - generous white space
    -   [ ] **Voice-First Action Button:**
        -   [ ] Use shadcn/ui **Button** component for "Talk to [Patient Name]" (80px height)
        -   [ ] Primary action - voice conversation
        -   [ ] Use shadcn/ui **Button** component for "Donate Now" secondary action
        -   [ ] Consistent with Globos interaction patterns

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
    -   [ ] **Globos Voice-First Interface:**
        -   [ ] Large patient profile image (200px) centered at top
        -   [ ] Active status indicator (16px green circle) during conversation  
        -   [ ] "Connecting to [Patient Name]..." status text
        -   [ ] Ultra-clean layout with abundant white space
    -   [ ] **Minimalist Voice Controls:**
        -   [ ] Large circular microphone button (80px) - primary action
        -   [ ] Smaller end call button (60px) - red circular icon
        -   [ ] Mute button (60px) - circular with visual feedback
        -   [ ] Pulsing animation on active microphone
    -   [ ] **Visual Voice Feedback:**
        -   [ ] Speaking/listening states with color changes
        -   [ ] Subtle animations for voice activity
        -   [ ] Clean status indicators (no complex UI)
    -   [ ] **ElevenLabs v3 Integration:**
        -   [ ] Real-time audio streaming interface
        -   [ ] Voice quality indicators
        -   [ ] Smooth conversation flow management

-   [ ] **AI Chat/Messaging Screen (`/chat/[patientId]`)**
    -   [ ] **Globos-Inspired Chat Interface:**
        -   [ ] Clean, minimal message bubbles with generous spacing
        -   [ ] Patient profile circle (40px) next to messages
        -   [ ] Ultra-simple typography and layout
        -   [ ] Voice-first approach with large voice message buttons
    -   [ ] **Minimalist Message Design:**
        -   [ ] Simple message bubbles without complex styling
        -   [ ] Clear typography (14px regular weight)
        -   [ ] Adequate white space between messages
        -   [ ] Typing indicators with clean animation

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
