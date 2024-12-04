<template>
    <div class="space-y-5">
        <div class="flex flex-col gap-4 rounded-lg bg-white px-5 py-4 shadow-3xl md:flex-row md:items-center">
            <div class="shrink-0 text-base/5 font-semibold text-black">{{ $t('event_and_workshop') }}</div>
            <div class="flex flex-wrap items-center gap-4 md:ml-auto">
                <div class="relative max-w-[200px]">
                    <icon-search class="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                    <input type="text" :placeholder="$t('search')" class="form-input py-[7px] pl-9" />
                </div>
                <button type="button" @click="CreateEvent = true" class="btn">
                    <icon-close-round class="shrink-0 rotate-45" />
                    <span>{{ $t('create_new_event') }}</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-4 lg:flex-row">
            <div class="h-fit grow rounded-lg bg-white shadow-3xl">
                <!-- <EventCalander/> -->
            </div>
            <div class="overflow-y-auto lg:w-[359px]">
                <div class="flex h-fit shrink-0 flex-col rounded-lg bg-white py-5 px-2.5 shadow-3xl">
                    <h2 class="shrink-0 font-semibold text-black px-2.5">{{ $t('upcoming_event') }}</h2>
                    <div class="mt-1">
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-gray-400">
                                <p class="text-xs/[15px] font-bold text-black">27</p>
                                <span class="text-[10px]/3 font-semibold">Mar</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Helping a local business</h3>
                                <p class="line-clamp-1 text-xs/4">Duis ac augue ut lectus congue luctus.</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#DCFCE7]">
                                <p class="text-xs/[15px] font-bold text-black">28</p>
                                <span class="text-[10px]/3 font-semibold">Mar</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Caring is the new marketing</h3>
                                <p class="line-clamp-1 text-xs/4">Integer id augue iaculis, iaculis orci ut.</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#FFEDD5]">
                                <p class="text-xs/[15px] font-bold text-black">29</p>
                                <span class="text-[10px]/3 font-semibold">Mar</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Donec laoreet ante eu</h3>
                                <p class="line-clamp-1 text-xs/4">Interdum et malesuada .</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#E0F2FE]">
                                <p class="text-xs/[15px] font-bold text-black">30</p>
                                <span class="text-[10px]/3 font-semibold">Mar</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Fusce ac tellus at lacus cursus pretium.</h3>
                                <p class="line-clamp-1 text-xs/4">Integer id augue iaculis, iaculis orci ut.</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#F1F5F9]">
                                <p class="text-xs/[15px] font-bold text-black">31</p>
                                <span class="text-[10px]/3 font-semibold">Mar</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Starting your traveling blog</h3>
                                <p class="line-clamp-1 text-xs/4">Proin id ligula dictum, convallis enim ut.</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#F1F5F9]">
                                <p class="text-xs/[15px] font-bold text-black">01</p>
                                <span class="text-[10px]/3 font-semibold">Feb</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Fusce ac tellus at lacus</h3>
                                <p class="line-clamp-1 text-xs/4">Phasellus accumsan imperdiet tempor.</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#F1F5F9]">
                                <p class="text-xs/[15px] font-bold text-black">01</p>
                                <span class="text-[10px]/3 font-semibold">Feb</span>
                            </div>
                            <div class="grow border-b border-gray-100 py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Fusce ac tellus at lacus</h3>
                                <p class="line-clamp-1 text-xs/4">Phasellus accumsan imperdiet tempor.</p>
                            </div>
                        </div>
                        <div class="relative flex items-center gap-2.5 px-2.5 hover:bg-gray-200 rounded-lg transition">
                            <a href="#" class="absolute inset-0"></a>
                            <div
                                class="flex size-10 shrink-0 flex-col items-center justify-center rounded-lg bg-[#F1F5F9]">
                                <p class="text-xs/[15px] font-bold text-black">01</p>
                                <span class="text-[10px]/3 font-semibold">Feb</span>
                            </div>
                            <div class="grow py-4">
                                <h3 class="mb-1.5 line-clamp-1 text-black">Fusce ac tellus at lacus</h3>
                                <p class="line-clamp-1 text-xs/4">Phasellus accumsan imperdiet tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TransitionRoot appear :show="CreateEvent" as="template">
            <Dialog as="div" @close="CreateEvent = false" class="relative z-50">
                <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                    enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay class="fixed inset-0 bg-[black]/60" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center px-4 py-8">
                        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100" leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                            <DialogPanel
                                class="relative w-full max-w-[400px] rounded-lg bg-white text-sm/[18px] font-medium text-gray">
                                <button type="button" class="absolute right-4 top-4 text-black hover:opacity-80"
                                    @click="CreateEvent = false">
                                    <icon-close-round class="size-5" />
                                </button>
                                <div class="border-b border-gray-100 p-4 pr-10 text-base/5 font-semibold text-black">
                                    <h2>{{ $t('create_new_event') }}</h2>
                                </div>
                                <div class="divide-y divide-gray-100 p-5">
                                    <div class="space-y-5">
                                        <div>
                                            <label class="mb-2.5 inline-block text-black">New event title</label>
                                            <input type="text" v-model="eventTitle" placeholder="Event title"
                                                class="form-input" />
                                        </div>
                                        <div>
                                            <label class="mb-2.5 inline-block text-black">Date</label>
                                            <div class="">
                                                <input type="date" v-model="eventDate" placeholder="Event title"
                                                    class="form-input" />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="mb-2.5 inline-block text-black">Add time</label>
                                            <div class="flex items-center gap-2.5">
                                                <input type="time" placeholder="Event title" v-model="startTime"
                                                    class="form-input" />
                                                <icon-arrow-border class="shrink-0" />
                                                <input type="time" placeholder="Event title" v-model="endTime"
                                                    class="form-input" />
                                            </div>
                                            <div class="grid grid-cols-2 gap-[30px] py-5">
                                                <label class="inline-flex cursor-pointer items-center gap-2.5">
                                                    <input type="checkbox" v-model="allDay" value=""
                                                        class="peer sr-only" checked />
                                                    <div
                                                        class="peer relative h-5 w-9 rounded-full bg-white shadow-3xl ring-1 ring-gray-100 after:absolute after:start-[1.5px] after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-gray-100 after:transition-all after:content-[''] peer-checked:bg-success peer-checked:ring-transparent peer-checked:after:translate-x-full peer-checked:after:bg-white">
                                                    </div>
                                                    <span class="text-black">All day</span>
                                                </label>
                                                <button type="button"
                                                    class="inline-flex items-center gap-2.5 text-black hover:opacity-80">
                                                    <icon-repeats />
                                                    <span>Repeat</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="py-5">
                                        <label class="mb-2.5 inline-block text-black">Add participant</label>
                                        <div class="relative">
                                            <multiselect v-model="participants" placeholder="Add participant" label="name" track-by="code" :options="options" :multiple="true" @update:modelValue="addTag"></multiselect>

                                             <!-- <multiselect v-model="participants" placeholder="Add participant" label="title" track-by="name" :options="options"
                                                            :multiple="true" :taggable="true"   @update:modelValue="addTag">
                                                <template #option="props">
                                                    <img class="option__image" :src="props.option.image" :alt="props.option.name"/>
                                                    <div class="option__desc">
                                                        <span class="option__title">{{ props.option.name }}</span>
                                                        <span class="option__small">{{ props.option.id }}</span>
                                                    </div>
                                                </template>
                                            </multiselect> -->
                                            <!-- <pre class="language-json"><code>{{ value }}</code></pre> -->
                                            <button type="button"
                                                class="absolute right-3 top-1/2 size-[18px] -translate-y-1/2 text-black hover:opacity-80 transition">
                                                <icon-add-people />
                                            </button>
                                        </div>
                                        <!-- <label class="mb-2.5 inline-block text-black">Add participant</label>
                                        <div class="relative">
                                            <input type="text" v-model="participant" placeholder="Add participant"
                                                class="form-input" />
                                            <button type="button"
                                                class="absolute right-3 top-1/2 size-[18px] -translate-y-1/2 text-black hover:opacity-80 transition">
                                                <icon-add-people />
                                            </button>
                                        </div> -->
                                        <div class="mt-4 flex flex-wrap gap-4">
                                            <div v-for="(participant, i) in participants" :key="i" class="relative">
                                                <div class="size-[50px] shrink-0 overflow-hidden rounded-lg">
                                                    <img src="/assets/images/profile.png" alt="User Profile"
                                                        class="h-full w-full" />
                                                    <!-- <img :src="[participant.image ? participant.image : '/assets/images/profile.png' ]" alt="User Profile"
                                                        class="h-full w-full" /> -->
                                                </div>
                                                <!-- <button type="button"
                                                    class="absolute -right-1.5 -top-1 transition hover:opacity-80">
                                                    <icon-close-bg class="size-[18px] shrink-0" />
                                                </button> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space-y-2.5 py-5">
                                        <label class="block text-black">Add locations</label>
                                        <div
                                            class="inline-flex items-center gap-5 rounded-lg px-3 py-[9px] ring-1 ring-gray-100">
                                            <div class="flex items-center gap-2 ">
                                                <label class="cursor-pointer">
                                                    <input type="radio" value="virtual" v-model="eventLocation"
                                                    class="size-3 border-gray-300 accent-black focus-visible:outline-none" checked="checked"/>
                                                    Virtual
                                               </label>
                                            </div>
                                            <span class="h-4 w-0.5 rounded-full bg-gray-100"></span>
                                            <div class="flex items-center gap-2">
                                                <label class="cursor-pointer">
                                                    <input type="radio" value="physical" v-model="eventLocation"
                                                    class="size-3 border-gray-300 accent-black focus-visible:outline-none" />
                                                    Physical
                                                </label>
                                            </div>
                                        </div>

                                        <div class="relative" v-if="eventLocation == 'virtual'">
                                            <select class="form-select" v-model="meetingType">
                                                <option value="zoom">Zoom meeting</option>
                                                <option value="google_meet">Google meeting</option>
                                            </select>
                                            <icon-arrow-down
                                                class="pointer-events-none absolute right-0 top-1/2 h-auto w-9 -translate-y-1/2 rounded-r-lg border-l border-gray-100 bg-gray-200 p-2.5 text-black" />

                                            <button type="button"
                                                class="absolute right-[46px] top-1/2 z-[1] inline-block h-auto -translate-y-1/2 hover:opacity-80">
                                                <icon-video class="size-4 text-black" />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="py-5">
                                        <label class="mb-2.5 inline-block text-black">Event color</label>
                                        <div class="flex flex-wrap gap-2.5">
                                            <button type="button" @click="selectColor('danger')"
                                                class="grid size-6 place-content-center rounded-lg bg-danger">
                                                <icon-check v-if="selectedColor === 'danger'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('orange')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-orange">
                                                <icon-check v-if="selectedColor === 'orange'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('#84CC16')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-[#84CC16]">
                                                <icon-check v-if="selectedColor === '#84CC16'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('success')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-success">
                                                <icon-check v-if="selectedColor === 'success'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('#0EA5E9')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-[#0EA5E9]">
                                                <icon-check v-if="selectedColor === '#0EA5E9'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('#6366F1')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-[#6366F1]">
                                                <icon-check v-if="selectedColor === '#6366F1'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('#8B5CF6')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-[#8B5CF6]">
                                                <icon-check v-if="selectedColor === '#8B5CF6'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('#EC4899')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-[#EC4899]">
                                                <icon-check v-if="selectedColor === '#EC4899'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('#64748B')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-[#64748B]">
                                                <icon-check v-if="selectedColor === '#64748B'"
                                                    class="size-4 text-white" />
                                            </button>
                                            <button type="button" @click="selectColor('black')"
                                                class="grid size-[26px] place-content-center rounded-lg bg-black">
                                                <icon-check v-if="selectedColor === 'black'"
                                                    class="size-4 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex justify-end gap-4 pt-5">
                                        <button type="button" @click="CreateEvent = false" class="btn btn-linear">
                                            {{ $t('cancel') }}
                                        </button>
                                        <button type="button" @click="createEventWorks" class="btn">{{ $t('save') }}</button>
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
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import toastr from 'toastr';
import { onMounted } from 'vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconSearch from '@/components/icon/icon-search.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';
import IconArrowBorder from '@/components/icon/icon-arrow-border.vue';
import IconRepeats from '@/components/icon/icon-repeats.vue';
import IconAddPeople from '@/components/icon/icon-add-people.vue';
import IconCloseBg from '@/components/icon/icon-close-bg.vue';
import IconCheck from '@/components/icon/icon-check.vue';
import IconVideo from '@/components/icon/icon-video.vue';
import Multiselect from 'vue-multiselect';
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogOverlay } from '@headlessui/vue';
// import EventCalander from '@/components/common/EventCalender.vue';

const CreateEvent = ref(false);
const eventTitle = ref('');
const eventDate = ref('');
const startTime = ref('');
const endTime = ref('');
const allDay = ref(0);
const participant = ref('');
const participants = ref([]);
const participantsNew = ref([]);
const eventLocation = ref('virtual');
const meetingType = ref('zoom');
const selectedColor = ref('');
const options= ref([]);

const getParticipants = async () => {
    try {
        const response = await axios.get('/skill/participants');
        response.data.data.swaps.forEach((participant) => {
            options.value.push({image: participant.user.avatar, name: participant.user.username, id:participant.user.id});
        });
        function getUniqueListBy(arr, key) {
            return [...new Map(arr.map(item => [item[key], item])).values()]
        }
        const arr1 = getUniqueListBy(options.value, 'name')
        options.value = [];
        arr1.forEach((participant) => {
            options.value.push({id: participant.id, image: participant.image, name: participant.name});
        });
    } catch (error) {
        console.error('Error :', error);
    }
};

// Call function when the component is mounted
onMounted(() => {
  getParticipants();
});

const selectColor = (color) => {
    selectedColor.value = color;
};

const addTag = (newTag) => {
    participantsNew.value = [];
    participants.value = [];
    for (let [key, value] of Object.entries(newTag)) {
        console.log('newTag---',newTag);
        participantsNew.value.push(value.id);
        participants.value.push({id: value.id, image: value.image, name: value.name});
    }
    console.log('participantsNew---',participantsNew);
};

const addParticipant = () => {
    if (participant.value) {
        participants.value.push({ image: 'path/to/default/image.jpg', name: participant.value });
        participant.value = '';
    }
};

const removeParticipant = (index) => {
    participants.value.splice(index, 1);
};

const createEventWorks = async () => {
    // Create a new FormData object
    const formData = new FormData();

    console.log(eventTitle.value)
    // Append form data to FormData object
    formData.append('title', eventTitle.value);

    formData.append('date', eventDate.value);
    formData.append('from_time', startTime.value);
    formData.append('end_time', endTime.value);
    formData.append('all_day', allDay.value ? 1 : 0);
    participantsNew.value.forEach((participant, key) => {
        formData.append('participants['+key+']', participant);
    });
    // formData.append('participants', JSON.stringify(participants.value)); // Assuming participants is an array
    formData.append('location_type', eventLocation.value);
    if (eventLocation.value == "virtual") {
        formData.append('meeting_type', meetingType.value);
    }
    formData.append('color', selectedColor.value);

    // for (let pair of formData.entries()) {
    //     console.log(pair[0] + ': ' + pair[1]);
    // }

    try {
        // Send POST request with FormData
        const response = await axios.post('/events/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Form submitted successfully:', response.data);
        toastr.success('Feedback submitted successfully');
        CreateEvent = false;
    } catch (error) {
        console.error('Error submitting form:', error);
        toastr.error('Something went wrong. Please try again later');
    }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
    .multiselect__select {
        display: none;
    }
    .multiselect__tag {
        background: #070708;
    }
    .multiselect__tag-icon::after {
        color: #ffffff;
    }
    .multiselect__option--highlight {
        background: #070708;
        color: #fff;
    }
</style>
