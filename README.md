# FactWise Employee Dashboard

A modern, interactive employee management dashboard built with React, TypeScript, and AG Grid. This application provides a comprehensive view of employee data with advanced filtering, sorting, and styling capabilities.

## 🚀 Features

- **Interactive Data Grid**: Powered by AG Grid Community with advanced features
- **Employee Data Management**: View and manage employee information including:
  - Personal details (ID, Name, Email)
  - Professional information (Department, Position, Salary)
  - Performance metrics (Rating, Projects Completed)
  - Status tracking (Active/Inactive employees)
- **Advanced Filtering**: Built-in column filters and floating filters
- **Pagination**: Configurable page sizes (10, 20 items per page)
- **Custom Styling**:
  - Row highlighting based on salary and status
  - Color-coded status indicators
  - Responsive design with Tailwind CSS
- **Data Export**: CSV export functionality
- **TypeScript Support**: Full type safety and IntelliSense

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.14
- **Data Grid**: AG Grid Community
- **Build Tool**: Vite 7.1.7
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   └── status-badge.tsx
│   ├── molecules/
│   │   └── grid-toolbar.tsx
│   └── organisms/
│       └── employee-grid.tsx
├── data/
│   └── employees.json
├── types/
│   └── employee.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd factWise-assessment
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`



## 🎨 Styling Features

### Row Styling

- **High Salary Rows**: Blue highlighting for employees earning > ₹100,000
- **Inactive Rows**: Red highlighting for inactive employees
- **Normal Rows**: Clean white background for regular employees

### Column Styling

- **Status Column**: Green highlighting for active employees
- **Salary Column**: Formatted with Indian Rupee symbol and proper number formatting
- **Custom Headers**: Styled headers with appropriate colors

## 🔧 Configuration

### AG Grid Configuration

- **Modules**: All Community modules registered for full feature access
- **Pagination**: Enabled with configurable page sizes
- **Filtering**: Column filters and floating filters enabled
- **Row Height**: Customized to 48px for better readability

### TypeScript Configuration

- **Path Aliases**: `@/*` maps to `src/*`
- **JSON Imports**: Enabled for direct JSON file imports
- **Strict Mode**: Enabled for better type safety

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### EmployeeGrid

The main component that renders the data grid with:

- Employee data display
- Column definitions
- Row styling logic
- Grid configuration

### GridToolbar

Provides additional functionality:

- Quick search/filter
- CSV export
- Grid reset options

### StatusBadge

Displays employee status with appropriate styling.

## 🔍 Features in Detail

### Data Grid Features

- **Sorting**: Click column headers to sort data
- **Filtering**: Use column filters to narrow down results
- **Pagination**: Navigate through large datasets
- **Row Selection**: Multi-row selection capability
- **Responsive Design**: Adapts to different screen sizes

### Custom Styling

- **Dynamic Row Classes**: Applied based on data values
- **Cell Formatting**: Custom formatters for salary and other fields
- **Theme Integration**: Uses AG Grid Quartz theme with custom modifications

## 🚀 Deployment

To build for production:

```bash
npm run build
```






