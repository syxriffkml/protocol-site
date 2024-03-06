<!-- prettier-ignore -->
<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';

    let tabs = [
        {name: 'Overview', icon: 'material-symbols:home-outline-rounded', href: '/'},
        {name: 'Dashboard', icon: 'bi:play', href: '/dashboard'},
        {name: 'Position', icon: 'mdi:plus', href: '/position'},
        {name: 'Tank Pools', icon: 'ion:water-outline', href: '/tank-pools'},
        {name: 'Fountain', icon: 'gg:arrow-up-o', href: '/fountain'},
        {name: 'Peg', icon: 'icon-park-outline:transfer-data', href: '/peg'},
        {name: 'Bridges', icon: 'mingcute:bridge-fill', href: '/bridges'}
    ];

    /**
     * Handling Click to go each page
     * @param tab tab indicate pages
     */
     function handleClickTab(tab: any) {
        window.location.href = tab.href;
    }

</script>

<!-- prettier-ignore -->
<div class="hidden xl:flex flex-col justify-between bg-black h-full w-full p-8">
    <div class="flex items-center justify-center w-full mb-8">
        <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbucket-text-logo.png&w=256&q=75" alt="img" class="w-[120px] h-auto">
    </div>

    <div class="w-full flex-grow space-y-3">
        {#each tabs as tab}
            <Button width="w-full" mode="side" customClass="h-14" rounded="rounded-lg" handler={(()=>{ handleClickTab(tab); })}>
                <p class="flex items-center justify-start gap-x-4">
                    <Icon icon={tab.icon} class="w-8 h-8"/>
                    <span class="text-lg font-normal">{tab.name}</span>
                </p>
            </Button>
        {/each}
    </div>

    <div class="flex flex-col gap-y-2">
        <p class="text-[#aeecff] text-sm">Audited By</p>
        <div class="flex flex-row gap-x-2">
            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fottersec-logo.png&w=128&q=75" alt="img" class="w-[120px] h-auto">
            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fmovebit-logo.png&w=256&q=75" alt="img" class="w-[140px] h-auto">
        </div>
    </div>
</div>
