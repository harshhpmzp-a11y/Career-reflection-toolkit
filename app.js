// ── Storage helpers ──────────────────────────────────────────────
function loadStudents() {
  const saved = localStorage.getItem('ct_students');
  if (saved) return JSON.parse(saved);
  localStorage.setItem('ct_students', JSON.stringify(STUDENTS));
  return STUDENTS;
}

function saveStudents(students) {
  localStorage.setItem('ct_students', JSON.stringify(students));
}

function getCurrentStudent() {
  const id = sessionStorage.getItem('ct_current');
  if (!id) return null;
  return loadStudents().find(s => s.id === id) || null;
}

function setCurrentStudent(id) {
  sessionStorage.setItem('ct_current', id);
}

// ── Avatar colour mapping ────────────────────────────────────────
const AV_COLORS = ['av-blue','av-green','av-amber','av-rose','av-purple','av-teal','av-orange','av-pink','av-indigo','av-gray'];
function avColor(index) { return AV_COLORS[index % AV_COLORS.length]; }

// ── Toast ────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── Date helpers ─────────────────────────────────────────────────
function today() { return new Date().toISOString().split('T')[0]; }
function fmtDate(d) {
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}
function daysUntil(d) {
  const diff = new Date(d) - new Date(today());
  return Math.ceil(diff / 86400000);
}

// ── Goal status helpers ──────────────────────────────────────────
function goalStatusBadge(status) {
  if (status === 'done') return '<span class="badge badge-green">Done</span>';
  const d = daysUntil(status); // won't be used, just for reference
  return '<span class="badge badge-blue">In progress</span>';
}

// ── Sidebar active link ──────────────────────────────────────────
function setActiveNav() {
  const page = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('href') === page || el.dataset.page === page);
  });
}

// ── Guard: redirect to login if no student selected ──────────────
function requireStudent() {
  const role = sessionStorage.getItem('ct_role');
  if (role !== 'student' || !getCurrentStudent()) { location.href = 'login.html'; }
}

// ── Guard: admin only ────────────────────────────────────────────
function requireAdmin() {
  const role = sessionStorage.getItem('ct_role');
  if (role !== 'admin') { location.href = 'login.html'; }
}

// ── Logout ───────────────────────────────────────────────────────
function logout() {
  sessionStorage.removeItem('ct_role');
  sessionStorage.removeItem('ct_current');
  location.href = 'login.html';
}

// ── Sidebar student info ─────────────────────────────────────────
function renderSidebarStudent() {
  const s = getCurrentStudent();
  if (!s) return;
  const el = document.getElementById('sidebar-student');
  if (!el) return;
  const students = loadStudents();
  const idx = students.findIndex(x => x.id === s.id);
  el.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;">
      <div class="avatar ${avColor(idx)}">${s.avatar}</div>
      <div>
        <div class="sname">${s.name}</div>
        <div class="scourse">${s.course} · Y${s.year}</div>
      </div>
    </div>
    <div style="margin-top:10px;">
      <button onclick="logout()" style="background:none;border:none;font-size:12px;color:var(--muted);cursor:pointer;padding:0;font-family:var(--font);">Sign out →</button>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  renderSidebarStudent();
});
