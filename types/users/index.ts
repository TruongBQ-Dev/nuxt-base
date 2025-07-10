export interface StateUsers {
  users: User[];
}

export interface User {
  id: number;
  email: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
