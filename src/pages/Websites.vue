<template>
    <div>
        <h1>Websites</h1>
        <base-button @click="openModal(null)" type="success">Add Website</base-button>
        <div v-for="website in websites" :key="website.id" class="website-container card">
            <h2>{{ website.link }}</h2>
            <p>Type: {{ typeMap[website.type] }}</p>
            <base-button @click="openModal(website)" type="primary">Edit</base-button>
            <base-button @click="deleteWebsite(website.id)" type="danger">Delete</base-button>
        </div>
        <Modal v-if="showModal" @close="closeModal">
            <h2>{{ modalTitle }}</h2>
            <form @submit.prevent="submitForm">
                <label>Link</label>
                <input v-model="form.link" type="text" required>
                <label>Type</label>
                <select v-model="form.type">
                    <option value="rss">RSS</option>
                    <!-- Add more options as needed -->
                </select>
                <base-button @click.native="submitForm" type="success">Submit</base-button>
            </form>
        </Modal>
    </div>
</template>

<script>
import axios from 'axios';
import Modal from './Websites/Modal.vue';

export default {
    components: {
        Modal
    },
    data() {
        return {
            websites: [],
            typeMap: {
                'rss': 'RSS'
                // Add more types here as needed
            },
            showModal: false,
            form: {
                link: '',
                type: 'rss'
            },
            editingWebsiteId: null
        };
    },
    computed: {
        modalTitle() {
            return this.editingWebsiteId ? 'Edit Website' : 'Add Website';
        }
    },
    async created() {
        await this.fetchWebsites();
    },
    methods: {
        async fetchWebsites() {
            try {
                const response = await axios.get(`${process.env.VUE_APP_BASE_API_URL}/websites/`, {
                    headers: {
                        Authorization: localStorage.getItem("auth_token")
                    }
                });
                this.websites = response.data;
            } catch (error) {
                console.error('Failed to fetch websites:', error);
            }
        },
        openModal(website) {
            if (website) {
                this.form.link = website.link;
                this.form.type = website.type;
                this.editingWebsiteId = website.id;
            }
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.form.link = '';
            this.form.type = 'rss';
            this.editingWebsiteId = null;
        },
        async submitForm() {
            try {
                if (this.editingWebsiteId) {
                    await axios.put(`${process.env.VUE_APP_BASE_API_URL}/websites/${this.editingWebsiteId}`, this.form, {
                        headers: {
                            Authorization: localStorage.getItem("auth_token")
                        }
                    });
                } else {
                    await axios.post(`${process.env.VUE_APP_BASE_API_URL}/websites/`, this.form, {
                        headers: {
                            Authorization: localStorage.getItem("auth_token")
                        }
                    });
                }
                await this.fetchWebsites();
                this.closeModal();
            } catch (error) {
                console.error('Failed to submit form:', error);
            }
        },
        async deleteWebsite(id) {
            try {
                await axios.delete(`${process.env.VUE_APP_BASE_API_URL}/websites/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem("auth_token")
                    }
                });
                this.websites = this.websites.filter(website => website.id !== id);
            } catch (error) {
                console.error('Failed to delete website:', error);
            }
        }
    }
};
</script>
<style scoped>
.website-container {
    padding-bottom: 20px;
}

.card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}
</style>
