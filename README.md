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
       <!-- Tab headers -->
      <div slot="tab-headers" class="tab nav-button">tab1</div>
      <div slot="tab-headers" class="tab nav-button">tab2</div>
      <div slot="tab-headers" class="tab nav-button">tab3</div>

      <!-- Tab Contents -->

      <div slot="tab-contents" class="tab-content">Content1</div>
      <div slot="tab-contents" class="tab-content">Content2</div>
      <div slot="tab-contents" class="tab-content">Content3</div>
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


## Installation

To use the components, include the following script and stylesheet in your HTML file:

### Add the Script
Include the JavaScript file to load the components:

```html
<script src="https://cdn.jsdelivr.net/gh/Mohammedfouadd/web_component@d856bb50109c28cc888a1ec6e6dbb497c3001771/master.js"></script>
```

### Add the Stylesheet
Include the CSS file to style the components:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Mohammedfouadd/web_component@d856bb50109c28cc888a1ec6e6dbb497c3001771/master.css">
```


## Notes
- Ensure that you are using the correct version of the script and stylesheet by updating the commit hash in the URLs if needed.
- The components are built to work in modern browsers that support Web Components.

## Contribution
Feel free to fork this repository and submit pull requests to improve or add new features.




### **Browser Support**
These components are built using the native Web Components API and are supported in modern browsers. For older browsers, consider using a polyfill.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with descriptive messages.
4. Create a pull request.
npm web_component-1.0.0.tgz 
---

