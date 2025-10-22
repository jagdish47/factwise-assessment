import { EmployeeGrid } from "./components/organisms/employee-grid"

export default function App() {
  return (
    <main className="mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-balance text-2xl font-semibold">FactWise Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Explore and manage employee data with powerful client-side filtering, sorting, and CSV export.
        </p>
      </header>
      <EmployeeGrid />
    </main>
  )
}