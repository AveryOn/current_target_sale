<template>

    <!-- Перетаскиваемый DIV -->
    <div class="select-area-image" id="selectCircle">
        <div class="select-area-image__space" id="mydivheader"></div>
    </div>

</template>

<script>
export default {
    // props: {
    //     parent: {
    //         width: {
    //             type: Number,
    //             required: true,
    //         },
    //         height: {
    //             type: Number,
    //             required: true,
    //         },
    //     }
    // },
    methods: {
        dragElement(elmnt) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                // если присутствует, заголовок - это место, откуда вы перемещаете DIV:
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                // в противном случае переместите DIV из любого места внутри DIV:
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // получить положение курсора мыши при запуске:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // вызов функции при каждом перемещении курсора:
                document.onmousemove = elementDrag;
            }

            const elementDrag = (e) => {
                e = e || window.event;
                e.preventDefault();
                // вычислить новую позицию курсора:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                
                
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

                this.$emit('updatePositionMove', {
                    top: elmnt.offsetTop, 
                    left: elmnt.offsetLeft,
                    sizeCircle: {
                        width: Math.round(elmnt.getBoundingClientRect().width),
                        height: Math.round(elmnt.getBoundingClientRect().height),
                    }
                })
            }
            
            function closeDragElement() {
                // остановка перемещения при отпускании кнопки мыши:
                document.onmouseup = null;
                document.onmousemove = null;
            }

        }
    },

    mounted(){
        const selectCircle = document.getElementById("selectCircle")

        this.$emit('updatePositionMove', 
            {
                top: 0, 
                left: 0,
                sizeCircle: {
                    width: Math.round(selectCircle.getBoundingClientRect().width),
                    height: Math.round(selectCircle.getBoundingClientRect().height),
                }
            }
        )

        // Сделайте элемент DIV перетаскиваемым:
        this.dragElement(selectCircle);

    }
}
</script>
<style lang="scss" scoped>

.select-area-image {
    position: absolute;
    border-radius: 50%;
    border: 5px solid #d3d3d3;
    width: max-content;
    height: max-content;
    z-index: 10;
}

.select-area-image__space {
    width: 400px;
    height: 400px;
    border-radius: 50%;


}
</style>