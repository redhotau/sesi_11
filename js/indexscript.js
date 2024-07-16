function submit() {
    let source_nama = document.querySelector("#form_nama");
    let target_nama = document.querySelector("#nama");
    target_nama.innerHTML = source_nama.value;
//hide display
    let form = document.querySelector('#the_form');
    console.log (form.style.display = "none");
}
// show display
function show_form() {
    let form = document.querySelector('#the_form');
    console.log (form.style.display = "block");
}