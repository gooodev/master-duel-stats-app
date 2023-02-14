import { readable } from 'svelte/store';

export const useMediaQuery = (query: string) => {
	const matches = readable<boolean | null>(null, (set) => {
		const m = window.matchMedia(query);
		set(m.matches);
		const el = (e: { matches: boolean }) => set(e.matches);
		m.addEventListener('change', el);
		return () => {
			m.removeEventListener('change', el);
		};
	});
	return matches;
};
