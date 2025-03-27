// Tạo dữ liệu EEG giả lập
function generateEEGData(numPoints, numChannels) {
    const data = [];
    for (let i = 0; i < numChannels; i++) {
        const channelData = [];
        let lastValue = Math.random() * 10;
        
        for (let j = 0; j < numPoints; j++) {
            // Tạo dữ liệu sóng não giả lập với một số dao động
            lastValue = lastValue + (Math.random() - 0.5) * 2;
            
            // Thêm một số mẫu sóng não đặc trưng
            const sinValue = Math.sin(j / 10) * 3;
            const alphaWave = Math.sin(j / 5) * 2;
            const betaWave = Math.sin(j / 2) * 1.5;
            
            let value = lastValue + sinValue;
            
            // Thêm sóng Alpha và Beta với tỷ lệ khác nhau tùy theo kênh
            if (i === 0) value += alphaWave * 1.5; // Kênh với nhiều sóng Alpha
            if (i === 1) value += betaWave * 1.2; // Kênh với nhiều sóng Beta
            
            channelData.push(value);
        }
        data.push(channelData);
    }
    return data;
}

// Khởi tạo biểu đồ EEG
function initEEGChart() {
    const ctx = document.getElementById('eegChart').getContext('2d');
    
    // Tạo dữ liệu ban đầu
    const numPoints = 100;
    const numChannels = 3;
    const eegData = generateEEGData(numPoints, numChannels);
    
    // Tạo labels cho trục x
    const labels = Array.from({length: numPoints}, (_, i) => i);
    
    // Tạo datasets cho biểu đồ
    const datasets = eegData.map((channelData, index) => {
        const colors = ['#2196F3', '#4CAF50', '#FF9800'];
        const channelNames = ['Kênh 1 (Trán)', 'Kênh 2 (Thái dương)', 'Kênh 3 (Đỉnh đầu)'];
        
        return {
            label: channelNames[index],
            data: channelData,
            borderColor: colors[index],
            backgroundColor: 'transparent',
            borderWidth: 1.5,
            pointRadius: 0,
            tension: 0.4
        };
    });
    
    // Khởi tạo biểu đồ
    const eegChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Thời gian (ms)'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Biên độ (μV)'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
    
    // Cập nhật biểu đồ theo thời gian thực
    setInterval(() => {
        // Tạo dữ liệu mới
        const newData = generateEEGData(1, numChannels);
        
        // Cập nhật dữ liệu cho mỗi kênh
        for (let i = 0; i < numChannels; i++) {
            // Loại bỏ điểm dữ liệu đầu tiên và thêm điểm mới vào cuối
            eegChart.data.datasets[i].data.shift();
            eegChart.data.datasets[i].data.push(newData[i][0]);
        }
        
        // Cập nhật biểu đồ
        eegChart.update();
    }, 100);
}

// Xử lý sự kiện khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo biểu đồ EEG
    initEEGChart();
    
    // Xử lý sự kiện cho nút trò chuyện với trợ lý AI
    const chatBtn = document.querySelector('.chat-btn');
    const aiModal = document.getElementById('aiAssistantModal');
    const closeModal = document.querySelector('.close-modal');
    
    chatBtn.addEventListener('click', function() {
        aiModal.style.display = 'flex';
    });
    
    closeModal.addEventListener('click', function() {
        aiModal.style.display = 'none';
    });
    
    // Đóng modal khi click bên ngoài
    window.addEventListener('click', function(event) {
        if (event.target === aiModal) {
            aiModal.style.display = 'none';
        }
    });
    
    // Xử lý gửi tin nhắn trong chat
    const chatInput = document.querySelector('.chat-input input');
    const sendBtn = document.querySelector('.chat-input button');
    const chatContainer = document.querySelector('.chat-container');
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Thêm tin nhắn của người dùng
            const userMessageHTML = `
                <div class="message user">
                    <div class="message-content">
                        <p>${message}</p>
                    </div>
                </div>
            `;
            chatContainer.insertAdjacentHTML('beforeend', userMessageHTML);
            
            // Xóa nội dung input
            chatInput.value = '';
            
            // Cuộn xuống dưới cùng
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            // Giả lập phản hồi từ AI sau 1 giây
            setTimeout(() => {
                const aiResponses = [
                    "Dựa trên dữ liệu EEG của bạn, tôi thấy bạn đang trong trạng thái tập trung cao. Đây là thời điểm tốt để giải quyết các vấn đề phức tạp.",
                    "Tôi nhận thấy sóng Alpha của bạn đang ở mức cao, điều này cho thấy bạn đang trong trạng thái thư giãn tỉnh táo. Đây là trạng thái tốt cho sáng tạo và học tập.",
                    "Dữ liệu EEG cho thấy bạn có thể đang cảm thấy hơi căng thẳng. Tôi đề xuất bạn thử một bài tập thở sâu hoặc nghe sóng isochronic Alpha để thư giãn.",
                    "Tôi hiểu cảm giác của bạn. Nhiều người cũng trải qua những thách thức tương tự. Dựa trên mẫu sóng não của bạn, tôi nghĩ bạn có thể hưởng lợi từ một số bài tập chánh niệm."
                ];
                
                const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
                
                const aiMessageHTML = `
                    <div class="message ai">
                        <img src="ai-avatar.png" alt="AI Avatar" class="ai-avatar-small">
                        <div class="message-content">
                            <p>${randomResponse}</p>
                        </div>
                    </div>
                `;
                chatContainer.insertAdjacentHTML('beforeend', aiMessageHTML);
                
                // Cuộn xuống dưới cùng
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 1000);
        }
    }
    
    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Cập nhật giá trị sóng não theo thời gian
    setInterval(() => {
        // Cập nhật giá trị phần trăm cho các loại sóng não
        const waveValues = document.querySelectorAll('.wave-value');
        const deltaValue = Math.floor(Math.random() * 10) + 10; // 10-20%
        const thetaValue = Math.floor(Math.random() * 10) + 15; // 15-25%
        const alphaValue = Math.floor(Math.random() * 10) + 20; // 20-30%
        const betaValue = Math.floor(Math.random() * 10) + 30; // 30-40%
        const gammaValue = Math.floor(Math.random() * 5) + 3; // 3-8%
        
        waveValues[0].textContent = deltaValue + '%';
        waveValues[1].textContent = thetaValue + '%';
        waveValues[2].textContent = alphaValue + '%';
        waveValues[3].textContent = betaValue + '%';
        waveValues[4].textContent = gammaValue + '%';
        
        // Cập nhật trạng thái tinh thần dựa trên giá trị sóng não
        const stateIndicator = document.querySelector('.state-indicator');
        const levelFill = document.querySelector('.level-fill');
        const levelValue = document.querySelector('.state-level span');
        
        // Xác định trạng thái dựa trên tỷ lệ sóng não
        if (alphaValue > 25) {
            // Trạng thái thư giãn
            stateIndicator.className = 'state-indicator relaxed';
            stateIndicator.innerHTML = '<i class="fas fa-spa"></i><span>Thư giãn</span>';
            const relaxLevel = alphaValue + 30;
            levelFill.style.width = relaxLevel + '%';
            levelValue.textContent = relaxLevel + '%';
        } else if (betaValue > 35) {
            // Trạng thái tập trung
            stateIndicator.className = 'state-indicator focused';
            stateIndicator.innerHTML = '<i class="fas fa-bullseye"></i><span>Tập trung</span>';
            const focusLevel = betaValue + 35;
            levelFill.style.width = focusLevel + '%';
            levelValue.textContent = focusLevel + '%';
        } else if (thetaValue > 20) {
            // Trạng thái mơ màng
            stateIndicator.className = 'state-indicator relaxed';
            stateIndicator.innerHTML = '<i class="fas fa-cloud"></i><span>Mơ màng</span>';
            const dreamyLevel = thetaValue + 40;
            levelFill.style.width = dreamyLevel + '%';
            levelValue.textContent = dreamyLevel + '%';
        } else {
            // Trạng thái căng thẳng
            stateIndicator.className = 'state-indicator stressed';
            stateIndicator.innerHTML = '<i class="fas fa-bolt"></i><span>Căng thẳng</span>';
            const stressLevel = deltaValue + gammaValue + 40;
            levelFill.style.width = stressLevel + '%';
            levelValue.textContent = stressLevel + '%';
        }
    }, 5000); // Cập nhật mỗi 5 giây
});
