const prompt = require("prompt-sync")({ sigint: true });

let todos = [];
function generateUniqueId() {
  // TODO: Implementasi fungsi untuk menghasilkan ID unik
  // Ini akan digunakan secara internal untuk setiap objek to-do
  // Contoh: Gabungan waktu saat ini dan angka acak
  return Date.now().toString()+Math.floor(Math.random()*1000).toString();
}

function addTodo() {
  // TODO: Implementasi logika untuk menambah to-do baru
  // 1. Minta input teks to-do dari user menggunakan `prompt()`
  // 2. Validasi input: Pastikan teks tidak kosong atau hanya spasi
  // 3. Buat objek to-do baru dengan properti: id (dari generateUniqueId), text, dan isCompleted (boolean, default false)
  // 4. Tambahkan objek to-do ini ke array `todos`
  // 5. Beri feedback ke user bahwa to-do berhasil ditambahkan
  let text=prompt("Enter your to-do")
  if (text.trim() === "" || text === null){
    console.log("To-do text cannot be empty. or only spaces.");
    return;
  }
  let newTodo = {
    id: generateUniqueId(),
    text: text,
    isCompleted: false,
  }
  todos.push(newTodo);
  console.log(`To-do "${text}" has been added successfuly.`);
}

function markTodoCompleted() {
  // TODO: Implementasi logika untuk menandai to-do sebagai selesai
  // 1. Panggil `listTodos()` untuk menampilkan daftar to-do
  // 2. Minta user memasukkan NOMOR to-do yang ingin ditandai sebagai selesai
  // 3. Validasi input: Pastikan nomor adalah angka, dalam rentang yang valid (1 sampai jumlah to-do)
  // 4. Ubah properti `isCompleted` dari to-do yang dipilih menjadi `true`
  // 5. Beri feedback ke user bahwa to-do berhasil ditandai selesai
  // 6. Tangani kasus jika to-do sudah selesai
// -. new function() { … }
  if (todos.length === 0) {
    console.log("No to-dos to mark as completed.");
    return;
  }

  listTodos();

  let input = prompt("Enter the number of the to-do to mark as completed: ");
  let numberTodo = parseInt(input);

  if (isNaN(numberTodo) || numberTodo < 1 || numberTodo > todos.length) {
    console.log("Invalid number. Please enter a valid number from the list.");
    return;
  }

  let selectedTodo = todos[numberTodo - 1];

  if (selectedTodo.isCompleted) {
    console.log(`To-do "${selectedTodo.text}" is already completed.`);
    return;
  }

  selectedTodo.isCompleted = true;
  console.log(`To-do "${selectedTodo.text}" has been marked as completed.`);
}

function deleteTodo() {
  if (todos.length === 0) {
    console.log("No to-dos to delete.");
    return;
  }}

function listTodos() {
  // TODO: Implementasi logika untuk menampilkan semua to-do
  // 1. Tampilkan judul daftar (misal: "--- YOUR TO-DO LIST ---")
  // 2. Cek apakah array `todos` kosong. Jika ya, tampilkan pesan "No to-dos to display."
  // 3. Jika tidak kosong, iterasi (loop) melalui array `todos`
  // 4. Untuk setiap to-do, tampilkan nomor urut, status ([DONE] atau [ACTIVE]), dan teks to-do
  //    Contoh format: "1. [ACTIVE] | Belajar JavaScript"
  // 5. Tampilkan garis penutup daftar
  console.log("--- YOUR TO-DO LIST ---");

  if (todos.length === 0) {
    console.log("No to-dos to display.");
  } else {
    todos.forEach((todo, index) => {
      const status = todo.isCompleted ? "[DONE]" : "[ACTIVE]";
      console.log(`${index + 1}. ${status} | ${todo.text}`);
    });
  }

  console.log("--- END OF TO-DO LIST ---");
}


function runTodoApp() {
  
  // TODO: Implementasi logika utama aplikasi (menu interaktif)
  // Ini adalah "otak" aplikasi yang terus berjalan sampai user memilih untuk keluar
  let running = true;
  while (running) {
    // 1. Tampilkan menu perintah yang tersedia (add, complete, delete, list, exit)
    // 2. Minta user memasukkan perintah menggunakan `prompt()`
    // 3. Gunakan `switch` statement atau `if/else if` untuk memanggil fungsi yang sesuai
    //    berdasarkan perintah yang dimasukkan user
    // 4. Tangani perintah 'exit' untuk menghentikan loop aplikasi
    // 5. Tangani input perintah yang tidak valid
    
    console.log("\n--- TODO APP MENU ---");
    console.log("1. Add to-do");
    console.log("2. Mark to-do completed");
    console.log("3. List to-dos");
    console.log("4. Delete to-do")
    console.log("4. Exit");

    let choice = prompt("Choose an option: ").toLowerCase();

    switch (choice) {
      case "1":
      case "add":
        addTodo();
        break;

      case "2":
      case "complete":
        markTodoCompleted();
        break;

      case "3":
      case "list":
        listTodos();
        break;

      case "4":
      case "delete":
        deleteTodo();

      case "5":
      case "exit":
        console.log("Exiting application. Goodbye!");
        running = false;
        break;

      default:
        console.log("Invalid option. Please choose a correct command.");
    }
  }
}


// Jangan ubah bagian di bawah ini. Ini adalah cara Node.js menjalankan fungsi utama
// dan mengekspor fungsi-fungsi untuk pengujian (jika nanti ada).

if (require.main === module) {
  runTodoApp();
}

module.exports = {
  todos,
  generateUniqueId,
  addTodo,
  markTodoCompleted,
  deleteTodo,
  listTodos,
  runTodoApp,
};
