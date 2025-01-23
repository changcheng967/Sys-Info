document.addEventListener('DOMContentLoaded', () => {
    const userAgentElem = document.getElementById('userAgent');
    const browserNameElem = document.getElementById('browserName');
    const browserVersionElem = document.getElementById('browserVersion');
    const platformElem = document.getElementById('platform');
    const connectionTypeElem = document.getElementById('connectionType');
    const downlinkElem = document.getElementById('downlink');
    const rttElem = document.getElementById('rtt');

    function getBrowserInfo() {
        const userAgent = navigator.userAgent;
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;
        const platform = navigator.platform;

        userAgentElem.textContent = `User Agent: ${userAgent}`;
        browserNameElem.textContent = `Browser Name: ${browserName}`;
        browserVersionElem.textContent = `Browser Version: ${browserVersion}`;
        platformElem.textContent = `Platform: ${platform}`;
    }

    function getNetworkInfo() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            const type = connection.effectiveType;
            const downlink = connection.downlink;
            const rtt = connection.rtt;

            connectionTypeElem.textContent = `Connection Type: ${type}`;
            downlinkElem.textContent = `Downlink: ${downlink} Mbps`;
            rttElem.textContent = `Latency (RTT): ${rtt} ms`;
        } else {
            connectionTypeElem.textContent = "Connection information is not available";
            downlinkElem.textContent = "";
            rttElem.textContent = "";
        }
    }

    getBrowserInfo();
    getNetworkInfo();
});
