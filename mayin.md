### Bước 1: Trả lại file Service sạch sẽ

Bạn mở lại file cấu hình dịch vụ:

```bash
sudo nano /etc/systemd/system/ccpd.service

```

Xóa toàn bộ nội dung bên trong và dán lại đoạn mã chuẩn này (đã bỏ dòng dò cổng `/bin/sh`):

```ini
[Unit]
Description=CCPD Printing Daemon
Requires=cups.service
After=cups.service

[Service]
Type=forking
ExecStartPre=-/usr/bin/pkill ccpd
ExecStartPre=/bin/mkdir -p /var/ccpd
ExecStartPre=/bin/rm -f /var/ccpd/fifo0
ExecStartPre=/usr/bin/mkfifo /var/ccpd/fifo0
ExecStartPre=/bin/chmod 777 /var/ccpd/fifo0
ExecStart=/usr/sbin/ccpd
TimeoutSec=30

[Install]
WantedBy=multi-user.target

```

*(Nhấn **Ctrl+O**, **Enter** để lưu, và **Ctrl+X** để thoát).*

---

### Bước 2: Khóa chặt cấu hình vào đường dẫn bất tử

Bạn chạy lần lượt 2 lệnh sau để xóa liên kết lỗi và trỏ hẳn máy in vào file ảo do Udev quản lý:

```bash
sudo /usr/sbin/ccpdadmin -x LBP2900
sudo /usr/sbin/ccpdadmin -p LBP2900 -o /dev/canonLBP2900

```

---

### Bước 3: Mở khóa hệ thống và dọn hàng đợi

Trong ảnh, bạn đã gửi 2 lệnh in (request id 40 và 41) nhưng không in được. Lúc này CUPS rất có thể đã "đóng băng" máy in để tự vệ. Bạn cần dọn sạch và mở khóa nó:

```bash
# Xóa toàn bộ lệnh in đang bị kẹt
sudo cancel -a -x

# Đánh thức máy in
sudo cupsenable LBP2900
sudo cupsaccept LBP2900

```

---

### Bước 4: Khởi động lại toàn bộ chu trình

Cuối cùng, nạp lại cấu hình dịch vụ vừa sửa và khởi động chuỗi luồng in:

```bash
sudo systemctl daemon-reload
sudo systemctl restart cups
sudo systemctl restart ccpd.service

```
