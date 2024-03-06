<script lang="ts">
    import Button from "$lib/Components/Button/Button.svelte";
	import Icon from '@iconify/svelte';
	import Section from "$lib/Components/Box/Box.svelte";
    import Modal from "$lib/Components/Modal/Index/Modal.svelte";

    let stakeModal: Modal;

    let inputStaking: string = '';

    function handleInput(event: any) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        if (event.target.name === 'stakeInput') {
            inputStaking = event.target.value;
        }
        // else if (event.target.name === 'claimToken') {
        //     inputWithdraw = event.target.value;
        // }
    }
</script>



<div class="h-screen w-full flex flex-col xl:max-w-[90rem] items-start mx-auto p-6 gap-y-12">
    <p class="text-3xl font-medium">Stake LP token to earn</p>

    <div class="flex flex-col gap-y-8 w-full">
        <div class="flex flex-col gap-y-4 w-full">
            <p class="flex items-center gap-x-2">
                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Faftermath-icon.png&w=32&q=75" alt="img" class="w-[30px] h-auto">
                <span class="text-xl font-semibold">Aftermath</span>
            </p>

            <Section customClass="!p-4">
                <div class="flex flex-col md:flex-row justify-between w-full gap-y-6 md:gap-y-0">
                    <div class="flex flex-col gap-y-2">
                        <p class="text-[#aeecff] font-medium">Pool</p>
                        <p class="flex flex-row">
                            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[0]">
                            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[1] -translate-x-4">
                            <span class="text-xl xl:text-2xl font-medium">USDC-BUCK</span>
                        </p>
                    </div>


                    <div class="flex flex-row gap-x-12 lg:gap-x-36">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                TVL
                                <Icon icon="ep:question-filled" class="w-4 h-4"/>
                            </p>
                            <p class="text-xl xl:text-2xl font-medium">$ 5,748,252</p>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                APR
                                <Icon icon="ep:question-filled" class="w-4 h-4"/>
                            </p>
                            <p class="text-xl xl:text-2xl font-medium">73.59 %</p>
                        </div>
                    </div>


                    <div class="flex flex-col items-center justify-center">
                        <Button width="w-full md:min-w-[200px]" handler={(()=>{stakeModal.openModal();})}>Add and Stake</Button>
                    </div>
                </div>
            </Section>
        </div>
        <div class="flex flex-col gap-y-2 w-full">
            <p class="flex items-center gap-x-2">
                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fcetus-icon.png&w=32&q=75" alt="img" class="w-[30px] h-auto">
                <span class="text-xl font-semibold">Cetus</span>
            </p>
            <Section customClass="!p-4">
                <div class="flex flex-col md:flex-row justify-between w-full gap-y-6 md:gap-y-0">
                    <div class="flex flex-col gap-y-2">
                        <p class="text-[#aeecff] font-medium">Pool</p>
                        <p class="flex flex-row">
                            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[0]">
                            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbuck-icon.png&w=48&q=75" alt="img" class="w-[40px] h-auto z-[1] -translate-x-4">
                            <span class="text-xl xl:text-2xl font-medium">BUCK-USDC</span>
                        </p>
                    </div>


                    <div class="flex flex-row gap-x-12 lg:gap-x-36">
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                TVL
                                <Icon icon="ep:question-filled" class="w-4 h-4"/>
                            </p>
                            <p class="text-xl xl:text-2xl font-medium">$ 5,748,252</p>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <p class="text-[#aeecff] font-medium flex flex-row items-center gap-x-2">
                                APR
                                <Icon icon="ep:question-filled" class="w-4 h-4"/>
                            </p>
                            <p class="text-xl xl:text-2xl font-medium">73.59 %</p>
                        </div>
                    </div>


                    <div class="flex flex-col items-center justify-center">
                        <Button width="w-full md:min-w-[200px]" handler={(()=>{stakeModal.openModal();})}>Add and Stake</Button>
                    </div>
                </div>
            </Section>
        </div>
        <div class="flex flex-col gap-y-2 w-full">
            <p class="flex items-center gap-x-2">
                <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fkriya-icon.png&w=32&q=75" alt="img" class="w-[30px] h-[35px]">
                <span class="text-xl font-semibold">KriyaDEX</span>
            </p>
            <Section customClass="!p-4">
                3
            </Section>
        </div>
    </div>

</div>


<Modal bind:this={stakeModal} type="dark">
    <div class="px-4 flex flex-col gap-y-6 mb-6">
        <p class="font-bold text-2xl md:text-3xl">Provide Liquidity</p>

        <div class="flex flex-col gap-y-2">
            <p class="font-semibold text-lg">Choose method to supply</p>
            <div class="flex flex-row flex-wrap gap-4">
                <button class="flex flex-row items-center gap-x-2 bg-white/25 px-4 py-2 rounded-lg">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[25px] h-auto">
                    <p>USDC</p>
                </button>
                <button class="flex flex-row items-center gap-x-2 bg-white/10 px-4 py-2 rounded-lg">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[25px] h-auto">
                    <p>USDC + BUCK</p>
                </button>
            </div>
        </div>

        <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between items-center">
                <p class="font-semibold text-lg">USDC budget</p>
                <p class="text-sm"><span class="text-[#aeecff]">Balance:</span>&nbsp;0</p>
            </div>
            <div class="relative flex w-full h-12 items-center justify-between rounded-lg border border-white/5 bg-white/10 px-2 ">
                <input type="text" placeholder="0.00" class="w-full bg-transparent focus:outline-none border-none focus:ring-0" name="stakeInput" on:input={handleInput}/>

                <button class="flex flex-row w-auto items-center justify-center gap-x-2 bg-white/10 rounded-lg px-4 py-1">
                    <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fusdc-icon.png&w=48&q=75" alt="img" class="w-[20px] h-auto">
                    <p>USDC</p>
                </button>
            </div>
        </div>

        <div class="flex items-center justify-center">
            <Button mode="blue">
                <p class="text-lg">Connect Wallet</p>
            </Button>
        </div>


    </div>
</Modal>