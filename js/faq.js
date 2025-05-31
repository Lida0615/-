 document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      const btn = item.querySelector('.faq-question');
      btn.addEventListener('click', () => {
        
        items.forEach(el => {
          if (el !== item) el.classList.remove('active');
        });

     
        item.classList.toggle('active');
      });
    });
  });