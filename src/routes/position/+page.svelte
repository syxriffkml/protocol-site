<script lang="ts">
    import Section from "$lib/Components/Box/Box.svelte"
	import Modal from "$lib/Components/Modal/Index/Modal.svelte";
    import PositionModal from "$lib/Components/Modal/ComponentModal/PositionModal.svelte"
    import Icon from "@iconify/svelte";
	import HoverPopup from "$lib/Components/Popups/HoverPopup.svelte";

    let _positionModal : Modal;

</script>

<div class="h-auto flex flex-col xl:max-w-[90rem] items-start mx-auto w-full p-6 gap-y-4">
    <div class=" w-full flex flex-col gap-[10px]">
        <div class="flex flex-wrap xl:flex-nowrap justify-between gap-y-4 gap-x-2 p-10">
            <div class="w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold">
                    Your Deposit
                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
            <div class="shrink-0 bg-border  h-28 w-[1px] bg-gradient-to-b from-[#86DDF8] to-[#86DDF800] xl:h-29.5" />
            <div class="w-1/3 text-center">
                <div class="flex justify-center items-center gap-2 text-sm text-slate-500 font-bold">
                    <div>
                        Your Debt 
                    </div>
                    <HoverPopup header="Your Debt" content="How much user should repay to get back all collateral" >
                        <div class="my-auto ">
                            <Icon icon="material-symbols:help-rounded" width="15" height="15" />
                        </div>
                    </HoverPopup>

                </div>
                <div class="text-4xl font-semibold">
                    $ 0
                </div>
            </div>
            <div class="shrink-0 bg-border hidden h-28 w-[1px] bg-gradient-to-b from-[#86DDF8] to-[#86DDF800] xl:block xl:h-29.5" />
            <div class="w-full xl:w-1/3 text-center">
                <div class="text-sm text-slate-500 font-bold ">
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
            <button class="w-[80%] mx-auto xl:mx-0 xl:max-w-[300px]" on:click={()=>{_positionModal.openModal();
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

<Modal bind:this={_positionModal}
    mobileWidth="w-4/5"
	desktopWidth="max-w-auto md:max-w-[410px] "
	title="Position"
	type="dark">
    <PositionModal></PositionModal>
</Modal>