<template>
    <div @dblclick="" @click="() => isBulkSelect && bulkSelected('item')" class="channel list-item">
        <div v-if="isBulkSelect">
            <div class="channel-soptions">
                <input :checked="isSelected" @click.stop @change="e => bulkSelected('checkbox', e)" type="checkbox"
                    class="form-checkbox" />
            </div>
        </div>
        <div class="channel-icon">
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22320%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664f761b63%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664f761b63%22%3E%3Crect%20width%3D%22320%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22110.203125%22%20y%3D%2297.35%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                alt="ChannelName">
        </div>
        <div class="channel-body">
            <h4 class="font-medium p-0 m-0 pb-2">{{ title }}</h4>
            <div class="d-flex w-100">
                <ul class="channel-statistic">
                    <li class="statistic-item text-muted"><svg height="15" viewBox="0 0 1409 977" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect width="144.948" height="976.768" rx="72.4741" fill="#0C7045" />
                            <rect x="1264.05" width="144.948" height="976.768" rx="72.4741" fill="#0C7045" />
                            <rect x="316.013" y="257.255" width="144.65" height="463.573" rx="72.3252" fill="#2DCE89" />
                            <rect x="948.039" y="257.255" width="144.65" height="463.573" rx="72.3252" fill="#2DCE89" />
                            <rect x="632.026" y="174.983" width="144.948" height="628.108" rx="72.4741" fill="#2DCE89" />
                        </svg> Interval {{ data.interval }}</li>
                    <li class="statistic-item text-muted"><svg height="15" class="mr-1" viewBox="0 0 941 1029" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M434 992C434 1012.43 450.565 1029 471 1029C491.435 1029 508 1012.43 508 992L434 992ZM497.163 243.837C482.714 229.388 459.286 229.388 444.837 243.837L209.37 479.304C194.921 493.753 194.921 517.18 209.37 531.63C223.82 546.079 247.247 546.079 261.696 531.63L471 322.326L680.304 531.63C694.753 546.079 718.18 546.079 732.63 531.63C747.079 517.18 747.079 493.753 732.63 479.304L497.163 243.837ZM508 992L508 270L434 270L434 992L508 992Z"
                                fill="#2DCE89" />
                            <rect width="941" height="144.65" rx="72.325" fill="#0C7045" />
                        </svg> {{ data.limit }} per posts limit</li>
                    <li class="statistic-item text-muted"><svg height="15" class="mr-1" viewBox="0 0 1207 1390" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="32" y="215" width="1143" height="1143" rx="281" fill="#2DCE89" stroke="#0C7045"
                                stroke-width="64" />
                            <path d="M253 879.5C342 1022.5 321 1180 463 1217C605 1254 960.417 479.29 1122 18"
                                stroke="#0C7045" stroke-width="107" />
                        </svg> {{ data.posts_left }} posts left</li>
                    <li class="statistic-item text-muted"><svg height="15" class="mr-1" viewBox="0 0 800 800" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_9_135)">
                                <path
                                    d="M400 0C179.094 0 0 179.094 0 400C0 620.906 179.094 800 400 800C620.906 800 800 620.906 800 400C800 179.094 620.906 0 400 0ZM269.08 65.0141C230.12 107.388 199.267 168.334 180.4 240.002H77.7328C117.467 160.533 185.733 97.6938 269.08 65.0141ZM40 400C40 357.814 47.9328 317.614 61.3469 280H171.494C164.294 317.959 160 358.067 160 400C160 441.933 164.294 482.041 171.48 520H61.3469C47.9328 482.386 40 442.188 40 400ZM77.7328 560H180.4C199.28 631.667 230.12 692.612 269.08 734.986C185.733 702.306 117.467 639.467 77.7328 560ZM380 758.106C311.547 745.212 252.067 667.106 221.627 560H380V758.106ZM380 520H212.094C204.4 482.241 200 441.88 200 400C200 358.12 204.4 317.759 212.094 280H380V520ZM380 240H221.627C252.067 132.894 311.547 54.7859 380 41.8938V240ZM722.267 240H619.6C600.72 168.333 569.88 107.386 530.92 65.0125C614.267 97.6938 682.533 160.533 722.267 240ZM420 41.8938C488.453 54.7875 547.933 132.894 578.373 240H420V41.8938ZM420 280H587.906C595.6 317.759 600 358.12 600 400C600 441.88 595.6 482.241 587.906 520H420V280ZM420 758.106V560H578.373C547.933 667.106 488.453 745.214 420 758.106ZM530.92 734.986C569.88 692.6 600.72 631.666 619.6 560H722.267C682.533 639.467 614.267 702.306 530.92 734.986ZM628.506 520C635.706 482.041 640 441.933 640 400C640 358.067 635.706 317.959 628.52 280H738.667C752.067 317.614 760 357.814 760 400C760 442.188 752.067 482.386 738.653 520H628.506Z"
                                    fill="#2DCE89" />
                            </g>
                            <defs>
                                <clipPath id="clip0_9_135">
                                    <rect width="800" height="800" fill="white" />
                                </clipPath>
                            </defs>
                        </svg> 0 website sources</li>
                </ul>


            </div>
        </div>
        <div v-if="!isBulkSelect" class="channel-actions">
            <button class="actions-button" @click="$emit('channelSelected', data)"><svg height="8px" viewBox="0 0 956 234"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="117" cy="117" r="117" fill="#ffff" />
                    <circle cx="477.678" cy="117" r="117" fill="#ffff" />
                    <circle cx="838.355" cy="117" r="117" fill="#ffff" />
                </svg></button>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-item",
    emits: ["channelSelected"],
    props: {
        title: {
            type: String,
            required: true,
        },
        data: {
            type: Array,
        },
        isBulkSelect: {
            type: Boolean,
            default: false,
        },
        isSelected: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        bulkSelected(type, event) {
            if (type === "checkbox") {
                console.log(event.target.checked);
            }
            else if (type === "item") {
                console.log("Toggled");
            }

        }
    }
}
</script>

<style lang="scss">
.channel-body {
    width: 100%;
}

.channel-actions {
    display: flex;
    align-items: center;
}

.channel-actions .actions-button {
    background: none;
    border: none;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
}

.actions-button:hover {
    background-color: #5c5f79;
}

.channel-soptions {
    height: 100%;
    display: flex;
    align-items: center;
}</style>