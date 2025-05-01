const STORAGE_KEY = 'trombinoscope_students'

export function loadStudents() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function saveStudents(students) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students))
}
