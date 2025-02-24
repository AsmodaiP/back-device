#  Установка и запуск

1. Склонируйте репозиторий
```bash
git clone https://github.com/AsmodaiP/back-device 
```

2. Установка nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

2. Установите nodejs, npm и yarn
```bash
sudo apt install npm
nvm install 18.10.0
npm install --global yarn
```
3. Установите зависимости
```bash
yarn install
```

4. Запустите docker-compose файл
```bash
docker-compose --env-file .env up -d
```