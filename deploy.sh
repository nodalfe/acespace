#!/bin/bash
# ═══════════════════════════════════════════════
# ACESPACE — 배포 자동화 스크립트
# 실행: chmod +x deploy.sh && ./deploy.sh
# ═══════════════════════════════════════════════
set -e

APP_DIR="/home/ubuntu/acespace"
APP_NAME="acespace"

echo "========================================"
echo " ACESPACE 배포 시작"
echo " $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================"

cd "$APP_DIR"

# ── 1. 최신 코드 가져오기 ──
echo "[1/4] git pull..."
git pull origin main

# ── 2. 의존성 설치 ──
echo "[2/4] npm install..."
npm ci --production=false

# ── 3. 프로덕션 빌드 ──
echo "[3/4] npm run build..."
npm run build

# ── 4. PM2 재시작 ──
echo "[4/4] PM2 재시작..."
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
  echo "  → $APP_NAME 리로드 완료"
else
  pm2 start ecosystem.config.js
  echo "  → $APP_NAME 최초 시작 완료"
fi

pm2 save

echo ""
echo "========================================"
echo " 배포 완료! $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================"
echo ""
pm2 status
