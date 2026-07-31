(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var menu = document.getElementById('theme-menu');
  var STORAGE_KEY = 'theme';

  var THEMES = [
    'midnight',
    'graphite',
    'dusk',
    'paper',
    'parchment',
    'sage'
  ];

  var LABELS = {
    midnight: 'Midnight',
    graphite: 'Graphite',
    dusk: 'Dusk',
    paper: 'Paper',
    parchment: 'Parchment',
    sage: 'Sage'
  };

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);

    if (stored && THEMES.indexOf(stored) !== -1) {
      return stored;
    }

    // Midnight is intentionally the default.
    return 'midnight';
  }

  function setTheme(theme) {
    if (THEMES.indexOf(theme) === -1) {
      theme = 'midnight';
    }

    root.setAttribute('data-theme', theme);

    toggle.setAttribute(
      'aria-label',
      'Choose theme: ' + LABELS[theme]
    );

    toggle.setAttribute(
      'title',
      'Theme: ' + LABELS[theme]
    );

    document
      .querySelectorAll('.theme-option')
      .forEach(function (option) {
        var isActive =
          option.getAttribute('data-theme-choice') === theme;

        option.classList.toggle('is-active', isActive);
        option.setAttribute('aria-current', isActive ? 'true' : 'false');
      });

    localStorage.setItem(STORAGE_KEY, theme);
  }

  function openMenu() {
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (menu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /* Initial theme */
  setTheme(getPreferredTheme());

  /* Open/close picker */
  toggle.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  /* Select theme */
  document.querySelectorAll('.theme-option').forEach(function (option) {
    option.addEventListener('click', function () {
      var theme = option.getAttribute('data-theme-choice');

      setTheme(theme);
      closeMenu();
    });
  });

  /* Close when clicking outside */
  document.addEventListener('click', function (event) {
    if (
      menu.classList.contains('is-open') &&
      !menu.contains(event.target) &&
      event.target !== toggle
    ) {
      closeMenu();
    }
  });

  /* Close with Escape */
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });
})();
