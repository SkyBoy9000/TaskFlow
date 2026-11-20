export type Naloga = {
  id: string;
  ime: string;
  /** Ura v obliki "HH:MM". */
  cas: string;
  opravljeno: boolean;
};

/** Ustvari preprost enolični ID za novo nalogo. */
export function ustvariId(): string {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

/** Preveri, ali je niz veljavna ura v obliki "HH:MM". */
export function jeVeljavenCas(cas: string): boolean {
  return /^([01]?\d|2[0-3]):[0-5]\d$/.test(cas.trim());
}

/** Normalizira uro, npr. "8:5" ni veljavno, "8:05" postane "08:05". */
export function normalizirajCas(cas: string): string {
  const [ure, minute] = cas.trim().split(':');
  return `${ure.padStart(2, '0')}:${minute}`;
}

/** Vrne naloge, urejene po uri (od najzgodnejše). */
export function razvrstiPoCasu(naloge: Naloga[]): Naloga[] {
  return [...naloge].sort((a, b) => a.cas.localeCompare(b.cas));
}

/** Prešteje opravljene naloge. */
export function prestejOpravljene(naloge: Naloga[]): number {
  return naloge.filter((naloga) => naloga.opravljeno).length;
}
