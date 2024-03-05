<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';

    let tabs =['Overview','Dashboard','Position','Tank Pools','Fountain','Peg','Bridges',]




    /**
     * Handling Click to go each page
     * @param tab tab indicate pages
     */
	function handleClickTab(tab: string) {
		if (tab === tabs[0]) {
            window.location.href='/' ;
        }
        else if(tab === tabs[1]) {
            window.location.href='/dashboard' ;
        }
        else if(tab === tabs[2]) {
            window.location.href='/position' ;
        }
        else if(tab === tabs[3]) {
            window.location.href='/tank-pools' ;
        }
        else if(tab === tabs[4]) {
            window.location.href='/fountain' ;
        }
        else if(tab === tabs[5]) {
            window.location.href='/peg' ;
        }
        else if(tab === tabs[6]) {
            window.location.href='/bridges' ;
        }
	}

</script>

<div class="hidden xl:flex flex-col justify-between bg-black h-full w-full p-8">
    <div class="flex items-center justify-center w-full mb-8">
        <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbucket-text-logo.png&w=256&q=75" alt="img" class="w-[120px] h-auto">
    </div>

    <div class="w-full flex-grow space-y-2">
        {#each tabs as tab}
        <Button width="w-full" mode="side" customClass="h-14" handler={(()=>{
            handleClickTab(tab);
        })}>
            <p class="flex items-center justify-start gap-x-4">

                {#if tab === 'Overview'}
                <Icon icon="material-symbols:home-outline-rounded" class="w-8 h-8"/>
                {:else if tab === 'Dashboard'}
                <Icon icon="ph:play-bold" class="w-7 h-7"/>
                {:else if tab === 'Position'}
                <Icon icon="mdi:plus" class="w-8 h-8"/>
                {:else if tab === 'Tank Pools'}
                <Icon icon="ion:water-outline" class="w-8 h-8" />
                {:else if tab === 'Fountain'}
                <Icon icon="gg:arrow-up-o" class="w-8 h-8" />
                {:else if tab === 'Peg'}
                <Icon icon="icon-park-outline:transfer-data" class="w-8 h-8" />
                {:else if tab === 'Bridges'}
                <Icon icon="mingcute:bridge-fill" class="w-8 h-8" />
                {/if}

                <span class="text-lg font-normal">{tab}</span>
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
