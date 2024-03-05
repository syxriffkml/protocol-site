<script lang="ts">
    import Button from "../Button/Button.svelte";
    import Icon from '@iconify/svelte';
</script>

<div class="hidden xl:flex flex-col justify-between bg-black h-screen w-full p-8">
    <div class="flex items-center justify-center w-full mb-8">
        <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fbucket-text-logo.png&w=256&q=75" alt="img" class="w-[120px] h-auto">
    </div>

    <div class="w-full flex-grow space-y-2">
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="material-symbols:home-outline-rounded" class="w-8 h-8"/>
                <span class="text-lg font-normal">Overview</span>
            </p>
        </Button>
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="ph:play-bold" class="w-7 h-7"/>
                <span class="text-lg font-normal">Dashboard</span>
            </p>
        </Button>
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="mdi:plus" class="w-8 h-8"/>
                <span class="text-lg font-normal">Position</span>
            </p>
        </Button>
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="material-symbols:home-outline-rounded" class="w-8 h-8"/>
                <span class="text-lg font-normal">Tank Pools</span>
            </p>
        </Button>
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="material-symbols:home-outline-rounded" class="w-8 h-8"/>
                <span class="text-lg font-normal">Fountain</span>
            </p>
        </Button>
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="material-symbols:home-outline-rounded" class="w-8 h-8"/>
                <span class="text-lg font-normal">Peg</span>
            </p>
        </Button>
        <Button width="w-full" mode="side" customClass="h-14">
            <p class="flex items-center justify-start gap-x-4">
                <Icon icon="material-symbols:home-outline-rounded" class="w-8 h-8"/>
                <span class="text-lg font-normal">Predges</span>
            </p>
        </Button>
    </div>

    <div class="flex flex-col gap-y-2">
        <p class="text-[#aeecff] text-sm">Audited By</p>
        <div class="flex flex-row gap-x-2">
            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fottersec-logo.png&w=128&q=75" alt="img" class="w-[100px] h-auto">
            <img src="https://app.bucketprotocol.io/_next/image?url=%2Fimages%2Fmovebit-logo.png&w=256&q=75" alt="img" class="w-[120px] h-auto">
        </div>
    </div>
</div>
