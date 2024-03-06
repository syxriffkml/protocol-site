<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
    import Icon from "@iconify/svelte";
</script>

<div class="h-[200vh] flex flex-col xl:max-w-[90rem] items-start mx-auto w-full p-6 gap-y-4">
    <div class=" w-full flex flex-col gap-[90px]">
        <div class="flex justify-between gap-x-2 p-10">
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    Your Deposit
                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
            <div class="shrink-0 bg-border hidden h-28 w-[1px] bg-gradient-to-b from-[#86DDF8] to-[#86DDF800] md:block xl:h-29.5" />
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    Your Debt
                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
            <div class="shrink-0 bg-border hidden h-28 w-[1px] bg-gradient-to-b from-[#86DDF8] to-[#86DDF800] md:block xl:h-29.5" />
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    Total Collateral Ratio
                </div>
                <div class="text-4xl font-semibold">
                    0 %
                </div>
            </div>
        </div>
        
        <div class="flex gap-4">
            <!-- IF THE CARD IS ALREADY HAS POSITION -->
            <!-- <Section customClass={"w-[80%] mx-auto xl:mx-0 xl:max-w-[300px] p-6"} animate={true}>
                <div class="flex flex-col items-center justify-center xl:h-[350px] gap-2">
                    Content
                </div>
            </Section> -->
            <button class="w-[80%] mx-auto xl:mx-0 xl:max-w-[300px]" on:click={()=>{console.log('Clicked!');
            }}>
                <Section customClass={""} animate={"floating"}>
                    <div class="flex flex-col items-center justify-center xl:h-[350px] gap-2">
                        <div class="w-fit bg-[#aeecff] rounded-full">
                            <Icon icon="ic:outline-plus" class="w-7 h-7 text-black" />
                        </div>
                        <p>
                            Create Position
                        </p>
                    </div>
                </Section>
            </button>

        </div>
            
    </div>
</div>