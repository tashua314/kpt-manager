import { writable } from 'svelte/store';

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error';
}

export const notifications = writable<Notification[]>([]);

export function addNotification(message: string, type: 'success' | 'error' = 'success') {
  const id = Math.random().toString(36).slice(2);
  const notification: Notification = { id, message, type };
  
  notifications.update(n => [...n, notification]);
  
  setTimeout(() => {
    notifications.update(n => n.filter(item => item.id !== id));
  }, 3000);
}