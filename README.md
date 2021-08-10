### Platon starter kit app (boilerplate)

##### Instructions for setting up the frontend of a new project

- Obtain deploy token from [`frontend/platon-core`](https://gitlab.com/realsoft/platon/frontend/platon-core) 
   repository to download with `read_package_registry` permission. You can use one deploy token for all projects 
   within one server. 

- Clone [`frontend/starter-kit`](https://gitlab.com/realsoft/platon/frontend/starter-kit) repository to target directory

- Copy .npmrc.template to .npmrc `cp .npmrc.template .npmrc`

- Put obtained deploy token into `.npmrc`, `.npmrc` must contain:
```
@realsoft:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=<insert token here from gitlab to access npm package>
```

- Copy `.env.template` file to `.env` `cp .env.template .env` and fill project settings in `.env` file

- Run `npm install` to install project dependencies

- Run `npm run build` to build project, this command creates `dist` directory with `index.html` which you can configure from nginx.  


##### O'rnatish jarayoni

`cp .npmrc.template .npmrc`

Gitlabdan platon-core npm packageni olish uchun deploy token (read_registry permission bilan) kerak bo'ladi 
```
@realsoft:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=<insert token here from gitlab to access npm package>
```


`cp .env.template .env`

Env parametrlarini ko'rsatib chiqamiz.

Dependencieslarni o'rnatish uchun `npm install`

Proyektni build qilish uchun `npm run build`, bizga `dist` papka hosil qilib beradi shu papkani nginx (yoki biror boshqa web server) bilan sozlash kerak.
