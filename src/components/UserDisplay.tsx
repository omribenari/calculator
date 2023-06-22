import React from 'react';
import { Button, Text } from '@mantine/core';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

type UserDisplayProps = {
  onLogout: () => void;
};
const UserDisplay = ({ onLogout }: UserDisplayProps) => {
  const { user } = useStore();
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <>
          <Button variant="default" onClick={onLogout}>
            Log out
          </Button>
          <Text>Hello {user.name}</Text>
        </>
      ) : (
        <Button variant="filled" onClick={() => navigate('/login')}>
          Log in
        </Button>
      )}
    </>
  );
};

export default UserDisplay;
