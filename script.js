document.addEventListener('DOMContentLoaded', (event) => {
    const consentButton = document.getElementById('consentButton');
    const infoDiv = document.getElementById('info');

    if (!consentButton || !infoDiv) {
        console.error('One or more elements not found in the DOM');
        return;
    }

    consentButton.addEventListener('click', () => {
        console.log('Consent button clicked');
        consentButton.style.display = 'none';
        infoDiv.style.display = 'block';
        try {
            fetchSystemInfo();
        } catch (error) {
            console.error('Error fetching system info:', error);
            infoDiv.innerHTML = '<p>An error occurred while fetching system information.</p>';
        }
    });

    function fetchSystemInfo() {
        console.log('Fetching system information');

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

        // Device Memory
        const deviceMemory = navigator.deviceMemory || 'Not Available';
        infoDiv.innerHTML += `<p><strong>Device Memory:</strong> ${deviceMemory} GB</p>`;

        // Hardware Concurrency
        const hardwareConcurrency = navigator.hardwareConcurrency || 'Not Available';
        infoDiv.innerHTML += `<p><strong>Hardware Concurrency:</strong> ${hardwareConcurrency}</p>`;

        // Platform Information
        const platform = navigator.platform;
        infoDiv.innerHTML += `<p><strong>Platform:</strong> ${platform}</p>`;

        // Battery Status
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                infoDiv.innerHTML += `<p><strong>Battery Level:</strong> ${battery.level * 100}%</p>`;
                infoDiv.innerHTML += `<p><strong>Battery Charging:</strong> ${battery.charging ? 'Yes' : 'No'}</p>`;
            }).catch(err => {
                console.error('Battery info error:', err);
                infoDiv.innerHTML += `<p><strong>Battery Info:</strong> Not available or permission denied.</p>`;
            });
        } else {
            infoDiv.innerHTML += `<p><strong>Battery Info:</strong> Not supported by this browser</p>`;
        }

        // Touch Capabilities
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        infoDiv.innerHTML += `<p><strong>Touch Device:</strong> ${isTouchDevice ? 'Yes' : 'No'}</p>`;

        // WebGL Information
        let gl;
        try {
            gl = document.createElement('canvas').getContext('webgl');
        } catch (e) { 
            console.error('WebGL context creation failed:', e);
        }
        
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                infoDiv.innerHTML += `<p><strong>GPU Info:</strong> Vendor: ${vendor}, Renderer: ${renderer}</p>`;
            } else {
                infoDiv.innerHTML += `<p><strong>GPU Info:</strong> Not detailed</p>`;
            }
        } else {
            infoDiv.innerHTML += `<p><strong>GPU Info:</strong> WebGL not supported</p>`;
        }

        console.log('System information fetched');
    }
});
