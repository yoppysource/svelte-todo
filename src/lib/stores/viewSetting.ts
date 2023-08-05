import { writable } from "svelte/store";

const viewSetting = writable({hideDone: false});

export default viewSetting;