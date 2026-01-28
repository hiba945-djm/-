document.addEventListener('DOMContentLoaded', function() {
    
    // 1. التعامل مع التبويبات (المتوسط، الثانوي، الجامعي)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الكلاس active من جميع الأزرار والمحتوى
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // إضافة الكلاس active للزر الذي تم الضغط عليه
            btn.classList.add('active');

            // إظهار المحتوى المناسب بناءً على data-target
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 2. إضافة تأثير بسيط عند التمرير (Sticky Header Shadow)
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        }
    });

    // 3. (اختياري) تحريك سلس عند الضغط على أزرار الهيرو
    const startBtn = document.querySelector('.btn-primary.large');
    if(startBtn) {
        startBtn.addEventListener('click', () => {
            document.getElementById('tracks').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});
