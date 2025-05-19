// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const welcomeText = document.getElementById('welcome-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const addElementBtn = document.getElementById('add-element-btn');
    const removeElementBtn = document.getElementById('remove-element-btn');
    const itemsList = document.getElementById('items-list');
    const contentSection = document.getElementById('content-section');
    
    // Counter for new elements
    let newElementCount = 0;
    
    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        const texts = [
            "Hello, JavaScript!",
            "DOM Manipulation is fun!",
            "You clicked the button!",
            "Welcome back!",
            "Text changed successfully!"
        ];
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        welcomeText.textContent = randomText;
    });
    
    // 2. Modify CSS styles via JavaScript
    let isDarkMode = false;
    changeStyleBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            changeStyleBtn.textContent = 'Switch to Light Mode';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
            changeStyleBtn.textContent = 'Switch to Dark Mode';
        }
    });
    
    // 3. Add an element when a button is clicked
    addElementBtn.addEventListener('click', function() {
        newElementCount++;
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `This is dynamically added paragraph #${newElementCount}`;
        newParagraph.classList.add('dynamic-paragraph');
        contentSection.appendChild(newParagraph);
    });
    
    // 4. Remove an element when a button is clicked
    removeElementBtn.addEventListener('click', function() {
        const listItems = itemsList.getElementsByTagName('li');
        if (listItems.length > 0) {
            itemsList.removeChild(listItems[listItems.length - 1]);
        } else {
            alert('No more items to remove!');
        }
    });
});
