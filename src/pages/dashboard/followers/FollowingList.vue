<template>
    <table class="followers-blocklist w-full border-separate border-spacing-y-0 whitespace-nowrap">
        <thead>
            <tr>
                <th>{{ $t('avatar') }}</th>
                <th>{{ $t('name') }}</th>
                <th>{{ $t('username') }}</th>
                <th>{{ $t('profession') }}</th>
                <th class="w-0 !text-right">{{ $t('status') }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <template v-if="!loading">
                <tr v-if="following.length==0">
                    <td colspan="6">
                       <div class="text-center p-4">
                           {{ $t('no_record_found') }}
                       </div>
                    </td>
                </tr>
                <template v-else>
                    <tr
                        v-for="(user,i) in following"
                        :key="i"
                        >
                        <td>
                            <div class="size-[34px] overflow-hidden rounded-lg">
                                <img
                                    :src="user.avatar"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                        </td>
                        <td>{{user.name}}</td>
                        <td>{{ user.username }}</td>
                        <td>{{user.profession}}</td>
                        <td>
                            <button type="button" class="btn btn-linear px-2 py-[5px] text-xs text-black">
                                {{ $t('following') }}
                            </button>
                        </td>
                        <td>
                            <vue-popper
                                placement="bottom-end"
                                offsetDistance="0"
                                class="relative !m-0 !border-0"
                            >
                                <button type="button" class="grid place-content-center">
                                    <Icon-more />
                                </button>
                                <template #content>
                                    <button
                                        type="button"
                                        class="absolute right-0 top-0 flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 leading-5 text-black shadow transition hover:bg-black hover:text-white"
                                    >
                                        <icon-block class="size-4" />
                                        <span>{{ $t('block_user') }}</span>
                                    </button>
                                </template>
                            </vue-popper>
                        </td>
                    </tr>
                </template>
            </template>
            <tr v-else>
                <td colspan="6">
                    <div class="text-center">
                        <span class="spinner"></span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import IconMore from '@/components/icon/icon-more.vue';
import IconBlock from '@/components/icon/icon-block.vue';
    export default {
        components:{
            IconMore,IconBlock
        },
        props:{
            following:{
                required:true,
                type:Array
            },
            loading:{
                type:Boolean
            }
        }
    }
</script>
