#!/bin/bash
# ═══════════════════════════════════════════════
# ACESPACE — EC2 Ubuntu 22.04 서버 초기 세팅
# 실행: chmod +x setup.sh && sudo ./setup.sh
# ═══════════════════════════════════════════════
set -e

echo "========================================"
echo " ACESPACE 서버 환경 세팅 시작"
echo " Ubuntu 22.04 / Node.js 18 / PM2 / Nginx"
echo "========================================"

# ── 1. 시스템 업데이트 ──
echo "[1/5] 시스템 업데이트..."
apt-get update -y
apt-get upgrade -y

# ── 2. Node.js 18 설치 (NodeSource) ──
echo "[2/5] Node.js 18 설치..."
if ! command -v node &> /dev/null; then
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
  apt-get install -y nodejs
else
  echo "  → Node.js 이미 설치됨: $(node -v)"
fi
echo "  Node: $(node -v)"
echo "  npm:  $(npm -v)"

# ── 3. PM2 전역 설치 ──
echo "[3/5] PM2 설치..."
if ! command -v pm2 &> /dev/null; then
  npm install -g pm2
else
  echo "  → PM2 이미 설치됨: $(pm2 -v)"
fi

# PM2 부팅 시 자동 시작 등록
pm2 startup systemd -u ubuntu --hp /home/ubuntu
echo "  PM2 startup 등록 완료"

# ── 4. Nginx 설치 ──
echo "[4/5] Nginx 설치..."
if ! command -v nginx &> /dev/null; then
  apt-get install -y nginx
else
  echo "  → Nginx 이미 설치됨: $(nginx -v 2>&1)"
fi

# 방화벽 설정
ufw allow 'Nginx Full'
ufw allow OpenSSH
echo "y" | ufw enable 2>/dev/null || true
echo "  방화벽 설정 완료 (80, 443, 22)"

# ── 5. Certbot (Let's Encrypt SSL) 설치 ──
echo "[5/5] Certbot 설치..."
if ! command -v certbot &> /dev/null; then
  apt-get install -y certbot python3-certbot-nginx
else
  echo "  → Certbot 이미 설치됨: $(certbot --version 2>&1)"
fi

# ── 완료 ──
echo ""
echo "========================================"
echo " 서버 환경 세팅 완료!"
echo "========================================"
echo ""
echo " 다음 단계:"
echo "  1. Nginx 설정 복사:"
echo "     sudo cp nginx.conf /etc/nginx/sites-available/acespace.co.kr"
echo "     sudo ln -s /etc/nginx/sites-available/acespace.co.kr /etc/nginx/sites-enabled/"
echo "     sudo rm -f /etc/nginx/sites-enabled/default"
echo "     sudo nginx -t && sudo systemctl reload nginx"
echo ""
echo "  2. SSL 인증서 발급:"
echo "     sudo certbot --nginx -d acespace.co.kr -d www.acespace.co.kr"
echo ""
echo "  3. 프로젝트 배포:"
echo "     cd /home/ubuntu/acespace"
echo "     chmod +x deploy.sh && ./deploy.sh"
echo ""
