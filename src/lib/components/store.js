import { writable } from 'svelte/store';

export const query_store = writable(null);
export const weatherData_store = writable(null);
export const appState_store = writable("idle"); // idle / loading / success / error