<template>
    <div>
        <h3>Configs</h3>
        <div class="configs-grid">
            <div v-for="(config, index) in configs" :key="index" class="config-row">
                <base-input v-model="config.name" placeholder="Config Name" @input="handleInput(index)" />
                <base-input v-model="config.value" placeholder="Config Value" @input="handleInput(index)" />
                <base-button type="danger" v-if="config.name && config.value" @click="deleteConfig(index)"
                    class="delete-button">
                    Delete
                </base-button>
            </div>
        </div>
        <base-button type="success" @click="addEmptyConfig" class="add-button">Add new config</base-button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            configs: [],
        };
    },
    methods: {
        async handleInput(index) {
            const config = this.configs[index];
            if (!config.name || !config.value) return;

            // Mark this config as "dirty"
            this.configs[index].isDirty = true;
        },
        async saveConfig(index) {
            const config = this.configs[index];

            if (!config.isDirty) return;

            try {
                if (config.isNew) {
                    const response = await axios.post(
                        `${process.env.VUE_APP_BASE_API_URL}/configs/`,
                        {
                            name: config.name,
                            value: config.value,
                        }, {
                        headers: {
                            Authorization: localStorage.getItem("auth_token")
                        }
                    }
                    );
                    this.configs[index].id = response.data.id;
                    this.configs[index].isNew = false;
                } else {
                    await axios.put(
                        `${process.env.VUE_APP_BASE_API_URL}/configs/${config.name}?new_value=${config.value}`, {}, {
                        headers: {
                            Authorization: localStorage.getItem("auth_token")
                        }
                    }
                    );
                }

                // After successful save, mark this config as "clean"
                this.configs[index].isDirty = false;
            } catch (error) {
                console.error(error);
            }
        },
        async deleteConfig(index) {
            const config = this.configs[index];
            if (!config.isNew) {
                try {
                    await axios.delete(
                        `${process.env.VUE_APP_BASE_API_URL}/configs/${config.name}`, {
                        headers: {
                            Authorization: localStorage.getItem("auth_token")
                        }
                    }
                    );
                } catch (error) {
                    console.error(error);
                }
            }
            this.configs.splice(index, 1);
        },
        addEmptyConfig() {
            this.configs.push({ name: "", value: "", isNew: true, isDirty: false });
        },
        async loadConfigs() {
            try {
                const response = await axios.get(
                    `${process.env.VUE_APP_BASE_API_URL}/configs/`,
                    {
                        headers: {
                            Authorization: localStorage.getItem("auth_token")
                        }
                    }
                );
                this.configs = response.data.map((config) => ({
                    name: config.name,
                    value: config.value,
                    isNew: false,
                    isDirty: false,
                }));
                this.addEmptyConfig();
            } catch (error) {
                console.error(error);
            }
        },
    },
    watch: {
        configs: {
            handler(newVal, oldVal) {
                newVal.forEach((config, index) => {
                    if (config.isDirty) {
                        this.saveConfig(index);
                    }
                });
            },
            deep: true,
        },
    },
    mounted() {
        this.loadConfigs();
    },
};
</script>
<style scoped>
.configs-grid {
    display: grid;
    gap: 10px;
}

.config-row {
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    gap: 10px;
}

.add-button {
    margin-top: 10px;
}
</style>
