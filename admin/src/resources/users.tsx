// admin/src/resources/users.tsx
import { Datagrid, List, TextField, EmailField, BooleanField, EditButton } from 'react-admin';

export const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <BooleanField source="isVerified" />
      <BooleanField source="isPremium" />
      <EditButton />
    </Datagrid>
  </List>
);