<template>
    <table class="followers-blocklist w-full border-separate border-spacing-y-0 whitespace-nowrap">
        <thead>
            <tr>
                <th>{{ $t('avatar') }}</th>
                <th>{{ $t('name') }}</th>
                <th>{{ $t('username') }}</th>
                <th>{{ $t('profession') }}</th>
                <th class="w-0 !text-right">{{ $t('status') }}</th>
            </tr>
        </thead>
        <tbody>
            <template v-if="!loading">
                <tr v-if="users.length==0">
                    <td colspan="5">
                       <div class="text-center p-4">
                           {{ $t('no_record_found') }}
                       </div>
                    </td>
                </tr>
                <template v-else>
                    <tr
                        v-for="(user,i) in users"
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
                        <td>{{user.username}}</td>
                        <td>{{ user.profession }}</td>
                        <td>
                            <button type="button" class="btn btn-linear px-2 py-[5px] text-xs text-black"
                                    @click="unblockUser(user.id,i)">
                                Unblock
                            </button>
                        </td>
                    </tr>
                </template>
            </template>
            <tr v-else>
                <td colspan="5">
                    <div class="text-center">
                        <span class="spinner"></span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import userService from '@/services/userService';

    export default {
        props:{
            users:{
                required:true,
                type:Array
            },
            loading:{
                type:Boolean,
                
            }
        },
        methods:{
            unblockUser(param_user_id,index){
                let userID = {
                    user_id : param_user_id
                }
                
                // block user serive
                userService.unblockUser(userID).then(res=>{
                    if(res.status_code==200){
                        this.users.splice(index, 1);
                        this.$toastr.success(res.message);
                    }else{
                        this.$toastr.success(res.message);
                    }
                })

            },
        }
    }
</script>
