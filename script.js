document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('involvementForm');
    const contributionList = document.getElementById('contributionList');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = `${name} (${email}): ${message}`;

        // Add the new list item to the contribution list
        contributionList.appendChild(listItem);

        // Clear the form
        form.reset();
    });
});
