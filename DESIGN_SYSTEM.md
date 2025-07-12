# BloodConnect Design System & Engineering Knowledge Base

## **Design Inspiration: Globos Voice-First Social Media**

BloodConnect follows the **Globos Voice-First Social Media Application** design principles, emphasizing minimalism, simplicity, and voice-first interactions.

**MOBILE-ONLY APPLICATION:** This app is designed exclusively for mobile devices with a **maximum width of 480px**. No desktop or tablet layouts are supported - the interface remains at mobile dimensions across all screen sizes.

## **UI Library: shadcn/ui Only**

**IMPORTANT:** This project uses **shadcn/ui exclusively** for all UI components. 
- **No custom UI components** - use shadcn/ui components only
- **No other UI libraries** (Material-UI, Ant Design, Chakra UI, etc.)
- **Consistent shadcn/ui theming** throughout the application
- **Tailwind CSS** for styling (comes with shadcn/ui)

### **Core Design Principles**

#### **1. Minimalist & Clean Interface**
- **Ultra-clean layouts** with abundant white space
- **No visual clutter** - only essential elements visible
- **Simple typography** with clear hierarchy
- **Subtle shadows and rounded corners** for modern feel

#### **2. Voice-First Design Philosophy**
- **Large, prominent voice interaction buttons**
- **Visual feedback for voice states** (speaking, listening, muted)
- **Minimal text-based navigation**
- **Audio-centric user experience**

#### **3. Profile-Centric Layout**
- **Large circular profile images** as primary visual elements
- **Status indicators as tiny colored circles** near profile images
- **Names below profile images** in clean, readable font
- **Grid-based layout** for multiple profiles

---

## **Component Design Specifications**

### **1. AI Patient Profile Cards**

#### **Visual Structure:**
```
┌─────────────────┐
│   ●●●●●●●●●●●   │ ← Large circular profile image (120px)
│   ●●●●●●●●●●●   │
│   ●●●●●●●●●●●   │
│        🔴       │ ← Tiny status circle (12px) - Red/Yellow/Green
│                 │
│   Patient Name  │ ← Clean typography below image
│                 │
└─────────────────┘
```

#### **Status Indicators:**
- **🔴 Red Circle:** Critical/Urgent patients
- **🟡 Yellow Circle:** Moderate urgency  
- **🟢 Green Circle:** Stable patients
- **Bell icon overlay:** For highest priority cases

#### **Styling:**
- Profile image: 120px diameter, perfect circle
- Status circle: 12px diameter, positioned at bottom-right of profile
- Name typography: 16px, medium weight, centered below image
- Card spacing: 20px padding, subtle shadow

### **2. Voice Conversation Interface**

#### **Layout Structure:**
```
┌──────────────────────────────────┐
│           Patient Name           │ ← Header with patient name
│                                  │
│        ●●●●●●●●●●●●●●●●●●        │ ← Large patient profile (200px)
│        ●●●●●●●●●●●●●●●●●●        │
│        ●●●●●●●●●●●●●●●●●●        │
│              🟢                  │ ← Active status indicator
│                                  │
│         "Connecting..."          │ ← Status text
│                                  │
│                                  │
│     [🎤]    [📞]    [🔇]        │ ← Voice control buttons
│                                  │
└──────────────────────────────────┘
```

#### **Voice Controls:**
- **Primary talk button:** Large circular microphone icon (80px)
- **End call button:** Red circular phone icon (60px)
- **Mute button:** Circular mute icon (60px)
- **Visual feedback:** Pulsing animation during active conversation

### **3. Patient List Grid Layout**

#### **Grid Structure:**
```
┌─────────┬─────────┬─────────┐
│ Patient │ Patient │ Patient │
│   Card  │   Card  │   Card  │
├─────────┼─────────┼─────────┤
│ Patient │ Patient │ Patient │
│   Card  │   Card  │   Card  │
└─────────┴─────────┴─────────┘
```

#### **Specifications:**
- **Fixed 3-column grid** (mobile-only design)
- **Maximum width: 480px** - no responsive scaling
- **Equal spacing** between cards (16px)
- **Fixed aspect ratio** for mobile-only layout

### **4. Navigation & Actions**

#### **Minimalist Navigation:**
- **No complex menus** - keep it simple
- **Large touch targets** (minimum 44px)
- **Clear iconography** with minimal text
- **Gesture-based interactions** where possible

#### **Primary Actions:**
- **"Talk to [Name]"** - Large, prominent button
- **"Donate Now"** - Secondary action after conversation
- **Minimal sub-navigation** - voice-first approach

---

## **Color System**

### **Status Colors**
- **Critical (Red):** `#FF4444` - Urgent blood need
- **Moderate (Yellow):** `#FFB800` - Moderate urgency
- **Stable (Green):** `#00C853` - Less urgent, stable condition

### **Primary Colors**
- **Background:** `#FFFFFF` - Pure white for minimalism
- **Text Primary:** `#333333` - Dark gray for readability
- **Text Secondary:** `#666666` - Medium gray for subtitles
- **Accent:** `#FF6B6B` - Warm red for blood donation theme

### **Voice Interaction Colors**
- **Active Speaking:** `#4CAF50` - Green for active voice
- **Listening:** `#2196F3` - Blue for listening state
- **Muted:** `#757575` - Gray for muted state

---

## **Typography System**

### **Font Hierarchy**
- **Primary Font:** System font stack for performance
- **Patient Names:** 16px, Medium weight
- **Headers:** 24px, Medium weight
- **Body Text:** 14px, Regular weight
- **Status Text:** 12px, Regular weight

### **Text Alignment**
- **Patient names:** Center-aligned below profiles
- **Headers:** Center-aligned
- **Body content:** Left-aligned for readability

---

## **Animation & Interactions**

### **Voice Interaction Animations**
- **Pulse effect** on active microphone button
- **Subtle bounce** on button press
- **Smooth transitions** between states (300ms ease-out)
- **Loading spinners** for connection states

### **Profile Interactions**
- **Gentle hover effect** on patient cards
- **Scale animation** (1.05x) on selection
- **Smooth page transitions**

---

## **Accessibility Guidelines**

### **Voice-First Accessibility**
- **High contrast** status indicators
- **Large touch targets** for easy interaction
- **Clear audio feedback** for all actions
- **Screen reader support** for profile information

### **Visual Accessibility**
- **Minimum contrast ratio** 4.5:1 for text
- **Clear status indicators** beyond just color
- **Consistent interaction patterns**

---

## **Technical Implementation Notes**

### **shadcn/ui Component Usage**
- **Avatar component** for patient profile images
- **Card component** for patient profile containers
- **Button component** for all interactive elements
- **Badge component** for status indicators
- **Dialog component** for modals and overlays
- **Sheet component** for slide-out panels

### **Performance Considerations**
- **Lazy loading** for profile images
- **Optimized image sizes** (WebP format preferred)
- **Minimal DOM manipulation** for smooth animations
- **Efficient voice API integration**
- **shadcn/ui tree-shaking** for optimal bundle size

### **Voice Integration**
- **ElevenLabs v3 API** integration
- **Real-time audio streaming**
- **Voice state management**
- **Error handling for voice failures**

### **Mobile-Only Design**
- **Fixed mobile layout (max-width: 480px)**
- **No responsive breakpoints** - single mobile design
- **Touch-optimized interactions** for mobile devices only
- **Consistent mobile experience** - no desktop/tablet scaling