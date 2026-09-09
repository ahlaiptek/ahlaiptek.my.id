export type Theme = 'dark' | 'light';

class ThemeState {
	current = $state<Theme>('dark');

	init() {
		if (typeof window === 'undefined') return;

		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme === 'light' || savedTheme === 'dark') {
			this.current = savedTheme;
		} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			this.current = 'light';
		} else {
			this.current = 'dark';
		}
		this.apply();
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', this.current);
		}
		this.apply();
	}

	private apply() {
		if (typeof window === 'undefined') return;
		const root = document.documentElement;
		if (this.current === 'dark') {
			root.classList.add('dark');
			root.classList.remove('light');
		} else {
			root.classList.remove('dark');
			root.classList.add('light');
		}
	}
}

export const theme = new ThemeState();
