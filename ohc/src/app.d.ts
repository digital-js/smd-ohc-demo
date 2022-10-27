// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { Vehicle } from './types/vehicle';

declare namespace App {
  interface Locals {
		vehicle: Vehicle
	}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}
