<script lang="ts">

	import Icon from "@iconify/svelte";
    import Button from "$lib/Components/Button/Button.svelte";
    import Section from "$lib/Components/Box/Box.svelte";

    let subAssets=['Positions','Fountain','Pool'];



	function handleClickAssets(asset:string) {
		if (asset==='Positions') {
           window.location.href='/position' ;
        } else if(asset==='Fountain') {
            window.location.href='/fountain' ;
        }
        else if(asset==='Pool') {
            window.location.href='/tank-pools' ;
        }
	}
</script>
<div class="h-[200vh] flex flex-col xl:max-w-[90rem] items-start mx-auto w-full p-6 gap-y-4">
    <p class="block xl:hidden mx-auto text-2xl font-semibold">
        Dashboard
    </p>
    <p class="text-md xl:text-4xl p-4 mx-auto xl:mx-0">
        My Assets
    </p>
    <div class=" w-full">
        <Section customClass={"w-[80%] mx-auto xl:mx-0 xl:max-w-[30%]"}>
            <div class="flex flex-col gap-y-10 py-2">
                <div class="flex gap-4 rounded-full backdrop-blur-sm w-fit py-2 pl-2 pr-4">
                    <div class="my-auto bg-[#aeecff] rounded-full p-1">
                        <Icon icon="tabler:gift" width="20" height="20"  style="color: black" />
                    </div>
        
                    <p class="text-xl font-semibold">
                        SUI Reward
                    </p>
                </div>
    
                <div>
                    <div class="flex gap-2">
                        <p class="text-sm font-semibold text-[#aeecff]">
                            Fountain Reward 
                        </p>
                        <div class="my-auto">
                            <Icon icon="material-symbols:help-rounded" width="15" height="15"  style="color: #aeecff" />
                        </div>
        
                    </div>
        
                    <div class="flex gap-x-2 py-0">
                        <div class="text-xl ">
                            0 
                        </div>
                        <p class="text-sm mt-auto">
                            SUI
                        </p>
                    </div>
                </div>

                <div class="px-2">
                    <Button customClass={"w-full"}>
                        <div >
                            Claim
            
                        </div>
                    </Button>
                </div>
            </div>
        </Section>
    </div>


    <div class="flex flex-col gap-y-10 w-full p-4">
        {#each subAssets as assets}
            <div class="flex  gap-2">
                <p class="text-2xl font-semibold">
                    {#if assets === 'Pool'}
                         Tank deposits
                    {:else}
                         {assets}
                    {/if}
                </p>
                <Button customClass={"min-w-[150px]"} handler={()=>{
                    handleClickAssets(assets);
                }}>
                    <div class="flex items-center justify-center">
                        <div class="my-auto">
                            <Icon icon="uil:plus" width="20" height="20"  /> 
                        </div>
                        <p>
                            Add {assets}
                        </p>
                    </div>
                </Button>
            </div>
        {/each}
    </div>
</div>