document.addEventListener('DOMContentLoaded', () => {
    const browserInfoDiv = document.getElementById('browserInfo');
    const networkInfoDiv = document.getElementById('networkInfo');

    function getBrowserInfo() {
        const userAgent = navigator.userAgent;
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;
        const platform = navigator.platform;

        browserInfoDiv.innerHTML = `
            <h2>Browser Information</h2>
            <p><strong>User Agent:</strong> ${userAgent}</p>
            <p><strong>Browser Name:</strong> ${browserName}</p>
            <p><strong>Browser Version:</strong> ${browserVersion}</p>
            <p><strong>Platform:</strong> ${platform}</p>
        `;
    }

    function getNetworkInfo() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        let connectionInfo = "Connection information is not available";

        if (connection) {
            const type = connection.effectiveType;
            const downlink = connection.downlink;
            const rtt = connection.rtt;

            connectionInfo = `
                <h2>Network Information</h2>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Downlink:</strong> ${downlink} Mbps</p>
                <p><strong>Latency (RTT):</strong> ${rtt} ms</p>
            `;
        }

        networkInfoDiv.innerHTML = connectionInfo;
    }

    getBrowserInfo();
    getNetworkInfo();
});
