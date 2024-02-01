#!/bin/bash
set -e
# 检测是否存在目录 ./backend/resource/public/xyhelper
if [ ! -d "./backend/resource/public/xyhelper" ]; then
    echo "Create directory ./backend/resource/public/xyhelper"
    mkdir -p "./backend/resource/public/xyhelper"

    cd frontend
    yarn build
    cd ..
fi

cd backend
gf build main.go -a amd64 -s linux -p ./temp
gf docker main.go -t drkuma/chatgpt-share-server:test
now=$(date +"%Y%m%d%H%M%S")
# 以当前时间为版本号
#docker push drkuma/chatgpt-share-server:test
