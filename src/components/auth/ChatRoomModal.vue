<template>
    <div>
        <a href="#" class="btn py-[5px]" @click.prevent="openMessages">Message</a>

        <TransitionRoot appear :show="isModalVisible" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-black/60" />
                </TransitionChild>
                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center px-4 py-8">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="mx-auto w-[80%] max-w-none rounded-lg bg-white p-6 text-gray-900 shadow-3xl max-h-screen flex flex-col">
                                <slot />

                                <!-- Chat Interface -->
                                <div class="grow overflow-hidden rounded-lg bg-white shadow-3xl flex flex-col">
                                    <!-- Chat Header -->
                                    <div class="sticky top-0 p-3 sm:p-4 bg-gray-200 z-10">
                                        <div class="flex gap-2.5 justify-between items-center">
                                            <div class="flex gap-2.5">
                                                <button type="button"
                                                    class="btn btn-linear p-[7px] text-black size-8 sm:size-9 md:hidden">
                                                    <icon-menu class="size-5" />
                                                </button>
                                                <div class="size-10 rounded-lg object-cover shrink-0 relative">
                                                    <img src="/assets/images/profile.png" alt="profile">
                                                    <div
                                                        class="absolute -top-0.5 -right-0.5 size-[9px] rounded-full bg-success border-2">
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 class="text-black line-clamp-1 font-semibold">Courtney Henry
                                                    </h3>
                                                    <p class="mt-1.5 text-gray text-xs line-clamp-1">Online</p>
                                                </div>
                                            </div>
                                            <div class="flex gap-2.5">
                                                <button type="button" @click="closeModal" class="btn btn-secondary">
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Chat Messages Area -->
                                    <div ref="messagesContainer" class="grow p-5 space-y-2.5 overflow-auto">
                                        <div v-for="(msg, index) in messages" :key="msg.id">
                                            <!-- Other user's message -->
                                            <div v-if="!msg.send_by_me"
                                                class="max-w-[600px] w-full px-4 py-2.5 rounded-r-lg rounded-bl-lg bg-gray-400 text-[13px]/[22px] text-black relative mb-6">
                                                <span>{{ msg.message }}</span>
                                            </div>
                                            <p v-if="!msg.send_by_me" class="text-xs font-semibold text-gray-300">
                                                {{ new Date(msg.created_at).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) }}
                                            </p>

                                            <!-- My message -->
                                            <div v-else
                                                class="max-w-[600px] ml-auto w-full px-4 py-2.5 rounded-l-lg rounded-br-lg bg-primary/30 ring-1 ring-primary text-[13px]/[22px] text-black relative mb-6">
                                                <span>{{ msg.message }}</span>
                                            </div>
                                            <p v-if="msg.send_by_me"
                                                class="text-xs font-semibold text-right text-gray-300">
                                                {{ new Date(msg.created_at).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) }}
                                            </p>
                                        </div>
                                    </div>

                                    <!-- Input Area -->
                                    <div class="sticky bottom-0 p-3 sm:p-4 bg-gray-200 z-10">
                                        <div class="relative">
                                            <input type="text" class="form-input py-4 pr-[165px]" v-model="newMessage"
                                                v-on:keyup.enter="sendMessage" placeholder="Write your message!">
                                            <div
                                                class="flex items-center gap-2 sm:gap-4 absolute right-3 top-1/2 -translate-y-1/2">
                                                <!-- <button type="button">
                                                    <icon-camera
                                                        class="size-5 text-gray-300 hover:text-black transition" />
                                                </button>
                                                <button type="button">
                                                    <icon-smile-emoji
                                                        class="size-5 text-gray-300 hover:text-black transition" />
                                                </button>
                                                <button type="button">
                                                    <icon-attachment
                                                        class="size-5 text-gray-300 hover:text-black transition" />
                                                </button> -->
                                                <!-- <span class="h-3.5 w-0.5 bg-primary rounded-full"></span> -->
                                                <button type="button" @click.prevent="sendMessage">
                                                    <icon-send class="size-5 text-black hover:opacity-90 transition" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>

                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import axios from 'axios';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from "@headlessui/vue";
import IconSend from '@/components/icon/icon-send.vue';
import IconAttachment from '@/components/icon/icon-attachment.vue';
import IconCamera from '@/components/icon/icon-camera.vue';
import IconSmileEmoji from '@/components/icon/icon-smile-emoji.vue';
import IconMenu from '@/components/icon/icon-menu.vue';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

export default {
    props: {
        swapId: {
            type: Number,
            required: true
        },
        userId: {
            type: Number,
            required: true
        },
    },

    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogOverlay,
        IconAttachment,
        IconCamera,
        IconSmileEmoji,
        IconSend,
        IconMenu
    },

    data() {
        return {
            isModalVisible: false,
            newMessage: '',
            chatUUID: null,
            messages: [],
            currentUserId: null,
        };
    },

    methods: {
        initialiseEchoListener() {
            console.log('Attaching listener', {
                listener: `conversation.${this.chatUUID}`,
                userId: this.userId,
                chatUUID: this.chatUUID,
            })

            const echo = new Echo({
                broadcaster: 'pusher',
                key: '090c5de6a8fee4290703',
                cluster: 'eu' ?? 'mt1',
                wsHost: `ws-eu.pusher.com`,
                wsPort: 443,
                wssPort: 443,
                forceTLS: 'https',
                enabledTransports: ['ws', 'wss'],
                authEndpoint: 'http://localhost:8000/api/v1/user/broadcasting-auth',
                auth: {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        Accept: 'application/json',
                    },
                },
            })
            echo.private(`conversation.${this.chatUUID}`)
                .listen('NewChatMessageEvent', (event) => {
                    console.log('New message received:', {
                        eventData: event,
                        currentUserId: this.currentUserId,
                    });

                    if (Number(this.currentUserId) !== Number(event.user_id)) {
                        console.log('Someone else sent the message.');
                        let message = event.data;
                        message.send_by_me = false;
                        this.messages.push(message);
                        this.$nextTick(() => {
                            this.scrollToBottom();
                        });
                    } else {
                        console.log('I sent the message.');
                    }
                });

        },
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        async openMessages() {
            this.openModal();
            try {
                const response = await axios.get(`/chat/rooms/by-swap/${this.swapId}/messages`);
                console.log('Swap-specific chat room messages:', response.data.data.currentUserId);

                // Reverse the messages so the new ones are at the bottom
                this.messages = response.data.data.messages.reverse();
                this.chatUUID = response.data.data.chat_uuid;
                this.currentUserId = response.data.data.currentUserId;

                this.initialiseEchoListener();

                // Scroll to the bottom once messages are loaded
                this.$nextTick(() => {
                    this.scrollToBottom();
                });
            } catch (error) {
                console.error('Error fetching chat room messages:', error);
            }
        },

        async sendMessage() {
            if (!this.newMessage.trim()) return; // Avoid sending empty messages

            const tempMessage = {
                id: Date.now(), // Temporary ID
                message: this.newMessage,
                send_by_me: true,
                created_at: new Date().toISOString(),
            };

            

            // Add the new message to the state immediately
            this.messages.push(tempMessage);

            // Scroll to the bottom when a new message is sent
            this.$nextTick(() => {
                this.scrollToBottom();
            });

            try {
                const response = await axios.post(`/chat/rooms/by-swap/${this.swapId}/message`, {
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


    }
}
</script>
