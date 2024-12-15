# Custom Web Components Repository

This repository contains reusable and customizable web components built using vanilla JavaScript. Below is a detailed explanation of the components available in this repository.

## Components

### 1. CountdownTimer Component
A customizable countdown timer that supports multiple date formats and allows dynamic label customization using slots. The timer updates every second and can display different time units (days, hours, minutes, seconds) based on user preferences.

#### **Usage**
```html
<countdown-timer
  date="2024-12-31"
  expired-message="Time's up!"
  hide-days>
  <span slot="days-label">Days</span>
  <span slot="hours-label">Hours</span>
  <span slot="minutes-label">Minutes</span>
  <span slot="seconds-label">Seconds</span>
</countdown-timer>
```

#### **Attributes**
- `date` (required): Specifies the target date. Supported formats include `YYYY-MM-DD`, `DD/MM/YYYY`, and `Month DD, YYYY`.
- `expired-message` (optional): Message displayed when the timer reaches zero.
- `hide-days`, `hide-hours`, `hide-minutes`, `hide-seconds` (optional): Hides the respective time unit from the display.

#### **Slots**
- `days-label`: Label for days.
- `hours-label`: Label for hours.
- `minutes-label`: Label for minutes.
- `seconds-label`: Label for seconds.

---

### 2. TabsComponent
A component to create accessible and customizable tabbed navigation. It allows for dynamic switching between content sections.

#### **Usage**
```html
<tabs-component>
  <div slot="tab-headers">
    <div>Tab 1</div>
    <div>Tab 2</div>
    <div>Tab 3</div>
  </div>
  <div slot="tab-contents">
    <div>Content for Tab 1</div>
    <div>Content for Tab 2</div>
    <div>Content for Tab 3</div>
  </div>
</tabs-component>
```

#### **Features**
- Dynamically switches tabs and updates the active tab content.
- Provides a default style for tabs and content sections.

#### **Styles**
The component includes encapsulated styles for tabs and their contents:
- Active tabs are highlighted.
- Active content is displayed while others are hidden.

---

## Getting Started

### **Installation**
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/your-repo-name.git
```

Include the JavaScript file in your project:
```html
<script src="path/to/your/custom-elements.js" defer></script>
```

### **Browser Support**
These components are built using the native Web Components API and are supported in modern browsers. For older browsers, consider using a polyfill.

---
Installation
To use the components, include the following script and stylesheet in your HTML file:

Add the Script
Include the JavaScript file to load the components:

html
Copy code
<script rel="stylesheet" src="https://cdn.jsdelivr.net/gh/Mohammedfouadd/web_component@3eb69f193234e5a5b4e846c7f7f5367061a986e4/master.js"></script>
Add the Stylesheet
Include the CSS file to style the components:

html
Copy code
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Mohammedfouadd/web_component@cfa33415e
## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Create a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.
