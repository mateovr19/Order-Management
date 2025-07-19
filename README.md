# 🍕 FoodsManager-Order-Management

Aplicación web de administración de inventarios y transacciones en el contexto de un restaurante de comidas rápidas (pizza, hamburguesas, etc.). Permite gestionar movimientos, visualizar gráficos y administrar usuarios con diferentes roles.  
  
🔗 [Repositorio en GitHub](https://github.com/mateovr19/Order-Management.git)    
🌐 [Aplicación desplegada](https://foodsmanager-order-managements.vercel.app) 

## Usuarios de prueba

**Usuario rol ADMIN**
- correo: admin@mail.com
- contraseña: admin1234

**Usuario rol USER**
- correo: user@mail.com
- contraseña: user1234

  
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
| `USER`  | Acceso a transacciones y maestros. Sin permisos sobre usuarios, crear maestros y/o transacciones |
  
---  
  
## 📂 Estructura del proyecto  
  
El backend y frontend están en la misma carpeta, como un monolito bajo Next.js:  
  
---  
  
## ⚙️ Instalación y configuración  
  
1. **Clona el repositorio**    
  
- git clone https://github.com/mateovr19/Order-Management.git  
- cd Order-Management
  
2. **Instala dependencias**  
- npm install  
- Crea una base de datos en Prisma
  
- Crea el archivo .env  
Incluye al menos variables como:  

- NEXTAUTH_URL=http://localhost:3000  
- NEXTAUTH_SECRET= (cualquier codigo hash ó sha256)
- POSTGRES_URL=""  (Variables obtenidas en la herramienta de despliegue utilizada)
- PRISMA_DATABASE_URL=""  (Variables obtenidas en la herramienta de despliegue utilizada)
  
3. **Genera e instala el esquema de base de datos con Prisma** 
  
- npx prisma migrate dev --name migracion-inicial  
- Ejecuta la aplicación localmente -> npm run dev
  
## 📊 Funcionalidades por página

🔄Transacciones

- Selección de Maestro para ver sus movimientos    
- Tabla con ID, fecha, cantidad y responsable  
- Formulario para crear movimiento (entrada o salida)  
- Gráfica con saldo diario acumulado  
  
👨‍🏭 Maestros

- Tabla con ID, nombre, saldo, creador  
- Creación de Maestro, actualización y eliminación (solo ADMIN)  
  
👤 Usuarios

- Tabla con ID, email, rol, fecha de creación 
- Edición de rol y creación de usuarios (solo ADMIN)  
  
## ✍️ Autores:

- Mateo Velásquez
- Fredy Hoyos  
- Douglas Alarcón   
