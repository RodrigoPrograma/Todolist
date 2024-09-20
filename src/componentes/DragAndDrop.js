function DragAndDrop() {
    function DragStart(e) {
        try {
            if (e.target.classList.contains('listItem')) {
                const taskId = e.target.id;
                e.dataTransfer.setData('text', taskId);
                console.log("Elemento arrastrado con id:", taskId);
            }
        } catch (err) {
            console.error("Error en DragStart:", err);
        }
    }
    function DragOver(e) {
        e.preventDefault();
    }
    function Drop(e) {
        try {
            if (e.target.classList.contains('list-container') || e.target.classList.contains('list')) {
                e.preventDefault();
                const taskId = e.dataTransfer.getData('text');
                const child = document.getElementById(taskId);
                if (child) {
                    e.target.appendChild(child);
                    console.log("Elemento soltado en el nuevo contenedor.");
                }
            }
        } catch (err) {
            console.error("Error en Drop:", err);
        }
    }

    document.addEventListener('dragstart', DragStart);
    document.addEventListener('dragover', DragOver);
    document.addEventListener('drop', Drop);
}

export default DragAndDrop;