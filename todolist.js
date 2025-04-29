// flatpickr başlatılıyor
flatpickr("#datepicker", {
  enableTime: false,
  dateFormat: "Y-m-d",
});

// "Yeni Görev" butonuna basıldığında formu göster
const addNewTaskBtn = document.getElementById("addNewTaskBtn");
const taskFormContainer = document.getElementById("taskFormContainer");
addNewTaskBtn.addEventListener("click", () => {
  clearForm();
  taskFormContainer.classList.toggle("hidden");
});

// "Add Task" butonuna basıldığında görev oluştur
const addTaskConfirmBtn = document.getElementById("addTaskConfirmBtn");
addTaskConfirmBtn.addEventListener("click", addTask);

// Görevleri tutacak dizi
let tasks = [];

// Düzenlenen görev ID'si
let editingTaskId = null;

// Görev ekleme/güncelleme fonksiyonu
function addTask() {
  const title = document.getElementById("taskTitleInput").value.trim();
  const desc = document.getElementById("taskDescInput").value.trim();
  const category = document.getElementById("taskCategoryInput").value;

  if (!title || !desc || !category) {
      alert("Lütfen tüm alanları doldurun.");
      return;
  }

  if (editingTaskId) {
      // Mevcut task güncelleniyor
      tasks = tasks.map(task => 
          task.id === editingTaskId ? { ...task, title, desc, category } : task
      );
      editingTaskId = null;
  } else {
      // Yeni task ekleniyor
      const task = {
          id: Date.now(),
          title,
          desc,
          category,
      };
      tasks.push(task);
  }

  renderTasks();
  clearForm();
}

// Task'ları kategorilere göre yazdır
function renderTasks() {
  const schoolTasks = document.getElementById("schoolTasks");
  const homeTasks = document.getElementById("homeTasks");
  const workTasks = document.getElementById("workTasks");

  schoolTasks.innerHTML = "";
  homeTasks.innerHTML = "";
  workTasks.innerHTML = "";

  tasks.forEach((task) => {
      const taskElement = createTaskElement(task);

      if (task.category === "school") {
          schoolTasks.appendChild(taskElement);
      } else if (task.category === "home") {
          homeTasks.appendChild(taskElement);
      } else if (task.category === "work") {
          workTasks.appendChild(taskElement);
      }
  });
}

// Task kartı oluşturan fonksiyon
function createTaskElement(task) {
  const div = document.createElement("div");
  div.className = "bg-white p-3 rounded shadow";

  const title = document.createElement("h3");
  title.className = "text-md font-bold mb-1";
  title.textContent = task.title;

  const desc = document.createElement("p");
  desc.className = "text-sm text-gray-600";
  desc.textContent = task.desc;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "mt-2 flex space-x-2";

  const editBtn = document.createElement("button");
  editBtn.className = "text-xs text-blue-500 hover:underline";
  editBtn.textContent = "Düzenle";
  editBtn.addEventListener("click", () => editTask(task.id));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "text-xs text-red-500 hover:underline";
  deleteBtn.textContent = "Sil";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  div.appendChild(title);
  div.appendChild(desc);
  div.appendChild(buttonsDiv);

  return div;
}

// Task silme fonksiyonu
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();

  // Silince tüm kategorileri göster
  document.getElementById("schoolTasks").parentElement.style.display = "";
  document.getElementById("homeTasks").parentElement.style.display = "";
  document.getElementById("workTasks").parentElement.style.display = "";

  // Arama inputunu temizle
  searchInput.value = "";
}

// Task düzenleme fonksiyonu
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  document.getElementById("taskTitleInput").value = task.title;
  document.getElementById("taskDescInput").value = task.desc;
  document.getElementById("taskCategoryInput").value = task.category;

  editingTaskId = id;

  taskFormContainer.classList.remove("hidden");
}

// Formu temizleyen fonksiyon
function clearForm() {
  document.getElementById("taskTitleInput").value = "";
  document.getElementById("taskDescInput").value = "";
  document.getElementById("taskCategoryInput").selectedIndex = 0;
  editingTaskId = null;
  taskFormContainer.classList.add("hidden");
}


// Arama inputu
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    
    const schoolSection = document.getElementById("schoolTasks");
    const homeSection = document.getElementById("homeTasks");
    const workSection = document.getElementById("workTasks");

    // Eğer "okul", "ev" veya "iş" aranıyorsa, kategorilere göre göster/gizle
    if (query === "okul") {
        schoolSection.parentElement.style.display = "";
        homeSection.parentElement.style.display = "none";
        workSection.parentElement.style.display = "none";
    } else if (query === "ev") {
        homeSection.parentElement.style.display = "";
        schoolSection.parentElement.style.display = "none";
        workSection.parentElement.style.display = "none";
    } else if (query === "iş" || query === "is") {  // Türkçe klavyeye dikkat
        workSection.parentElement.style.display = "";
        schoolSection.parentElement.style.display = "none";
        homeSection.parentElement.style.display = "none";
    } else if (query === "") {
        // Arama boşsa hepsi tekrar görünür
        schoolSection.parentElement.style.display = "";
        homeSection.parentElement.style.display = "";
        workSection.parentElement.style.display = "";

        // Ayrıca tüm görevler görünür olmalı
        const allTasks = document.querySelectorAll("#schoolTasks > div, #homeTasks > div, #workTasks > div");
        allTasks.forEach(task => task.style.display = "");
    } else {
        // Başlık veya açıklamada arama yap
        const allTasks = document.querySelectorAll("#schoolTasks > div, #homeTasks > div, #workTasks > div");

        allTasks.forEach(task => {
            const title = task.querySelector("h3").textContent.toLowerCase();
            const desc = task.querySelector("p").textContent.toLowerCase();

            if (title.includes(query) || desc.includes(query)) {
                task.style.display = "";
            } else {
                task.style.display = "none";
            }
        });

        // Bölümlerin görünürlüklerini kontrol et
        toggleCategoryVisibility();
    }
});

// Bölümlerin içi boşsa onları gizle
function toggleCategoryVisibility() {
    const categories = ["schoolTasks", "homeTasks", "workTasks"];
    categories.forEach(id => {
        const section = document.getElementById(id);
        const visibleTasks = section.querySelectorAll("div:not([style*='display: none'])");

        if (visibleTasks.length === 0) {
            section.parentElement.style.display = "none";
        } else {
            section.parentElement.style.display = "";
        }
    });
}


