export function getCurrentDate() {
    // Array of month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get current date
    const currentDate = new Date();

    // Get day of the week (0-6)
    const dayOfWeek = currentDate.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[dayOfWeek];

    // Get month (0-11)
    const monthIndex = currentDate.getMonth();
    const month = months[monthIndex];

    // Get date (1-31)
    const date = currentDate.getDate();

    // Get full year (e.g., 2024)
    const year = currentDate.getFullYear();

    // Display the date
    return ` ${day}, ${month} ${date}, ${year}`;
}

// Call the function to display the date
// displayDate();
