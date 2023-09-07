import { nanoid } from 'nanoid'
export function createUniqueClassName(baseClassName: string): string {
    return `${baseClassName}-${nanoid()}`;
  }

