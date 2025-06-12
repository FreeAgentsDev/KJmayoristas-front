export const defaultSuperAdmin = {
  nombre: "Developer",
  apellido: "Account",
  cedula: "0000000000",
  telefono: "0000000000",
  direccion: "Developer Address",
  ciudad: "Developer City",
  email: "dev@example.com",
  password: "dev123456",
  role: "superadmin"
}

// Inicializar super admin si no existe
export const initializeSuperAdmin = () => {
  try {
    // Forzar la creación del super admin
    const users = []
    users.push(defaultSuperAdmin)
    localStorage.setItem('users', JSON.stringify(users))
    console.log('Super Admin creado/actualizado:')
    console.log('Email:', defaultSuperAdmin.email)
    console.log('Password:', defaultSuperAdmin.password)
    console.log('Role:', defaultSuperAdmin.role)
    return true
  } catch (error) {
    console.error('Error al inicializar super admin:', error)
    return false
  }
} 