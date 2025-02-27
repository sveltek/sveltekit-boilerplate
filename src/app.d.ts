declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}

    interface PageData {
      app: {
        name: string
        author: string
        description: string
        url: string
      }
    }

    // interface Platform {}
  }
}

export {}
