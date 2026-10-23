# Voice Clone vs Original Voice — One-Page Showcase & A/B Testing

Landing page độc lập (Standalone HTML, CSS, JavaScript) được thiết kế hiện đại theo phong cách Dark Studio để so sánh trực quan và sắc nét giữa **Giọng Gốc (Original Voice)** và **Giọng AI Clone (Voice Clone)**.

---

## ✨ Điểm Nổi Bật

1. **A/B Seamless Switch (Chuyển đổi tức thì không ngắt nhịp)**:
   - Cả 2 audio phát đồng thời cùng mốc thời gian.
   - Khi bấm phím `Tab` hoặc nút chuyển đổi, âm thanh chuyển sang kênh tương ứng ngay lập tức để tai người nhận biết tức thì sự tương đồng âm sắc, ngữ điệu và hơi thở.
2. **Audio Waveform Visualizer**:
   - Canvas đồ họa sóng âm 60fps với hiệu ứng dải màu phát sáng (Cyan cho Voice Gốc, Neon Violet cho Voice Clone).
3. **Bộ dữ liệu mẫu có sẵn**:
   - Mẫu 01: `original.m4a` ↔ `clone.wav`
   - Mẫu 02: `original_2.m4a` ↔ `clone_2.wav`
4. **Hỗ trợ Test File Tùy Chọn (Client-side Upload)**:
   - Kéo thả hoặc chọn bất kỳ file `.mp3`, `.wav`, `.m4a` nào từ máy tính để so sánh trực tiếp trên trình duyệt, dữ liệu an toàn 100% không gửi lên server.
5. **Phím tắt tiện dụng**:
   - `Space`: Phát / Tạm dừng.
   - `Tab`: Đổi nhanh qua lại giữa Original và Clone.

---

## 🚀 Hướng Dẫn Deploy Lên GitHub Pages (Miễn Phí)

Trang web hoàn toàn là **tĩnh (static files)**, không cần build, không cần backend:

### Cách 1: Đẩy mã nguồn lên GitHub Repo
```bash
git init
git add .
git commit -m "Initial commit: Voice clone comparison landing page"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
git push -u origin main
```

### Cách 2: Bật GitHub Pages
1. Vào GitHub repo của bạn > bấm tab **Settings**.
2. Chọn mục **Pages** ở menu bên trái.
3. Tại **Build and deployment** > **Source**: chọn `Deploy from a branch`.
4. Branch chọn `main` / folder `/(root)` > bấm **Save**.
5. Sau 1-2 phút, trang web sẽ online tại địa chỉ:
   `https://<tai-khoan-cua-ban>.github.io/<ten-repo>/`

---

## 💻 Xem Thử Trực Tiếp Trên Local

Bạn có thể mở trực tiếp file `index.html` bằng trình duyệt hoặc dùng Live Server / Python HTTP Server:
```bash
# Bằng Python:
python -m http.server 8080
# Mở trình duyệt: http://localhost:8080
```
