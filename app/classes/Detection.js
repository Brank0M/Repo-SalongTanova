class Detection {
  constructor() {
    this.isPhoneChecked = false;
    this.isTabletChecked = false;
    this.isDesktopChecked = false;
  }

  isPhone() {
    if (!this.isPhoneChecked) {
      this.isPhoneChecked =
        document.documentElement.classList.contains('phone');
    }
    return this.isPhoneChecked;
  }

  isTablet() {
    if (!this.isTabletChecked) {
      this.isTabletChecked =
        document.documentElement.classList.contains('tablet');
    }
    return this.isTabletChecked;
  }

  isDesktop() {
    if (!this.isDesktopChecked) {
      this.isDesktopChecked =
        document.documentElement.classList.contains('desktop');
    }
    return this.isDesktopChecked;
  }
}

const DetectionManager = new Detection();
export default DetectionManager;
