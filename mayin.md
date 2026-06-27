### Bước 1: Dừng các dịch vụ đang chạy

```bash
sudo systemctl stop ccpd
sudo systemctl stop cups

```

### Bước 2: Xóa cấu hình máy in trong hệ thống

```bash
sudo ccpdadmin -x LBP2900
sudo lpadmin -x LBP2900
sudo lpadmin -x LBP2900-2
```

### Bước 3: Gỡ cài đặt tận gốc gói phần mềm (Packages)

```bash
sudo apt-get purge cndrvcups-common cndrvcups-capt -y
sudo apt-get autoremove -y
```

### Bước 4: Bước 4: Dọn rác thư mục và file cấu hình rác

```bash
sudo rm -rf /var/ccpd
sudo rm -rf /var/captmon
sudo rm -f /etc/ccpd.conf
```

### Bước 5: Khởi động lại dịch vụ quản lý in ấn cốt lõi

```bash
sudo systemctl start cups
```

### Bước 6: tao dummy

```bash
# Tạo cấu trúc package thủ công
mkdir -p /tmp/fakepango/DEBIAN

cat > /tmp/fakepango/DEBIAN/control << 'EOF'
Package: libpango1.0-0
Version: 1.52.1
Architecture: i386
Maintainer: Fake
Description: Fake libpango1.0-0
EOF

# Build package
dpkg-deb --build /tmp/fakepango /tmp/libpango1.0-0_1.52.1_i386.deb

# Cài vào hệ thống
sudo dpkg -i --force-architecture /tmp/libpango1.0-0_1.52.1_i386.deb
```

### Bước 7: cai dat bang github

```bash
wget https://github.com/nhatkent333/ubuntu_canon_printer_333/raw/master/canon_lbp_setup.sh
chmod +x canon_lbp_setup.sh
./canon_lbp_setup.sh
```

### Bước 8: Tạo file quy tắc Udev

```bash
echo 'KERNEL=="lp*", SUBSYSTEMS=="usb", ATTRS{idVendor}=="04a9", SYMLINK+="canonLBP2900"' | sudo tee /etc/udev/rules.d/99-canon-printer.rules
sudo udevadm control --reload-rules
```

### Bước 9: Nạp lại quy tắc

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
```

### Bước 10: Cập nhật lại cấu hình ccpdadmin

```bash
# Xóa cấu hình cũ
sudo /usr/sbin/ccpdadmin -x LBP2900

# Gán cấu hình mới bằng đường dẫn ảo không bao giờ thay đổi
sudo /usr/sbin/ccpdadmin -p LBP2900 -o /dev/canonLBP2900
```

### Bước 11: Fix lỗi mất đường ống

```bash
sudo nano /etc/systemd/system/ccpd.service
```

### Bước 12: Dán đoạn mã "chống đạn" này vào

Bạn xóa hết nội dung cũ (nếu có) và thay bằng toàn bộ đoạn mã này (Nhấn Ctrl+O, Enter để lưu, và Ctrl+X để thoát):

```bash
[Unit]
Description=CCPD Printing Daemon
Requires=cups.service
After=cups.service

[Service]

Type=forking
# Bỏ qua lỗi nếu không có tiến trình ccpd nào đang chạy
ExecStartPre=-/usr/bin/pkill ccpd
# Tự động tạo thư mục và đường ống ảo
ExecStartPre=/bin/mkdir -p /var/ccpd
ExecStartPre=/bin/rm -f /var/ccpd/fifo0
ExecStartPre=/usr/bin/mkfifo /var/ccpd/fifo0
ExecStartPre=/bin/chmod 777 /var/ccpd/fifo0
# Khởi động driver
ExecStart=/usr/sbin/ccpd
TimeoutSec=30

[Install]
WantedBy=multi-user.target
```

### Bước 13: Lưu lại và kích hoạt 

```bash
sudo systemctl daemon-reload
sudo systemctl enable ccpd.service
sudo systemctl restart ccpd.service
```
### Bước 14: Chỉnh giấy

### Bước 15: chạy lệnh

```bash
sudo systemctl restart
```
### Fix khác

https://gemini.google.com/app/7e09747e62e125e1
