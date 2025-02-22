export const formatTimestamp = (timestamp) => {
    // Extract parts from the timestamp
    const year = timestamp.slice(0, 4);
    const month = timestamp.slice(4, 6) - 1; // Months are 0-indexed in JS
    const day = timestamp.slice(6, 8);
    const hours = timestamp.slice(8, 10);
    const minutes = timestamp.slice(10, 12);
    const seconds = timestamp.slice(12, 14);

    // Create a Date object
    const date = new Date(year, month, day, hours, minutes, seconds);

    // Format options
    return date.toLocaleString('en-US', {
        weekday: 'long', // e.g., Sunday
        year: 'numeric',
        month: 'long', // e.g., January
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true, // Change to false for 24-hour format
    });
}