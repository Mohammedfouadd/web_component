class TabsComponent extends HTMLElement {
  constructor() {
    super();

    // Create container for the component (no Shadow DOM)
    const container = document.createElement("div");

    // Template HTML with Styles
    container.innerHTML = `
        <div part="main-container">
          <!-- Tab Headers -->
          <div class="tab-header" part="tab-header">
            <slot name="tab-headers"></slot>
          </div>
  
          <!-- Tab Contents -->
          <div class="tab-contents">
            <slot name="tab-contents"></slot>
          </div>
        </div>
      `;

    this.attachShadow({mode: "open"}).appendChild(container);

    this.tabs = []; // To hold references to tab headers
    this.contents = []; // To hold references to tab contents
  }

  connectedCallback() {
    // Fetch the headers and content when the component is connected to the DOM
    this.tabs = this.querySelectorAll('[slot="tab-headers"]');
    this.contents = this.querySelectorAll('[slot="tab-contents"]');

    if (this.tabs.length === 0 || this.contents.length === 0) {
      console.warn(
        "ProductFeaturesDetail: Ensure both headers and content slots are provided."
      );
      return;
    }

    // Initialize tabs
    this.tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => this.switchTab(index));
    });

    // Initialize the first tab as active
    this.switchTab(0);
  }

  resetTabs() {
    // Reset Styles for All Tabs and Contents
    this.tabs.forEach(tab => tab.classList.remove("styles"));
    this.contents.forEach(content => content.classList.remove("active"));
  }

  switchTab(index) {
    this.resetTabs();

    // Activate the clicked tab and its corresponding content
    this.tabs[index].classList.add("styles");
    this.contents[index].classList.add("active");
  }
}

// Register the Custom Element
customElements.define("tabs-component", TabsComponent);



class CountdownTimer extends HTMLElement {
  constructor() {
      super();
      this.timer = null;
  }

  connectedCallback() {
      const inputDate = this.getAttribute('date');
      const expiredMessage = this.getAttribute('expired-message') || "Time's up!";
      const hideDays = this.hasAttribute('hide-days');
      const hideHours = this.hasAttribute('hide-hours');
      const hideMinutes = this.hasAttribute('hide-minutes');
      const hideSeconds = this.hasAttribute('hide-seconds');

      const dateParts = this.parseDate(inputDate);

      if (dateParts) {
          const { year, month, day } = dateParts;
          const countdownDate = new Date(year, month - 1, day).getTime();
          this.renderTemplate({ hideDays, hideHours, hideMinutes, hideSeconds });
          this.startCountdown(countdownDate, expiredMessage, { hideDays, hideHours, hideMinutes, hideSeconds });
      } else {
          this.innerHTML = `<p style="color: red;">Invalid date. Please provide a valid date (e.g., YYYY-MM-DD, DD/MM/YYYY).</p>`;
      }
  }

  disconnectedCallback() {
      clearInterval(this.timer); // Cleanup interval when the component is removed
  }

  parseDate(input) {
      const regex = /(?<year>\d{4})[^\d]*(?<month>\d{1,2})[^\d]*(?<day>\d{1,2})|(?<day2>\d{1,2})[^\d]*(?<month2>\d{1,2})[^\d]*(?<year2>\d{4})|(?<month3>[A-Za-z]+)[^\d]*(?<day3>\d{1,2})[^\d]*(?<year3>\d{4})/;

      const match = input.match(regex);

      if (match) {
          let year, month, day;

          if (match.groups.year && match.groups.month && match.groups.day) {
              year = parseInt(match.groups.year);
              month = parseInt(match.groups.month);
              day = parseInt(match.groups.day);
          } else if (match.groups.day2 && match.groups.month2 && match.groups.year2) {
              year = parseInt(match.groups.year2);
              month = parseInt(match.groups.month2);
              day = parseInt(match.groups.day2);
          } else if (match.groups.month3 && match.groups.day3 && match.groups.year3) {
              year = parseInt(match.groups.year3);
              day = parseInt(match.groups.day3);
              month = this.getMonthIndex(match.groups.month3);
          }

          if (this.isValidDate(year, month, day)) {
              return { year, month, day };
          }
      }
      return null;
  }

  getMonthIndex(monthName) {
      const monthNames = [
          "january", "february", "march", "april", "may", "june", "july",
          "august", "september", "october", "november", "december"
      ];
      return monthNames.indexOf(monthName.toLowerCase()) + 1;
  }

  isValidDate(year, month, day) {
      const date = new Date(year, month - 1, day);
      return (
          date.getFullYear() === parseInt(year) &&
          date.getMonth() === parseInt(month) - 1 &&
          date.getDate() === parseInt(day)
      );
  }

  renderTemplate({ hideDays, hideHours, hideMinutes, hideSeconds }) {
      this.innerHTML = `
          <div class="countdown-timer" style="display: flex; gap: 1rem; text-align: center;">
              ${!hideDays ? `
                  <div class="time-unit days">
                      <span class="js-days value">0</span>
                      <div class="days-label"><slot name="days-label">يوم</slot></div>
                  </div>
              ` : ''}
              ${!hideHours ? `
                  <div class="time-unit hours">
                      <span class="js-hours value">0</span>
                      <div class="hours-label"><slot name="hours-label">ساعة</slot></div>
                  </div>
              ` : ''}
              ${!hideMinutes ? `
                  <div class="time-unit minutes">
                      <span class="js-minutes value">0</span>
                      <div class="minutes-label"><slot name="minutes-label">دقيقة</slot></div>
                  </div>
              ` : ''}
              ${!hideSeconds ? `
                  <div class="time-unit seconds">
                      <span class="js-seconds value">0</span>
                      <div class="seconds-label"><slot name="seconds-label">ثانية</slot></div>
                  </div>
              ` : ''}
          </div>
      `;
  }

  startCountdown(targetDate, expiredMessage, { hideDays, hideHours, hideMinutes, hideSeconds }) {
      const daysElement = this.querySelector('.js-days');
      const hoursElement = this.querySelector('.js-hours');
      const minutesElement = this.querySelector('.js-minutes');
      const secondsElement = this.querySelector('.js-seconds');

      const updateTimer = () => {
          const now = new Date().getTime();
          const distance = targetDate - now;

          if (distance < 0) {
              this.innerHTML = `<div>${expiredMessage}</div>`;
              clearInterval(this.timer);
              return;
          }

          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Distribute hidden time units
          if (hideDays) {
              hours += days * 24;
              days = 0;
          }
          if (hideHours) {
              minutes += hours * 60;
              hours = 0;
          }
          if (hideMinutes) {
              seconds += minutes * 60;
              minutes = 0;
          }

          // Update visible elements
          if (daysElement) daysElement.textContent = days;
          if (hoursElement) hoursElement.textContent = hours;
          if (minutesElement) minutesElement.textContent = minutes;
          if (secondsElement) secondsElement.textContent = seconds;
      };

      updateTimer();
      this.timer = setInterval(updateTimer, 1000);
  }
}

// Define the custom element
customElements.define('countdown-timer', CountdownTimer);
