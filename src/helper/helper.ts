export function createUniqueClassName(baseClassName: string): string {
    return `${baseClassName}-${self.crypto.randomUUID()}`;
  }

