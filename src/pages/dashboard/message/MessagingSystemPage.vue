<template>
    <div>
        <div class="mb-4 text-right lg:hidden">
            <button type="button">
                <icon-menu class="size-7" />
            </button>
        </div>
        <div class="flex items-start gap-4 h-[calc(100vh-151px)] lg:h-[calc(100vh-104px)]">
            <div class="hidden w-[314px] h-full shrink-0 rounded-lg bg-white shadow-3xl md:flex flex-col">
                <div class=" sticky top-0 bg-white rounded-lg px-5 pt-5 pb-2">
                    <div class="relative mb-5">
                        <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                        <input type="text" :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                    </div>
                    <div class="flex items-center gap-2">
                        <h2 class="font-semibold text-black">{{ $t('message') }}</h2>
                        <div
                            class="h-[19px] bg-primary rounded-full min-w-[19px] grid place-content-center text-xs font-semibold text-black px-1">
                            2</div>
                    </div>
                </div>
                <div class="grow overflow-auto px-2.5 pb-4 pt-2 space-y-2">
                    <button type="button" v-for="room in rooms" :key="room.id" @click.prevent="openRoom(room)"
                        class="w-full flex gap-2.5 p-2.5 rounded-lg hover:ring-1 hover:ring-primary/30 hover:bg-primary/5 transition">
                        <div class="size-10 rounded-lg object-cover shrink-0 relative">
                            <img src="/assets/images/profile.png" alt="profile">
                            <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2"></div>
                        </div>
                        <div class="grow">
                            <div class="flex items-center justify-between gap-1">
                                <h3 class="text-black line-clamp-1">{{ room.name }}</h3>
                                <span class="text-xs/[15px] font-semibold text-gray-300 shrink-0">{{
                                    formatTime(room.time) }}</span>
                            </div>
                            <div class="flex items-center justify-between gap-3 mt-1.5">
                                <p class="text-gray text-xs line-clamp-1">{{ room.message }}</p>
                                <div
                                    class="h-4 bg-danger rounded-full min-w-[16px] grid place-content-center text-xs font-bold text-white px-1">
                                    {{ room.unread }}</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div v-if="currentRoomId !== null"
                class="grow overflow-hidden rounded-lg bg-white shadow-3xl flex flex-col h-full">
                <!-- Chat with swap -->
                <!-- <div class="m-auto space-y-5">
                    <div>
                        <img src="/assets/images/chat-swap.svg" alt="chat swap" class="size-40 mx-auto">
                    </div>
                    <div class="max-w-[448px] w-full text-center">
                        <h2 class="mb-2 text-lg/6 font-semibold text-black">Chat with swap</h2>
                        <p class="leading-[22px]">This is a space where you can ask questions, seek advice, share
                            thoughts, or simply
                            have a friendly conversation.</p>
                    </div>
                </div> -->

                <div class="sticky top-0 p-3 sm:p-4 bg-gray-200">
                    <div class="flex gap-2.5 justify-between items-center">
                        <div class="flex gap-2.5">
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9 md:hidden">
                                <icon-menu class="size-5" />
                            </button>
                            <div class="size-10 rounded-lg object-cover shrink-0 relative">
                                <img src="/assets/images/profile.png" alt="profile">
                                <div class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2">
                                </div>
                            </div>
                            <div>
                                <h3 class="text-black line-clamp-1 font-semibold">{{ currentRoomName }}</h3>
                                <p class="mt-1.5 text-gray text-xs line-clamp-1">Online</p>

                            </div>
                        </div>
                        <div class="flex gap-2.5">
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9">
                                <router-link to="/video-calling" class="nav-item">
                                    <icon-video class="size-5" />
                                </router-link>
                            </button>
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9">
                                <icon-call class="size-4" />
                            </button>
                            <button type="button" class="btn btn-linear p-[7px] text-black size-8 sm:size-9">
                                <icon-more class="size-5" />
                            </button>
                        </div>
                    </div>

                </div>
                <div ref="messagesContainer" class="grow p-5 space-y-2.5 overflow-auto">
                    <div v-for="message in messages" :key="message.id">
                        <!-- Message Content -->
                        <div :class="[
                            'max-w-[600px] w-full px-4 py-2.5 relative mb-6',
                            message.send_by_me
                                ? 'ml-auto rounded-l-lg rounded-br-lg bg-primary/30 ring-1 ring-primary text-black'
                                : 'rounded-r-lg rounded-bl-lg bg-gray-400 text-black'
                        ]">
                            <span>{{ message.message }}</span>
                            <div v-if="message.reaction"
                                class="h-[22px] bg-white rounded-full min-w-[22px] grid place-content-center text-xs font-semibold text-black px-1 absolute"
                                :class="message.send_by_me ? 'right-2.5 -bottom-3.5' : 'left-2.5 -bottom-3.5'">
                                {{ message.reaction }}
                            </div>
                        </div>

                        <!-- Optional Image -->
                        <div v-if="message.image" class="mb-2.5 w-[200px] rounded-lg overflow-hidden">
                            <img :src="message.image" alt="chat image">
                        </div>

                        <!-- Timestamp -->
                        <p :class="[
                            'text-xs font-semibold',
                            message.send_by_me ? 'text-right text-gray-300' : 'text-gray-300'
                        ]">
                            {{ formatTime(message.created_at) }}
                        </p>
                    </div>
                </div>

                <div class="sticky bottom-0 p-3 sm:p-4 bg-gray-200">
                    <div class="relative">
                        <input v-on:keyup.enter="sendMessage" v-model="newMessage" type="text"
                            class="form-input py-4 pr-[165px]" placeholder="Write your message!">
                        <div class="flex items-center gap-2 sm:gap-4 absolute right-3 top-1/2 -translate-y-1/2">
                            <!-- <button type="button">
                                <icon-camera class="size-5 text-gray-300 hover:text-black transition" />
                            </button>
                            <button type="button">
                                <icon-smile-emoji class="size-5 text-gray-300 hover:text-black transition" />
                            </button>
                            <button type="button">
                                <icon-attachment class="size-5 text-gray-300 hover:text-black transition" />
                            </button> -->
                            <!-- <span class="h-3.5 w-0.5 bg-primary rounded-full"></span> -->
                            <button @click.prevent="sendMessage" type="button">
                                <icon-send class="size-5 text-black hover:opacity-90 transition" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import IconSearch from '@/components/icon/icon-search.vue';
import IconAttachment from '@/components/icon/icon-attachment.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconDoubleCheck from '@/components/icon/icon-double-check.vue';
import IconVideo from '@/components/icon/icon-video.vue';
import IconCall from '@/components/icon/icon-call.vue';
import IconMore from '@/components/icon/icon-more.vue';
import IconCamera from '@/components/icon/icon-camera.vue';
import IconSmileEmoji from '@/components/icon/icon-smile-emoji.vue';
import IconSend from '@/components/icon/icon-send.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default {
    components: {
        IconSearch, IconAttachment, IconCheck, IconDoubleCheck,
        IconVideo, IconCall, IconMore, IconCamera, IconSmileEmoji, IconSend,
        IconMenu
    },
    data() {
        return {
            activeDropdown: '',
            rooms: [],
            loadingChatRooms: false,
            loadingMessages: false,
            messages: [],
            currentRoomId: null,
            currentRoomName: null,
            newMessage: '',
            echoInstance: null, // To manage the Echo instance
            activeChannel: null, // To keep track of the current channel
            currentUserId: null,
        };
    },

    async mounted() {
        await this.loadCurrentUserId();
        await this.loadChatRooms();
    },

    methods: {
        async loadCurrentUserId() {
            this.currentUserId = this.$store.getters.user.id; 
        },
        async loadChatRooms() {
            this.loadingChatRooms = true;
            const response = await axios.get(`/chat/rooms`);
            this.rooms = response.data.data.rooms;
            this.loadingChatRooms = false;
        },

        formatTime(time) {
            const date = new Date(time);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        },

        initialiseEchoListener() {
            // If there's already an active channel, leave it
            if (this.activeChannel) {
                console.log('Removing existing listener:', { channel: this.activeChannel });
                this.echoInstance.leave(this.activeChannel);
            }

            // Set up the new channel
            this.activeChannel = `conversation.${this.currentRoomId}`;
            console.log('Attaching listener:', { channel: this.activeChannel });

            // If echoInstance doesn't exist, initialize it
            if (!this.echoInstance) {
                this.echoInstance = new Echo({
                    broadcaster: 'pusher',
                    key: '090c5de6a8fee4290703',
                    cluster: 'eu' ?? 'mt1',
                    wsHost: `ws-eu.pusher.com`,
                    wsPort: 443,
                    wssPort: 443,
                    forceTLS: true,
                    enabledTransports: ['ws', 'wss'],
                    authEndpoint: 'http://localhost:8000/api/v1/user/broadcasting-auth',
                    auth: {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                            Accept: 'application/json',
                        },
                    },
                });
            }

            // Listen to the new channel
            this.echoInstance.private(this.activeChannel)
                .listen('NewChatMessageEvent', (event) => {
                    console.log('New message received:', {
                        eventObject: event,
                        messageUserId: event.user_id,
                        currentUserId: this.currentUserId,
                    });

                    // Update messages if the event comes from another user
                    if (Number(this.currentUserId) !== Number(event.user_id)) {
                        const message = { ...event.data, send_by_me: false };
                        this.messages.push(message);
                        this.$nextTick(() => {
                            this.scrollToBottom();
                        });
                    }
                });
        },


        async openRoom(room) {
            this.loadingMessages = true;
            const response = await axios.get(`/chat/rooms/${room.id}/messages`);
            // Reverse the messages so the new ones are at the bottom
            this.messages = response.data.data.reverse();
            this.currentRoomId = room.id;
            this.loadingMessages = false;
            this.currentRoomName = room.name;

            // Scroll to the bottom when the chat room is loaded
            this.$nextTick(() => {
                this.scrollToBottom();
            });

            // Initialise the echo listener
            this.initialiseEchoListener();
        },


        async sendMessage() {
            if (!this.newMessage.trim()) return; // Avoid sending empty messages

            const tempMessage = {
                id: Date.now(), // Temporary ID
                message: this.newMessage,
                send_by_me: true,
                created_at: new Date().toISOString(),
            };

            // Clear the input field
            this.newMessage = '';

            // Add the new message to the state immediately
            this.messages.push(tempMessage);

            // Scroll to the bottom when a new message is sent
            this.$nextTick(() => {
                this.scrollToBottom();
            });

            try {
                const response = await axios.post(`/chat/rooms/${this.currentRoomId}/message`, {
                    message: tempMessage.message,
                });

                // Replace the temp message with the one from the server (to update ID and timestamp)
                const index = this.messages.findIndex((msg) => msg.id === tempMessage.id);
                if (index !== -1) {
                    this.messages.splice(index, 1, {
                        ...tempMessage,
                        id: response.data.data.id, // Update with real ID from the server
                        created_at: response.data.data.created_at, // Update with server timestamp
                    });
                }
            } catch (error) {
                console.error('Error sending chat message:', error);

                // Optionally handle the error (e.g., show a notification or remove the temp message)
                const index = this.messages.findIndex((msg) => msg.id === tempMessage.id);
                if (index !== -1) {
                    this.messages.splice(index, 1); // Remove the temp message on failure
                }
            }
        },

        scrollToBottom() {
            const container = this.$refs.messagesContainer;
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        }
    },
};
</script>
