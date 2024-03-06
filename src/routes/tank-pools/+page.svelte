<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Icon from "@iconify/svelte";
	import Button from "$lib/Components/Button/Button.svelte";
    import SectionOverflow from "$lib/Components/Box/BoxOverFlow.svelte";
    import SectionImage from "$lib/Components/Box/BoxImage.svelte";

    let header=['SUI','afSUI','vSUI','haSUI','afSUI/SUI','WETH','USDC','USDT','USDY',]
    let pool =
    [
        { header:'SUI', totalDepo:6.19, depo:0, earn:0 },
        { header:'afSUI', totalDepo:6.19, depo:0, earn:0 },
        { header:'vSUI', totalDepo:6.19, depo:0, earn:0 },
        { header:'haSUI', totalDepo:6.19, depo:0, earn:0 },
        { header:'afSUI/SUI', totalDepo:6.19, depo:0, earn:0 },
        { header:'WETH', totalDepo:6.19, depo:0, earn:0 },
        { header:'USDC', totalDepo:6.19, depo:0, earn:0 },
        { header:'USDT', totalDepo:6.19, depo:0, earn:0 },
        { header:'USDY', totalDepo:6.19, depo:0, earn:0 },
    ]

</script>
<div class=" flex flex-col xl:max-w-[90rem] items-start mx-auto w-full p-6 gap-y-4">
    <div class="p-2">
        <div class="flex justify-between gap-x-2 p-10">
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    TANK POOL TVL
                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
            <div class="border" />
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    Your BUCK in tank
                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
            <div class="border" />
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    Your BUCK balance
                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-6">
            <div class="flex col-span-1 xl:col-span-2">
                <div class="hidden xl:block w-[54px]"/>
                <SectionImage height={"h-full"} margin={"mt-0"}>
                
                    <div class="h-full flex justify-start items-end ">
                        <div class="flex flex-col gap-6">
                           <div class="">
                                <p class="text-3xl font-semibold">
                                    Get some BUCK
                                </p>
                                <p class="text-sm">
                                    Boost your reward by Create Position
                                </p>
                            </div>
                            <div class="flex gap-2">
                                <Button>
                                    Add Position
                                </Button>
                                <Button mode={"blue-inverted"}>
                                    Buy
                                </Button>
                                <Button mode={"blue-inverted"}>
                                    PSM
                                </Button>
                            </div> 
                        </div>
                    </div>

                </SectionImage>
            </div>

            {#each pool as head}          
                <SectionOverflow header={head.header}>

                    <div class="w-[90%]">
                        <div>
                            total deposited
                        </div>
                        <div class="text-2xl">
                            6.19k
                        </div>
                        <div class="flex justify-between gap-4">
                            <div class="w-full">
                                <p class="text-sm whitespace-nowrap">
                                    Deposited $BUCK
                                </p>
                                <div>
                                    0
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="text-sm whitespace-nowrap">
                                    Earned {head.header}
                                </p>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-2 w-full">
                        <Button customClass={"w-full"}>
                            Deposit
                        </Button>
                        <Button mode={"blue-inverted"} customClass={"w-full"}>
                            Withdraw
                        </Button>
                    </div>

                </SectionOverflow>
            {/each}
        </div>

    </div>
</div>