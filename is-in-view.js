const IsInView = {};

class Watcher {
  constructor() {
    this.elementsToWatch = [];
    this.windowHeight = 0;

    window.addEventListener('scroll', this.update.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    this.update();
  }

  update() {
    this.elementsToWatch.forEach((elementBinding) => {
      const { element, settings } = elementBinding;
      const rect = element.getBoundingClientRect();

      const elementHeight = rect.height;
      const elementTopPosition = rect.top;
      const elementBottomPosition = elementTopPosition + elementHeight;

      if (
        settings.showIfPartial
      ) {
        if (
          ((elementTopPosition >= 0) && (elementTopPosition <= this.windowHeight)) ||
          ((elementBottomPosition >= 0) && (elementBottomPosition <= this.windowHeight))
        ) {
          if (typeof settings.callback === 'function') settings.callback(element);
          element.classList.add('is-partially-in-view');
          element.classList.add('has-been-partially-in-view');
        } else {
          if (!element.classList.contains('is-partially-in-view')) return;
          element.classList.remove('is-partially-in-view');
        }
      }

      if (
        (elementBottomPosition <= this.windowHeight) &&
        (elementTopPosition <= this.windowHeight) &&
        (elementBottomPosition >= 0) &&
        (elementTopPosition >= 0)
      ) {
        if (element.classList.contains('is-in-view')) return;
        if (typeof settings.callback === 'function') settings.callback(element);
        element.classList.add('is-in-view');
        element.classList.add('has-been-fully-in-view');
      } else {
        if (!element.classList.contains('is-in-view')) return;
        element.classList.remove('is-in-view');
      }
    });
  }

  resize() {
    this.windowHeight = window.innerHeight;
    this.update();
  }

  addElement(element, settings = {}) {
    this.elementsToWatch.push({
      element,
      settings,
    });
    this.update();
  }
}

const watcher = new Watcher();

IsInView.install = (Vue) => {
  Vue.directive('is-in-view', {
    bind(el, binding) {
      const { value } = binding;
      watcher.addElement(el, value);
      watcher.update();
    },
  });
};

export default IsInView;
