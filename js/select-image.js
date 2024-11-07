// حدد الصور في الـ main-image و second-image
var mainImage = document.querySelector('.main-image img');
var secondImages = document.querySelectorAll('.second-image img');

// إضافة حدث الضغط على كل صورة في second-image
secondImages.forEach(image => {
    image.addEventListener('click', function () {
        // حفظ الـ src للـ main-image والـ second-image التي تم الضغط عليها
        var mainImageSrc = mainImage.src;
        var clickedImageSrc = this.src;

        // تبديل الـ src بين الـ main-image والـ second-image
        mainImage.src = clickedImageSrc;
        this.src = mainImageSrc;

        // إزالة الكلاس image-popup من جميع الصور
        document.querySelectorAll('.image-popup').forEach(img => img.classList.remove('image-popup'));

        // إضافة الكلاس image-popup للـ main-image
        mainImage.classList.add('image-popup');
    });
});
