<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';

</script>

<div class="flex flex-row xl:justify-between p-4 h-[78px] backdrop-blur-sm bg-white/10">
    <!--Desktop View-->
    <div class="hidden xl:flex flex-row bg-black/25 w-auto rounded-3xl py-2 px-4 gap-x-4">
        <div class="flex flex-row items-center justify-center gap-x-2">
            <img src="https://app.bucketprotocol.io/images/sui-icon.svg" alt="coins" class="w-[30px] h-auto">
            <p>$1.56</p>
        </div>
        <div class="flex flex-row items-center justify-center gap-x-2">
            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Feth-light.png&w=64&q=75" alt="coins" class="w-[30px] h-auto">
            <p>$3,697.73</p>
        </div>
    </div>
    <Button width="w-auto" mode="blue" customClass="hidden xl:block">Connect Wallet</Button>
    <!--End of Desktop View-->

    <!--Mobile View-->
    <button class="flex xl:hidden items-center justify-center p-2 hover:bg-black/25 rounded-lg">
        <Icon icon="solar:hamburger-menu-linear" class="w-8 h-8"/>
    </button>

    <p class="flex xl:hidden items-center justify-center w-full text-xl font-semibold">Protocol</p>
    <!--End of Mobile View-->
</div>