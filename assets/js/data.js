export const mockMetrics = {
    cpuUsage: 42.5,
    ramUsage: { used: 12.4, total: 16 },
    networkTraffic: '1.2 Gbps',
    activeServers: 24,
    criticalAlerts: 0
};

export const mockServers = [
    { id: 'i-098234a', name: 'us-east-prod-01', region: 'us-east-1', status: 'online', cpu: '38%' },
    { id: 'i-011234b', name: 'eu-west-db-02', region: 'eu-west-1', status: 'online', cpu: '64%' },
    { id: 'i-055678c', name: 'ap-south-cache-01', region: 'ap-south-1', status: 'warning', cpu: '89%' },
    { id: 'i-077890d', name: 'us-west-stage-03', region: 'us-west-2', status: 'offline', cpu: '0%' }
];

export const mockLogs = [
    { timestamp: '2026-11-10 18:45:12', level: 'INFO', message: 'Instancia us-east-prod-01 sincronizada.' },
    { timestamp: '2026-11-10 18:42:00', level: 'WARN', message: 'Uso de RAM por encima del 80% en eu-west-db-02.' },
    { timestamp: '2026-11-10 18:30:15', level: 'ERROR', message: 'Fallo de conexión temporal en ap-south-cache-01.' }
];