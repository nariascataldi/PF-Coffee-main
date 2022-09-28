import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function useAuthContext() {
  return useContext(AuthContext);
}