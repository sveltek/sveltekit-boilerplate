import type { Metadata } from './types'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}

    interface PageData {
      metadata?: Metadata
    }

    // interface Platform {}
  }
}

export {}
