document.addEventListener('DOMContentLoaded', function () {
  var GALLERY_BASE_PATH = 'assets/img/gallery/photos/';
  var grid = document.getElementById('galleryGrid');
  var photos = (typeof GALLERY_PHOTOS !== 'undefined') ? GALLERY_PHOTOS : [];

  // gallery-list.js 목록을 읽어서 그리드 칸을 자동으로 만든다.
  photos.forEach(function (filename, idx) {
    var cell = document.createElement('div');
    cell.className = 'gallery-cell';

    var img = document.createElement('img');
    img.src = GALLERY_BASE_PATH + filename;
    img.alt = '웨딩 사진 ' + (idx + 1);
    img.loading = 'lazy';
    img.addEventListener('click', function () { openLightbox(idx); });

    cell.appendChild(img);
    grid.appendChild(cell);
  });

  // ---------- 라이트박스(확대 모달) ----------
  var currentIndex = 0;
  var overlay = document.getElementById('lightboxOverlay');
  var imgEl = document.getElementById('lightboxImg');
  var counterEl = document.getElementById('lightboxCounter');

  function fullPath(i) {
    return GALLERY_BASE_PATH + photos[i];
  }
  function updateLightbox() {
    imgEl.src = fullPath(currentIndex);
    counterEl.textContent = (currentIndex + 1) + ' / ' + photos.length;
  }
  window.openLightbox = function (idx) {
    currentIndex = idx;
    updateLightbox();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  function closeLightbox() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightbox();
  }
  function showNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightbox();
  }

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', showPrev);
  document.getElementById('lightboxNext').addEventListener('click', showNext);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
});
