// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	namespace svelteHTML {
		interface HTMLAttributes {
		  'on:longpress'?: (event: CustomEvent) => void
		}
	  }
	declare namespace Model {
		type Todo = {
			id: string;
			title: string;
			completed: boolean;
		}
	}
	
}

export {};
