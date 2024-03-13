<script lang="ts">
	import type { MouseEventHandler } from "svelte/elements";

    export let handler: (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) => void = ()=>{}

    export let rounded:string = 'rounded-full'

    export let disabled: boolean = false
    
    export let width:string = 'w-auto'

    export let mode: 'blue' | 'blue-inverted' | 'side' = 'blue'
    let buttonStyle: string;
    $: {
        switch(mode) {
            case 'blue':
                buttonStyle = 'isBlue';
                break;
            case 'blue-inverted':
                buttonStyle = 'isBlueInverted';
                break;
            case 'side':
                buttonStyle = 'side';
                break;
            default:
                buttonStyle = 'isBlue';
        }
    }

    export let customClass: string = '';
    
    // export let btnCancel: boolean = false
</script>

<!-- design button here -->
<button {disabled} class="{`${width} ${buttonStyle} ${customClass}`} {rounded}" on:click={handler}><slot/></button>

<style>
    /* isBlue class */
    .isBlue {
        @apply bg-[#aeecff] text-black py-2 px-4 hover:scale-105 transition;
    }

    /* isBlueInverted class */
    .isBlueInverted{
        @apply bg-transparent backdrop-blur-sm text-[#aeecff] py-2 px-4 border-2 border-[#aeecff] hover:scale-105 transition;
    }

    /* side classes */
    .side {
        @apply text-[#aeecff] py-2 px-4 relative z-[1];
    }

    .side.active{
        background: conic-gradient(from 202deg at 50% 50%, #202f34 42.57809400558472deg, #65e0fc 94.842449426651deg, #a7edfd 106.2618899345398deg, #65e0fc 119.4994604587555deg, #202f34 187.49999284744263deg, #202f34 260.7220673561096deg, #9beeff 286.23008966445923deg, #202f34 308.08024406433105deg);
    }

    .side:hover {
        background: conic-gradient(from 202deg at 50% 50%, #202f34 42.57809400558472deg, #65e0fc 94.842449426651deg, #a7edfd 106.2618899345398deg, #65e0fc 119.4994604587555deg, #202f34 187.49999284744263deg, #202f34 260.7220673561096deg, #9beeff 286.23008966445923deg, #202f34 308.08024406433105deg);
        animation: rotate 3s linear infinite;
        background-size: 215% 215%;
    }

    @keyframes rotate {
        0% { background-position: 0% }
        100% { background-position: 100% }
    }
    
    .side::before {
        content: "";
        @apply bg-[#141b1d] inset-px absolute z-[-1];
        border-radius: inherit;
    }
</style>