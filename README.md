# Supplier Management System

A web-based supplier management system built with React and Ant Design to manage company supplier data efficiently.

## 🚀 Key Features

- **Supplier Dashboard**: Overview display with supplier statistics
- **Supplier Management**: Complete CRUD operations for supplier data
- **Search & Filter**: Search suppliers by name and filter by status
- **Data Export**: Export supplier data to various formats
- **Modal Forms**: Advanced modal-based forms for adding new suppliers
- **Tabbed Interface**: Organized supplier information in tabs (Address, Contacts, Groups, Others)
- **File Upload**: Logo upload functionality for suppliers
- **Responsive Design**: Responsive layout for various screen sizes

## 🛠️ Technologies Used

- **React**: JavaScript library for building user interfaces
- **Ant Design**: Enterprise-class UI design language and components
- **React Router**: Declarative routing for React applications
- **CSS**: Custom styling for components
- **File Upload**: Built-in file handling for logo uploads

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Sidebar navigation component
│   └── Sidebar.css          # Sidebar styling
├── features/
│   └── supplier/
│       ├── components/
│       │   ├── StatCard.jsx        # Statistics card component
│       │   ├── SupplierForm.jsx    # Basic supplier form
│       │   ├── SupplierList.jsx    # Supplier list page
│       │   ├── SupplierPage.jsx    # Add supplier page
│       │   ├── SupplierStats.jsx   # Supplier statistics component
│       │   ├── SupplierTable.jsx   # Supplier data table
│       │   ├── SupplierToolbar.jsx # Search & filter toolbar
│       │   └── AddNewSupplier.jsx  # Advanced modal form for new suppliers
│       ├── data/
│       │   └── supplier.js         # Mock supplier data
│       └── styles/
│           └── SupplierList.css    # Supplier component styles
└── App.jsx                  # Main application component
```

## 🔧 Installation

1. Clone this repository
```bash
git clone <repository-url>
cd supplier-management-system
```

2. Install dependencies
```bash
npm install
```

3. Run the application
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📋 Dependencies

```json
{
  "antd": "^5.x.x",
  "react": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "@ant-design/icons": "^5.x.x"
}
```

## 🎯 Main Components

### 1. Sidebar (`components/Sidebar.jsx`)
- Main application navigation
- Supplier management menu with submenus
- User profile section at the bottom
- Responsive design for mobile devices

### 2. SupplierList (`features/supplier/components/SupplierList.jsx`)
- Main supplier list page
- Displays supplier statistics
- Toolbar for search and filtering
- Supplier data table with pagination

### 3. SupplierForm (`features/supplier/components/SupplierForm.jsx`)
- Basic form for adding new suppliers
- Input validation for required fields
- Submit handler for saving data

### 4. AddNewSupplier (`features/supplier/components/AddNewSupplier.jsx`)
- **NEW**: Advanced modal form for comprehensive supplier creation
- **Features**:
  - Logo upload functionality
  - Tabbed interface for organized data entry
  - Address management with main address selection
  - Contact management with multiple contact persons
  - Group management with active/inactive status
  - Additional notes section
- **Tabs**:
  - **Address**: Manage supplier addresses (Head Office, Branch Office)
  - **Contacts**: Manage contact persons with job positions and contact details
  - **Groups**: Manage supplier groups (Industry, Telkom Group, etc.)
  - **Others**: Additional notes and information

### 5. SupplierStats (`features/supplier/components/SupplierStats.jsx`)
- Displays supplier statistics in card format
- Trend indicators for up/down changes
- Responsive grid layout

### 6. SupplierTable (`features/supplier/components/SupplierTable.jsx`)
- Supplier data table with selection features
- Columns: ID, Name, Address, Contact, Status
- Pagination and row selection functionality

## 📊 Data Structures

### Supplier Object
```javascript
{
  id: Number,
  name: String,        // Company name
  code: String,        // Supplier code
  location: String,    // Supplier location
  contactPerson: String, // Contact person name
  status: String       // Status: 'Active', 'In Progress', 'Blocked'
}
```

### Address Object
```javascript
{
  key: String,
  name: String,        // Address name (e.g., 'Head Office', 'Branch Office')
  address: String,     // Physical address
  isMain: Boolean      // Whether this is the main address
}
```

### Contact Object
```javascript
{
  key: String,
  name: String,        // Contact person name
  jobPosition: String, // Job position/title
  email: String,       // Email address
  phone: String,       // Phone number
  mobile: String,      // Mobile number
  isMain: Boolean      // Whether this is the main contact
}
```

### Group Object
```javascript
{
  key: String,
  groupName: String,   // Group category name
  value: String,       // Group value
  isActive: Boolean    // Whether the group is active
}
```

## 🎨 Styling

### CSS Classes
- `.sidebar-container`: Main sidebar container
- `.supplier-list-container`: Supplier list page container
- `.stat-card`: Statistics card styling
- `.supplier-table`: Supplier table styling
- `.toolbar`: Search toolbar styling
- `.ant-modal`: Modal styling for AddNewSupplier component

### Color Palette
- Primary: `#1890ff` (Ant Design blue)
- Success: `#52c41a` (Green)
- Error: `#f5222d` (Red)
- Border: `#f0f0f0` (Light gray)
- Background: `#ffffff` (White)

## 🔄 Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/` | SupplierList | Main supplier list page |
| `/add-supplier` | AddNewSupplier | Advanced modal form for new supplier |
| `/supplier-dashboard` | SupplierList | Supplier dashboard |
| `/review-approvals` | SupplierList | Review & approvals |
| `/configurations` | SupplierList | System configurations |


## 🚀 Upcoming Features

- [ ] Complete CRUD operations for all supplier data
- [ ] Backend API integration
- [ ] Advanced filtering and sorting capabilities
- [ ] Data export to Excel/PDF formats
- [ ] Bulk supplier data upload
- [ ] User management and permissions
- [ ] Enhanced analytics dashboard
- [ ] Address validation and geocoding
- [ ] Contact management with communication history
- [ ] Group management with hierarchy support

## 👥 Development Team

- **UI/UX**: Interface design using Ant Design components
- **Frontend**: React with component-based architecture
- **Styling**: Custom CSS and Ant Design theming
- **Data Management**: State management with React hooks
---

**ALISA Supplier Management System** - Managing suppliers with ease and efficiency.