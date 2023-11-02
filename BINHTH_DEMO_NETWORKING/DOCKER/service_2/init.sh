#!/bin/bash
# Giải mã tệp cấu hình tham số
age -d -i key /app/config/.env.crypt > /app/.env
ip6tables -A INPUT -m iprange --src-range 2024:db8:1::11-2024:db8:1::19 -j ACCEPT
ip6tables -I INPUT -p tcp --dport 3000 -j ACCEPT
ip6tables -P INPUT DROP
ip6tables -P FORWARD DROP
su bun
rm -rf /etc/apt
rm -rf /bin
bun /app/app.js
