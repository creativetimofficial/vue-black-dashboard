<template>
    <Transition name="dfade">
        <div class="actions-dialog" @click.self="closeModal()" v-if="value">
            <card class="dialog" v-if="value">
                <h5 class="text-center">
                    <slot name="title">

                    </slot>
                </h5>

                <ul class="actions-menu">
                    <li class="menu-item" v-for="action in actions" @click="action.execute()" :key="action.title">{{
                        action.title }}</li>
                </ul>
            </card>
        </div>
    </Transition>
</template>

<script>
export default {
    name: "actions-modal",
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        data: {
            type: Array,
            required: true,
        }
    },
    emits: ["input", "onClose"],
    data() {
        return {
            actions: [
                {
                    title: "View",
                    execute: this.viewMenuExec
                },
                {
                    title: "Edit",
                    execute: this.editMenuExec
                },
                {
                    title: "Delete",
                    execute: this.deleteMenuExec
                }
            ]
        }
    },
    watch: {
        value() {
            
        }
    },
    methods: {
        editMenuExec() {
            this.closeModal();
            this.$router.push({ path: `/groups/${this.data.id}`, query: {
                editMode: "true"
            } });
        },
        viewMenuExec() {
            this.closeModal();
            this.$router.push({ path: `/groups/${this.data.id}`, query: {
                editMode: "false"
            } });
        },
        deleteMenuExec() {
            this.$emit("delete");
            this.closeModal();
        },
        closeModal() {
            this.$emit("input", false);
            this.$emit("onClose");
        }
    }
}
</script>

<style lang="scss">
.dfade-enter-active,
.dfade-leave-active {
    transition: opacity 0.5s ease;
}

.dfade-enter,
.dfade-leave-to {
    opacity: 0;
}

.actions-menu {
    margin-top: 0.5rem;
    list-style: none;
    padding: 0;
}

.actions-menu .menu-item {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
}

.actions-menu .menu-item:hover {
    background-color: #333652;
}

.actions-dialog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background-color: #0000004a;
}

.dialog {
    width: 20rem;
}</style>