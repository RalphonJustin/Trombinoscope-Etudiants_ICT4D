export function exportStudents(students) {
    const data = JSON.stringify(students, null, 2) // Ajout d'une indentation pour rendre le JSON lisible
    const blob = new Blob([data], { type: 'application/json' }) // Correction du type MIME
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'students_data.json' // Extension corrigée pour refléter le contenu JSON
    a.click()
    URL.revokeObjectURL(url)
}

export function importStudents(callback) {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json' // Correction de l'extension acceptée
    input.onchange = (e) => {
        const file = e.target.files[0]
        if (!file) {
            alert('Aucun fichier sélectionné.')
            return
        }
        const reader = new FileReader()
        reader.onload = (event) => {
            try {
                const content = event.target.result
                const students = JSON.parse(content) // Tentative de parsing JSON
                if (!Array.isArray(students)) { // Vérification que le contenu est bien un tableau
                    throw new Error('Le fichier ne contient pas une liste valide d\'étudiants.')
                }
                callback(students)
            } catch (error) {
                alert(`Erreur de fichier : ${error.message}`) // Message d'erreur plus descriptif
            }
        }
        reader.readAsText(file)
    }
    input.click()
}