export interface Employee {
    id: number
    firstName: string
    lastName: string
    email: string
    department: string
    position: string
    salary: number
    hireDate: string // ISO date string
    age: number
    location: string
    performanceRating: number
    projectsCompleted: number
    isActive: boolean
    skills: string[]
    manager: string | null
  }
  
  export interface EmployeesResponse {
    employees: Employee[]
  }
  