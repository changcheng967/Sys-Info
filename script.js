document.addEventListener('DOMContentLoaded', (event) => {
    const infoDiv = document.getElementById('info');

    // User Agent
    const userAgent = navigator.userAgent;
    infoDiv.innerHTML += `<p><strong>User Agent:</strong> ${userAgent}</p>`;

    // Screen Information
    const screenInfo = `Width: ${screen.width}, Height: ${screen.height}, Color Depth: ${screen.colorDepth}`;
    infoDiv.innerHTML += `<p><strong>Screen Info:</strong> ${screenInfo}</p>`;

    // Time Zone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    infoDiv.innerHTML += `<p><strong>Time Zone:</strong> ${timeZone}</p>`;

    // Basic Network Information
    if (navigator.connection) {
        const networkInfo = `Effective Type: ${navigator.connection.effectiveType}, Downlink: ${navigator.connection.downlink}Mbps`;
        infoDiv.innerHTML += `<p><strong>Network Info:</strong> ${networkInfo}</p>`;
    } else {
        infoDiv.innerHTML += `<p><strong>Network Info:</strong> Not available</p>`;
    }

    // Language
    const language = navigator.language;
    infoDiv.innerHTML += `<p><strong>Language:</strong> ${language}</p>`;
});
