<template>
    <div
        class="flex min-h-screen flex-col bg-[#F3F4F5] font-plus-jakarta text-sm/[18px] font-medium text-gray antialiased"
    >
        <!-- Header -->
        <header-component @toggleSidebar="toggleSidebar" />

        <!-- Main content -->
        <div class="flex grow">
            <!-- Sidebar -->
            <sidebar-component :isOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />

            <!-- Main content area -->
            <div class="w-full grow p-4 lg:ml-64">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import { HeaderComponent, SidebarComponent } from '@/components';
export default {
    components:{
        HeaderComponent,SidebarComponent
    },
    data() {
        return {
            loading: true,
            isSidebarOpen:false
        };
    },
    methods:{
        toggleSidebar(){
            this.isSidebarOpen=!this.isSidebarOpen
        }
    }
};
</script>
