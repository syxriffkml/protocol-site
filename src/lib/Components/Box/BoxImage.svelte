<script lang="ts">

    export let height:string = 'h-[272px]'
    export let margin:string = 'mt-10'

    export let customClass: string = '';
</script>

<div class="banner bg-[#232f33] rounded-lg w-full {height} p-10 {margin} {customClass}">
    <slot/>
</div>

<style>
    /* .banner {
        @apply relative bg-cover bg-center;
        background-image: url('https://app.bucketprotocol.io/_next/image?url=%2Fimages%2F3d-sui-bg.png&w=750&q=75');
    }

    .banner::before {
        content: "";
        @apply absolute inset-0 bg-[#232f33] opacity-0;
        pointer-events: none;
    } */


    .banner {
        @apply relative bg-cover bg-center rounded-lg z-[1];
        background: conic-gradient(from 202deg at 50% 50%, #202f34 42.57809400558472deg, #65e0fc 94.842449426651deg, #a7edfd 106.2618899345398deg, #65e0fc 119.4994604587555deg, #202f34 187.49999284744263deg, #202f34 260.7220673561096deg, #9beeff 286.23008966445923deg, #202f34 308.08024406433105deg);
    }

    .banner::before {
        content: "";
        @apply absolute inset-px bg-[#232f33] rounded-lg z-[-1];
        background-image: url('https://app.bucketprotocol.io/_next/image?url=%2Fimages%2F3d-sui-bg.png&w=750&q=75');
        background-size: cover ;
        pointer-events: none;
    }
</style>