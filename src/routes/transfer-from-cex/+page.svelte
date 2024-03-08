<script lang="ts">
    import Modal from "$lib/Components/Modal/Index/Modal.svelte";
    import Button from  "$lib/Components/Button/Button.svelte";
    import HoverPopup from '$lib/Components/Popups/HoverPopup.svelte';
    import Icon from '@iconify/svelte';
    import {googleStoreSVG} from '$lib/Components/SVG/googleStore'

    let connectModal: Modal;

</script>

<div class="h-[80dvh] w-full flex items-center justify-center xl:max-w-[90rem] mx-auto p-6 gap-y-6">

    <div class="flex flex-col items-center justify-between p-6 rounded-lg max-w-[400px] h-[565px] border border-[#a8e4f6]">
        <div class="flex flex-row justify-end items-end w-full"> 
            <button on:click={() => window.open('https://discord.com/invite/V7hgKf6NWf', '_blank')}>
                <HoverPopup content="Get help on Discord">
                    <Icon icon="ph:question" class="w-5 h-5"/>
                </HoverPopup>
            </button>
        </div>
        <div class="flex flex-col items-center justify-center flex-grow">
            <img src="assets/img/cede_store.png" alt="img" class="w-28 h-28 mb-4"/>
            <p class="text-xl font-bold text-center">Welcome to <span class="text-[#a8e4f6]">cede.store</span> send portal</p>
            <p class="text-[#9B9B9B] text-center text-md font-normal">Transfer your CEX assets to your blockchain address from any dApp</p>
        </div>
        <Button width="w-full" rounded='rounded-lg' handler={() => { connectModal.openModal() }}>
            Connect to cede.store
        </Button>
    </div>

</div>


<Modal bind:this={connectModal} modalHeight="max-h-[565px]" desktopWidth="max-w-[500px]">
    <div class="flex flex-col items-center justify-center p-6 w-full h-full">
        <div class="flex flex-col items-center justify-center ">
            <img src="assets/img/cede_store.png" alt="img" class="w-28 h-28 mb-4"/>
            <p class="text-xl font-bold text-center"><span class="text-[#a8e4f6]">Cede.store</span> not installed</p>
            <p class="text-[#9B9B9B] text-center text-sm font-normal">We have detected that the extension is not installed on your browser. To proceed, you will need to add it. You will not be required to immediately set up the extension.</p>
        
            <Button width="w-auto" rounded='rounded-lg' customClass="mt-6 !bg-white" handler={() => { window.open('https://chromewebstore.google.com/detail/cedestore/dcfphbfmjohnlcpelbhfbjolhmmlcbhd', '_blank') }}>
                <img 
                    src={googleStoreSVG} 
                    alt="img" 
                    class="w-[200px] h-auto"
                />
            </Button>
        </div> 
    </div>
</Modal>
