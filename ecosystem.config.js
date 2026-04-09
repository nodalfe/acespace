// ═══════════════════════════════════════════════
// ACESPACE — PM2 설정
// 실행: pm2 start ecosystem.config.js
// ═══════════════════════════════════════════════
module.exports = {
  apps: [
    {
      name: "acespace",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/ubuntu/acespace",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
