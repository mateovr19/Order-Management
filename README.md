# 🍕 Order-Management

Aplicación web de administración de inventarios y transacciones en el contexto de un restaurante de comidas rápidas (pizza, hamburguesas, etc.). Permite gestionar movimientos, visualizar gráficos y administrar usuarios con diferentes roles.  
  
🔗 [Repositorio en GitHub](https://github.com/mateovr19/Order-Management.git)    
🌐 [Frontend desplegado en Vercel](https://foodsmanager-order-managements.vercel.app)  
  
<img width="1768" height="819" alt="image" src="https://github.com/user-attachments/assets/7750bcc8-97a5-4ba4-afdb-7da593c2d3c3" />  

  
---  
  
## 🛠️ Tecnologías utilizadas  
  
- **Next.js** + **React** – para el frontend y SSR  
- **Tailwind CSS** – para el diseño responsivo y moderno  
- **Prisma ORM** – para el manejo de la base de datos  
- **Supabase** – base de datos PostgreSQL en la nube  
- **TypeScript** – tipado estático  
- **Vercel** – despliegue del frontend  
  
---  
  
## 🚀 Funcionalidades principales  
  
- ✅ Autenticación de usuarios con control de acceso  
- 🏠 Página de landing con opción para iniciar sesión  
- 📊 Gestión de transacciones con:  
  - Visualización de movimientos por Maestro  
  - Creación de entradas/salidas  
  - Gráfica de saldo diario  
- 📦 Gestión de Maestros (productos/materiales)  
- 👥 Gestión de usuarios con roles (ADMIN y USER)  
- 🧭 Sidebar con navegación fija entre secciones  
  
---  
  
## 🧑‍💼 Roles  
  
| Rol   | Permisos                                                                 |
|--------|--------------------------------------------------------------------------|
| `ADMIN` | Acceso total: transacciones, maestros, usuarios                         |
| `USER`  | Acceso a transacciones y maestros. Sin permisos sobre usuarios o crear maestros |
  
---  
  
## 📂 Estructura del proyecto  
  
El backend y frontend están en la misma carpeta, como un monolito bajo Next.js:  
  
---  
  
## ⚙️ Instalación y configuración  
  
1. **Clona el repositorio**    
  
git clone https://github.com/mateovr19/Order-Management.git  

  
cd Order-Management
  
Instala dependencias  
npm install  
Crea una base de datos en Supabase  
  
Copia la URL y clave de acceso de tu proyecto Supabase.  
  
Crea el archivo .env  
Incluye al menos:  
  
env  
NEXTAUTH_URL=http://localhost:3000  
NEXTAUTH_SECRET=secret  
  
POSTGRES_URL="postgres://09bb38e5055a628149947d55923b436677989bc75f811e796bf49085accfb3b4:sk_Zq-QZbIDLSpqRVEm7cK2U@db.prisma.io:5432/?sslmode=require"  
PRISMA_DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?  api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDFKWkdNUVNBUjBFOVAzNUNBS1k5TjkxSFYiLCJ0ZW5hbnRfaWQiOiIwOWJiMzhlNTA1NWE2MjgxNDk5NDdkNTU5MjNiNDM2Njc3OTg5YmM3NWY4MTFlNzk2YmY0OTA4NWFjY2ZiM2I0IiwiaW50ZXJuYWxfc2VjcmV0IjoiZTM1ZmVjZDktOGRmNC00ODYyLWE1OWYtODcxZDg3ZDdlYWJjIn0.cRthm21LMjh145zTTMVo0B_Bb7gFHPlTH4611Lz9ME0"  
DATABASE_URL="postgres://09bb38e5055a628149947d55923b436677989bc75f811e796bf49085accfb3b4:sk_Zq-QZbIDLSpqRVEm7cK2U@db.prisma.io:5432/?sslmode=require"  
  
Genera e instala el esquema de base de datos con Prisma  
  
npx prisma migrate dev --name migracion-inicial  
Ejecuta la aplicación localmente  
  
  
npm run dev  
📊 Funcionalidades por página  
🔄 Transacciones  
Selección de Maestro para ver sus movimientos  
  
Tabla con ID, fecha, cantidad y responsable  
  
Formulario para crear movimiento (entrada o salida)  
  
Gráfica con saldo diario acumulado  
  
👨‍🏭 Maestros  
Tabla con ID, nombre, saldo, creador  
  
Creación de Maestro (solo ADMIN)  
  
👤 Usuarios  
Tabla con ID, email, rol, fecha de creación  
  
Edición de rol (solo ADMIN)  
  
  
✍️ Autores  
Fredy Hoyos  
Douglas Alarcón  
Mateo Velázquez  
  
📸 Capturas de pantalla  
<img width="1844" height="946" alt="image" src="https://github.com/user-attachments/assets/1c6763c8-1850-450d-b0de-33cae0af4d27" />

