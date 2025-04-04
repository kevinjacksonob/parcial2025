document.addEventListener('DOMContentLoaded', async () => {
  

  const asignaturaList = document.getElementById('asignaturaList');
  const template = document.getElementById('asignaturaCardTemplate');

  async function renderAsignaturas() {
    const asignaturas = await api.getAsignature ();
    console.log(asignaturas);

    asignaturaList.innerHTML = '';
    asignaturas.forEach(asignatura => {
        console.log(asignatura);
        
        const clone = template.content.cloneNode(true);
        
        clone.querySelector('.asignatura-name').textContent = asignatura.name;
        
        clone.querySelector('.asignatura-id').textContent = `ID: ${asignatura.code}`;
        //clone.querySelector('.student-email').textContent = student.email;
        //clone.querySelector('.student-image').src = student.photo;
        clone.querySelector('.asignatura-description').textContent = asignatura.description;
        //clone.querySelector('.github-link').href = `https://github.com/${student.github}`;
    
        asignaturaList.appendChild(clone);
        
    });
}

await renderAsignaturas();

});