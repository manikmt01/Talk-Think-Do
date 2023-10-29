function setElementHeightToScreen() {
  // Get the screen height
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  // Select the element you want to resize
  const myElement = document.getElementById('commonNav'); // or document.querySelector('.your-class-name');

  // Set the height of the element to match the screen height
  myElement.style.height = screenHeight - 245 + 'px';
}

// Call the function to set the element's height initially and update it when the window is resized
setElementHeightToScreen();
window.addEventListener('resize', setElementHeightToScreen);

// ----------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------

// for menu dropdown

function initializeDropdown(buttonId, menuId) {
  const menuButton = document.getElementById(buttonId);
  const dropdownMenu = document.getElementById(menuId);

  menuButton.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'block') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', event => {
    if (
      !menuButton.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = 'none';
    }
  });
}

// Initialize the first dropdown
initializeDropdown('menu-button', 'menu-1');

// Initialize the second dropdown
// initializeDropdown('menu-button-2', 'menu-2');
// ----------------------------------------------------------------------
