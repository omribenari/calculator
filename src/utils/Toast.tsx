import React from 'react';
import { notifications } from '@mantine/notifications';
import { X } from 'tabler-icons-react';

export const showErrorToast = (message: string) => {
  notifications.show({
    message: message ? message : 'Error',
    icon: <X />,
    color: 'red',
  });
};
