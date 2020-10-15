<template>
    <div class='objective-panel'>
        <div>
            <h3>Time Signature</h3>
            <div>
                <div>
                    <div>3/4</div>
                    <div>(15 mins)</div>
                </div>
            </div>
        </div>
        <div>
            <img class='icon' src='../assets/done.png' />
            <img class='icon' src='../assets/not_done.png' />
            <img class='icon' src='../assets/next_class.png' />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.objective-panel {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
}

.objective-panel>div {
    flex: 1;
}

.objective-panel>div>div>div {
    display: flex;
}

.objective-panel>div>div>div>div {
    flex: 1;
    text-align: center;
}
.icon {
    width: 40px;
    height: 40px;
    padding: 5px;
}
</style>