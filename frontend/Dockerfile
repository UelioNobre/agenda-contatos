FROM nginx:alpine

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o código da aplicação
COPY . /usr/share/nginx/html

# Exponha a porta que a aplicação irá rodar
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]