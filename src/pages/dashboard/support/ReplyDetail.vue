<template>
    <div id="toolbar" class="border-[1px] w-full shadow-3xl rounded-lg min-h-[128px] border-[#e2e5ec] flex flex-col">
        <div id="body" :style="{ 'min-height': `${height}px` }">
            <div id="editor" ref="editor" @mouseup="saveSelection" @keyup="saveSelection" contenteditable
                :style="{ 'min-height': `${height}px` }">Please reply ticket</div>
        </div>
        <div class="flex justify-start items-center px-2  h-[52px] border-t-[1px] border-[#e2e4e9]">
            <div class="flex gap-[10px]">
                <button class="relative" @click.prevent="insertImage">
                    <img src="/assets/images/Image-icon.jpg" alt="image-icon">
                </button>
                <button class="wysiwyg-button relative " @click.prevent="toggleEmoticonList">
                    <img src="/assets/images/Emoji.jpg" alt="image-icon">
                    <div v-if="showEmoticonList" ref="emoticonList" class="emoticon-list">
                        <span v-for="emoticon in emoticons" :key="emoticon" @click="insertEmoticon(emoticon)">
                            {{ emoticon }}
                        </span>
                    </div>
                </button>
            </div>
        </div>
        <div class="px-5 pb-5">
            <!-- <h3 class="mb-1.5 text-black">{{ $t('file') }}</h3> -->
            <div class="rounded-lg border-2 border-dashed border-gray-100 px-5 py-[25px]">
                <button type="button" class="btn btn-linear relative mx-auto px-2.5 py-2 text-black">
                    <input @change="onFileChange" ref="fileInput" type="file"
                        class="absolute inset-0 cursor-pointer opacity-0" />
                    <icon-Close-round class="size-[18px] rotate-45" />
                    <span>Add file</span>
                </button>
            </div>
        </div>
    </div>
    <input class="hidden" id="file" type="file" v-on:change="fileUpload" multiple>
    <div class="flex justify-end items-center px-2  h-[52px]">
        <button type="button" @click="replyTicket" class="btn">
            <span>Reply</span>
        </button>
    </div>

</template>

<script>
import 'vue-material-design-icons/styles.css';
import axios from 'axios';
import IconFile from '@/components/icon/icon-file.vue';
import IconArrowDown from '@/components/icon/icon-arrow-down.vue';
import IconCloseRound from '@/components/icon/icon-close-round.vue';

export default {
    components: {
        IconFile, IconArrowDown, IconCloseRound,
    },
    props: {
        ticketId: {
            required: true
        },
        height: {
            type: [Number, String],
            default: 128
        },
    },
    data() {
        return {
            caratSelection: null,
            savedPosition: null,
            showEmoticonList: false,
            emoticons: ['😀', '😂', '😍', '👍', '🙌', '🎉', '🤔', '😎', '😀', '😂', '😍', '👍', '🙌', '🎉', '🤔', '😎', '😀', '😂', '😍', '👍', '🙌', '🎉', '🤔', '😎', '😀', '😂', '😍', '👍', '🙌', '🎉', '🤔', '😎'],
            savedRange: null,
            attachments: [],
            selectedFile: null
        };
    },
    computed: {
        user() {
            return this.$store.getters.user;
        },

    },
    watch: {
        value: {
            handler(val) {
                if (val) {
                    setTimeout(() => {
                        if (!document.getElementById('editor').innerHTML) {
                            document.getElementById('editor').innerHTML = val;
                        }
                    }, 100);
                }
            },
            immediate: true
        }
    },
    methods: {
        onFileChange(event) {
            this.selectedFile = this.$refs.fileInput.files[0]; // Store the file in your data object

        },

        async replyTicket() {
            const editorContent = this.$refs.editor.innerHTML;
            console.log(this.$refs.fileInput)
            try {
                const file = this.$refs.fileInput.files[0];
                const formData = new FormData();
                formData.append('description', editorContent);
                if (this.selectedFile) {
                    formData.append('file', selectedFile);
                }
                const response = await axios.post(`/support/tickets/${this.ticketId}/reply`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('post submitted successfully:', response.data);
                if (response.data.status_code == 200) {
                    this.$toastr.success('Reply submitted successfully');
                    // this.$emit('updateValue', false);
                    this.$refs.editor.innerHTML = "Please reply ticket"
                } else if (response.data.status_code == 422) {
                    this.$toastr.error(response.data.message);
                } else if (response.data.status_code == 400) {
                    this.$toastr.error(response.data.message);
                } else {
                    this.$toastr.error('Something went wrong. Please try again later');
                }
            } catch (error) {
                this.$toastr.error('Error submitting post');
            }
        },
        toggleEmoticonList() {
            this.showEmoticonList = !this.showEmoticonList; // Toggle emoticon list visibility

            // If showing the emoticon list, add a click event listener to the document
            if (this.showEmoticonList) {
                document.addEventListener('click', this.handleClickOutside);
            } else {
                document.removeEventListener('click', this.handleClickOutside); // Remove the listener when hidden
            }
        },

        saveSelection() {
            const selection = window.getSelection();  // Get the current selection
            if (selection.rangeCount > 0) {
                this.savedRange = selection.getRangeAt(0);  // Save the current range (cursor position)
            }
        },
        restoreSelection() {
            const selection = window.getSelection();  // Get the current selection
            if (this.savedRange) {
                selection.removeAllRanges();  // Clear any existing selections
                selection.addRange(this.savedRange);  // Restore the saved range (cursor position)
            }
        },

        insertEmoticon(emoticon) {
            this.restoreSelection();  // Restore the cursor position before inserting
            const range = this.savedRange;  // Get the saved range
            if (!range) return;  // If no range is saved, do nothing

            range.deleteContents();  // Remove any selected text
            const emoticonNode = document.createTextNode(emoticon);  // Create a text node with the emoticon
            range.insertNode(emoticonNode);  // Insert the emoticon at the cursor position

            // Update the cursor position to be after the inserted emoticon
            range.setStartAfter(emoticonNode);
            range.setEndAfter(emoticonNode);
            this.savedRange = range;  // Save the new range
            this.showEmoticonList = false;  // Hide the emoticon list after inserting
        },
        handleClickOutside(event) {
            const emoticonList = this.$refs.emoticonList; // Reference to the emoticon list
            if (emoticonList && !emoticonList.contains(event.target) && !event.target.closest('.wysiwyg-button')) {
                // Check if the click is outside the emoticon list and button
                this.showEmoticonList = false; // Hide the emoticon list
                document.removeEventListener('click', this.handleClickOutside); // Remove the event listener
            }
        },
        fileUpload(event) {
            const file = event.target.files[0];
            this.fileAdded(file)
            this.attachments = Array.from(event.target.files);
        },
        insertImage() {
            const fileInput = document.getElementById("file")
            fileInput.click();
        },
        fileAdded(file) {
            document.getElementById('editor').focus();
            // if no upload url is defined, insert image with base64 src
            if (!file)
                return;

            const reader = new FileReader();

            reader.addEventListener("load", () => {
                this.exec('insertHTML', false, `<img src=${reader.result}>`);
            }, false);

            reader.readAsDataURL(file);
        },
        exec(...args) {
            document.execCommand(...args);
        },
        getValue() {
            this.$emit('input', document.getElementById('editor').innerHTML);
        },
    },
    mounted() {
        let that = this;
        this.$nextTick(() => {
            document.getElementById('editor').addEventListener('input', function () {
                that.getValue();
            }, false);
        });
    },
}
</script>

<style scoped>
input {
    margin: 4px;
    padding: 2px;
    border: 1px solid lightgrey;
}

input:focus {
    outline: none;
}

#container {
    border: 1px solid lightgrey;
}

#body {
    overflow: auto;
    display: inline-block;
    width: 100%
}

#editor {
    padding: 10px;
}

#toolbar {
    min-height: 29px;
    border-bottom: 1px solid lightgrey;
    background-color: rgb(247, 247, 247);
}

#toolbar-options {
    min-height: 29px;
    border-bottom: 1px solid lightgrey;
    overflow: hidden;
}

#editor:focus {
    outline: none;
}

.toolbar-section {
    float: left;
    border-right: 1px solid lightgrey;
}

.wysiwyg-button {
    height: 28px;
    min-width: 30px;
    background-color: transparent;
    text-align: center;
    padding: 2px;
}

/* .wysiwyg-button:hover {
    background-color: lightblue;
} */

.wysiwyg-button-active {
    background-color: lightblue;
}

.wysiwyg-button-loop {
    margin-right: 4px;
}

.hoverTableCont {
    width: 230px;
    margin-right: 30px;
    float: left;
    padding: 15px 0px 0px 15px;
}

.hoverCell {
    border: 1px solid #aaa;
    height: 16px;
    width: 16px;
    margin: 0 1px 1px 0;
    float: left;
    cursor: pointer;
}

.hoverCell:hover {
    background-color: #4b67a1 !important;
}

.hoverRow {
    display: block;
    clear: both;
}

.highlightCell {
    background-color: #d1e0ff;
}

.emoticon-list {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid lightgrey;
    padding: 10px;
    margin-top: 10px;
    background-color: white;
    position: absolute;
    bottom: 35px;
    left: 0px;
    width: 300px;

}

.emoticon-list span {
    cursor: pointer;
    margin: 5px;
    font-size: 20px;
}
</style>