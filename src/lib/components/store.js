import { writable } from 'svelte/store';

export const query = writable(null);
export const weatherData = writable(null);
export const appState = writable("idle"); // idle / loading / success / error