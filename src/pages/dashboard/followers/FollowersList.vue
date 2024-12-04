<template>
    <table class="followers-blocklist w-full border-separate border-spacing-y-0 whitespace-nowrap">
        <thead>
            <tr>
                <th>{{ $t('avatar') }}</th>
                <th>
                    <div class="flex items-center">
                        {{ $t('name') }}
                        <div>
                            <icon-chevron-up 
                                class="size-3 cursor-pointer" 
                                @click='sort("first_name", "ASC", "followers")'
                                :class="[(activeColumn === 'first_name' && activeSort === 'ASC') ? 'text-blue' : '']"
                            />
                            <icon-chevron-down 
                                class="size-3 cursor-pointer" 
                                @click='sort("first_name", "DESC", "followers")'
                                :class="[(activeColumn === 'first_name' && activeSort === 'DESC') ? 'text-blue' : '']"
                            />
                        </div>
                    </div>
                </th>
                <th>
                    <div class="flex items-center">
                        {{ $t('username') }}
                        <div>
                            <icon-chevron-up 
                                class="size-3 cursor-pointer" 
                                @click='sort("username", "ASC", "followers")'
                                :class="[(activeColumn === 'username' && activeSort === 'ASC') ? 'text-blue' : '']"
                            />
                            <icon-chevron-down 
                                class="size-3 cursor-pointer" 
                                @click='sort("username", "DESC", "followers")'
                                :class="[(activeColumn === 'username' && activeSort === 'DESC') ? 'text-blue' : '']"
                            />
                        </div>
                    </div>
                </th>
                <th>
                    <div class="flex items-center">
                        {{ $t('profession') }}
                        <div>
                            <icon-chevron-up 
                                class="size-3 cursor-pointer" 
                                @click='sort("profession_id", "ASC", "followers")'
                                :class="[(activeColumn === 'profession_id' && activeSort === 'ASC') ? 'text-blue' : '']"
                            />
                            <icon-chevron-down 
                                class="size-3 cursor-pointer" 
                                @click='sort("profession_id", "DESC", "followers")'
                                :class="[(activeColumn === 'profession_id' && activeSort === 'DESC') ? 'text-blue' : '']"
                            />
                        </div>
                    </div>
                </th>
                <th class="w-0 !text-right">{{ $t('status') }}</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <template v-if="!loading">
                <tr v-if="followers.length==0">
                    <td colspan="6">
                       <div class="text-center p-4">
                           {{ $t('no_record_found') }}
                       </div>
                    </td>
                </tr>
                <template v-else>
                    <tr
                        v-for="(follower,i) in followers"
                        :key="i"
                        >
                        <td>
                            <div class="size-[34px] overflow-hidden rounded-lg">
                                <img
                                    :src="follower.avatar"
                                    class="h-full w-full object-cover"
                                    alt="Profile"
                                />
                            </div>
                        </td>
                        <td>{{follower.name}}</td>
                        <td>{{follower.username}}</td>
                        <td>{{follower.profession}}</td>
                        <td>
                            <button @click="unfollow(follower)" type="button" class="btn btn-linear px-2 py-[5px] text-xs text-black">
                                Unfollow
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
import IconChevronDown from '@/components/icon/icon-chevron-down.vue';
import IconChevronUp from '@/components/icon/icon-chevron-up.vue';

    export default {
        components:{
            IconMore,
            IconBlock,
            IconChevronDown,
            IconChevronUp
        },
        emits: ['unfollow','sort'],
        props:{
            followers:{
                required:true,
                type:Array
            },
            loading:{
                type:Boolean
            },
            
        },
        data()  {
            return {
                activeColumn: '',
                activeSort: '', 
            }
        },
        methods: {
            unfollow(follower) {
                this.$emit('unfollow', follower.id);
            },
            sort(column, sort, tab) {
                this.activeColumn = column;
                this.activeSort = sort;
                this.$emit('sort', {column, sort, tab});
            }
        },
    }
</script>
