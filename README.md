# trendik-test

Para iniciar la aplicacion, se necesita copiar el repositorio

despues de ello, se accede a la terminal, para descargar los modulos de node con el comando, 
```
npm install react-scripts --save
```

al descargar, para iniciar se debe iniciar primero la api, para cargar la data json, para ello debe cambiar el directorio del terminal al server
y ejecutar el comando para iniciar la api.
```
cd server
json-server --watch db.json
```

> si no inicia la api o genera error, se debe instalar con la siguiente linea
```
npm install -g json-server
```

despues de iniciar la api, en el puerto 3000, se inicia la aplicacion, en la carpeta raiz
```
npm start
```
con eso ya debe iniciar la aplicación

## Log de trabajo
+ creacion del proyecto = 7 min
+ creacion de la api y el archivo json para la base de datos = 10 min
+ instalacion de modulos necesarios para el datagrid = 3 min
+ creacion de la tabla y buscador = 20 min
+ importacion de la imformacion a la tabla = 10 min
+ subida a github = 5 min


## Futuro del proyecto
+ la parte visual del proyecto se debe mejorar, ademas de poder listar los tags de cada influencer
+ se puede agregar mas informacion de los influencers, para generar una mejor busqueda
+ agregar links que dirigan a la persona a la pagina del influencer
