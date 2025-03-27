// Xử lý sự kiện cho menu và các tab
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý menu trên thiết bị di động
    const menuToggle = document.getElementById('menuToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('active');
        });
    }
    
    if (closeSidebar) {
        closeSidebar.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    }
    
    // Xử lý chuyển đổi tab
    const menuItems = document.querySelectorAll('nav ul li');
    const sections = document.querySelectorAll('.section-content');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa active class từ tất cả menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Thêm active class cho menu item được click
            this.classList.add('active');
            
            // Ẩn tất cả các section
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Hiển thị section tương ứng
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).style.display = 'block';
            
            // Đóng sidebar trên thiết bị di động sau khi chọn menu
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
            
            // Cập nhật tiêu đề trang
            const sectionTitle = this.textContent.trim();
            document.title = 'DoopAI - ' + sectionTitle;
        });
    });
    
    // Khởi tạo các biểu đồ thống kê
    initStatisticsCharts();
});

// Khởi tạo các biểu đồ thống kê
function initStatisticsCharts() {
    // Biểu đồ xu hướng trạng thái tinh thần
    if (document.getElementById('mentalStateChart')) {
        const mentalStateCtx = document.getElementById('mentalStateChart').getContext('2d');
        
        const mentalStateData = {
            labels: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
            datasets: [
                {
                    label: 'Tập trung',
                    data: [65, 70, 60, 75, 80, 75, 68],
                    borderColor: '#2196F3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Thư giãn',
                    data: [50, 55, 65, 60, 55, 65, 70],
                    borderColor: '#4CAF50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Căng thẳng',
                    data: [30, 25, 35, 20, 15, 20, 25],
                    borderColor: '#F44336',
                    backgroundColor: 'rgba(244, 67, 54, 0.1)',
                    tension: 0.4,
                    fill: true
                }
            ]
        };
        
        new Chart(mentalStateCtx, {
            type: 'line',
            data: mentalStateData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Mức độ (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Ngày trong tuần'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        });
    }
    
    // Biểu đồ thời gian sử dụng
    if (document.getElementById('usageChart')) {
        const usageCtx = document.getElementById('usageChart').getContext('2d');
        
        const usageData = {
            labels: ['Phân tích EEG', 'Sóng Isochronic', 'Trợ lý AI'],
            datasets: [{
                data: [45, 30, 25],
                backgroundColor: ['#2196F3', '#4CAF50', '#9C27B0'],
                hoverOffset: 4
            }]
        };
        
        new Chart(usageCtx, {
            type: 'doughnut',
            data: usageData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Biểu đồ phân bố sóng não
    if (document.getElementById('brainwaveChart')) {
        const brainwaveCtx = document.getElementById('brainwaveChart').getContext('2d');
        
        const brainwaveData = {
            labels: ['Delta', 'Theta', 'Alpha', 'Beta', 'Gamma'],
            datasets: [{
                label: 'Phân bố sóng não',
                data: [15, 20, 25, 35, 5],
                backgroundColor: [
                    '#9C27B0',
                    '#3F51B5',
                    '#2196F3',
                    '#4CAF50',
                    '#FF9800'
                ],
                borderWidth: 1
            }]
        };
        
        new Chart(brainwaveCtx, {
            type: 'bar',
            data: brainwaveData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tỷ lệ (%)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}
