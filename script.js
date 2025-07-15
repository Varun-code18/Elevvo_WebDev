function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    console.log("Sidebar toggled, classes:", sidebar.classList); // Debug log
}