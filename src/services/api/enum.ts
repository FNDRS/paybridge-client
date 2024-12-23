export enum Endpoints {
  // auth
  GetAccessToken = "/api/auth/get-access-token",
  Login = "/api/auth/login",
  Logout = "/api/auth/logout",
  ResetPassword = "/api/auth/reset-password",
  ValidateToken = "/api/auth/validate-token",
  SignUp = "/api/auth/sign-up",
  GetUsers = "/api/auth/get-users",
  GetRoles = "/api/auth/get-roles",
  CreateUser = "/api/auth/create-user",

  Employees = "/api/employees",
  GetAllPayrolls = "/api/payrolls/get-all-payrolls",
  GetPayrollDetails = "/api/payrolls/get-payroll-details",
}
