document.addEventListener('DOMContentLoaded', () => {
    const systemInfoDiv = document.getElementById('systemInfo');

    async function getSystemInfo() {
        const gpuInfo = navigator.gpu ? navigator.gpu.getPreferredCanvasFormat() : 'GPU Info not available';
        const memoryInfo = navigator.deviceMemory || 'Memory Info not available';
        const cpuInfo = navigator.hardwareConcurrency || 'CPU Info not available';

        systemInfoDiv.innerHTML = `
            <p><strong>GPU:</strong> ${gpuInfo}</p>
            <p><strong>Memory:</strong> ${memoryInfo} GB</p>
            <p><strong>CPU Cores:</strong> ${cpuInfo}</p>
        `;
    }

    getSystemInfo();
});
