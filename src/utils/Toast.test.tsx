import React from 'react';
import { notifications } from '@mantine/notifications';
import { X } from 'tabler-icons-react';
import { showErrorToast } from './Toast';

// Create a mock implementation of notifications.show
jest.mock('@mantine/notifications', () => ({
  notifications: {
    show: jest.fn(),
  },
}));

describe('showErrorToast', () => {
  test('calls notifications.show with the correct arguments', () => {
    showErrorToast('Error message');

    expect(notifications.show).toHaveBeenCalledWith({
      message: 'Error message',
      icon: <X />,
      color: 'red',
    });
  });
});
