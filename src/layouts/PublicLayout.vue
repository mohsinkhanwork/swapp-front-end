<template>
    <div className="font-plus-jakarta bg-[#F3F4F5] text-sm/[18px] font-medium text-gray antialiased">
        <div class="relative flex min-h-screen items-center justify-center px-4 py-6 md:p-10">
            <router-view></router-view>
            <div
                class="absolute left-1/2 top-1/2 h-full max-h-[800px] w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[200px]"
            ></div>
            <img class="absolute bottom-0 right-0 max-h-[563px]" src="/assets/images/auth-bg.png" alt="auth" />
        </div>
    </div>
</template>
<script>
export default {};
</script>
