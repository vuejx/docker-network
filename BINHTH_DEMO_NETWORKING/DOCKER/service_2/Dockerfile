FROM oven/bun:1
USER root
WORKDIR /app
ADD . .
RUN apt update && apt install -y iptables age iputils-ping telnet
ENV NODE_ENV=production
ENV TZ="Asia/Ho_Chi_Minh"

RUN dpkg --purge apt
RUN chmod +x /app/init.sh
ENTRYPOINT ["sh", "/app/init.sh"]
