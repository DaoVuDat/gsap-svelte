import type Lenis from 'lenis';

interface LenisStore {
	lenis: Lenis | undefined;
}

export const lenisStore: LenisStore = $state({
	lenis: undefined
})
